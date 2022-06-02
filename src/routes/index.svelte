<script>
	import Span from './../components/Span.svelte'
	import striptags from 'striptags'

	let title = ''
	let wiki = ''
	let guesses = {}
	let solved = false
	let regex = /(([^\u0000-\u007F]|\w)+)((\W)*)/ig
	const stopwords = ['i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', "you're", "you've", "you'll", "you'd", 'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', "she's", 'her', 'hers', 'herself', 'it', "it's", 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', "that'll", 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', "don't", 'should', "should've", 'now', 'd', 'll', 'm', 'o', 're', 've', 'y', 'ain', 'aren', "aren't", 'couldn', "couldn't", 'didn', "didn't", 'doesn', "doesn't", 'hadn', "hadn't", 'hasn', "hasn't", 'haven', "haven't", 'isn', "isn't", 'ma', 'mightn', "mightn't", 'mustn', "mustn't", 'needn', "needn't", 'shan', "shan't", 'shouldn', "shouldn't", 'wasn', "wasn't", 'weren', "weren't", 'won', "won't", 'wouldn', "wouldn't"]
	let stopwordsDict ={}
	stopwords.filter(w => w.length < 7).forEach(w => stopwordsDict[w]=1)
	
	let titleTokens = []
	let contentTokens = []
	let guess = ''
	let selectedWord = ''

	function getArticle() {
		const titles = ['Australia_(continent)', 'Atlas', 'Surveying', 'Empire_of_Japan', 'Architecture', 'Ice_Skating', 'Eiffel_Tower', 'Galaxy', 'Kilogram', 'Carbon']
		const rand = Math.floor(Math.random() * titles.length);
		let urlTitle = titles[rand]

		// Fetch from wikimedia rest api e.g. https://en.wikipedia.org/api/rest_v1/page/mobile-sections/Australia_%28continent%29
		fetch(`https://en.wikipedia.org/api/rest_v1/page/mobile-sections/${urlTitle}`)
			.then(response => response.json())
			.then(data => {
				title = data.lead.displaytitle
				let html = data.lead.sections[0].text
				html = html.replace(/<style.*>.*<\/style>/ig, '')
				const text = striptags(html);
				// &amp;, &lt;, &gt;, &quot;, and &#39;
				wiki = text
					.replace(/&nbsp;/g, ' ')
					.replace(/&(?:amp);/g, '&')
					.replace(/&(?:lt);/g, '<')
					.replace(/&(?:gt);/g, '>')
					.replace(/&(?:quot);/g, '"')
					.replace(/&(?:#39);/g, "'")
				// strip citations
				wiki = wiki.replace(/\[\d+\]/ig, '')
				renderTokens()
			})
	}
	
	getArticle()

	function renderTokens() {
		console.log('rendering...')

		let titleMatches = [...title.matchAll(regex)]
		titleTokens = getTokens(titleMatches)
		
		let isSolved = true
		for(const i in titleTokens) {
			if(titleTokens[i].redacted) {
				isSolved=false
			}
		}
		solved = isSolved
		
		let contentMatches = [...wiki.matchAll(regex)]
		contentTokens = getTokens(contentMatches)
	}
	
	function getTokens(matches) {
		let tokens=[]
		for(const i in matches) {
			let word = matches[i][1]
			if (word) {
				let wordLower = word.toLowerCase();
				let token = {
					value: word,
					wordLower: wordLower,
					redacted:
						!solved
						&& wordLower.length > 2
						&& !stopwordsDict.hasOwnProperty(wordLower) 
						&& !guesses.hasOwnProperty(wordLower),
					highlight: wordLower == selectedWord,
				}
				tokens.push(token)
			}
			if(matches[i][3]) {
				tokens.push({value:matches[i][3]})
			}
		}
		return tokens
	}
	//renderTokens()
	
	function selectWord(event) {
		console.log(event)
		selectedWord = event.word
		renderTokens()
	}
	
	function handleSubmit() {
		selectedWord=guess.toLowerCase()
		if(selectedWord = 'togglecheats') {
			solved = !solved
		}
		let regex = new RegExp(`\\b${selectedWord}\\b`,'gi')
		let count = (wiki.match(regex) || []).length
		guesses[selectedWord] = count
		guess = ''
		renderTokens()
	}
</script>
<div id="redactle">
	<div id="main">
		<h1>Redactle</h1>
			{#if solved}
					<p>Solved in {Object.keys(guesses).length} guesses!</p>
			{/if}
		<article>
			<h2>
				{#each titleTokens as token}
					<Span value={token.value} redacted={token.redacted} highlight={token.highlight || false}></Span>
				{/each}
			</h2>
			<p>
				{#each contentTokens as token}
					<Span value={token.value} redacted={token.redacted} highlight={token.highlight || false}></Span>
				{/each}
			</p>
		</article>
	</div>

	<guesses>
		<h3>
			Guesses
		</h3>
		<div id="guess-form">
		<form on:submit|preventDefault={handleSubmit}>
			<input bind:value={guess} placeholder="guess a word...">
		</form>
	</div>
		<guesses>
			{#each Object.keys(guesses).reverse() as word, i}
			<span on:click={selectWord({word})} class="{selectedWord==word ? 'highlight word' : 'word'}"><b>{word}</b> ({guesses[word]})</span> 
			{/each}
		</guesses>
	</guesses>
	</div>
<style>
	#redactle {
		display:flex;
		height:100%;
	}
	#main {
		height:100%;
		position:relative;
	}
	article {
		background: #fffff5;
		padding:1em;
		height:100%;
		overflow:auto;
	}
	article h2, article p {
		font-family:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace
	}
	guesses {
		height:100%;
	}
	guesses .word {
		margin:0 0 0 1em;
	}
	.highlight {
		background-color: #66eeff;
	}
</style>