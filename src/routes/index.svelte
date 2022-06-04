<script>
	import Span from './../components/Span.svelte'
	import striptags from 'striptags'
import { get_all_dirty_from_scope } from 'svelte/internal'

	let title = ''
	let wiki = ''
	let wikiSections = []
	let guesses = {}
	let solved = false
	let regex = /(([^\u0000-\u007F]|\w)+)((\W)*)/ig
	const stopwords = ['i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', "you're", "you've", "you'll", "you'd", 'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', "she's", 'her', 'hers', 'herself', 'it', "it's", 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', "that'll", 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', "don't", 'should', "should've", 'now', 'd', 'll', 'm', 'o', 're', 've', 'y', 'ain', 'aren', "aren't", 'couldn', "couldn't", 'didn', "didn't", 'doesn', "doesn't", 'hadn', "hadn't", 'hasn', "hasn't", 'haven', "haven't", 'isn', "isn't", 'ma', 'mightn', "mightn't", 'mustn', "mustn't", 'needn', "needn't", 'shan', "shan't", 'shouldn', "shouldn't", 'wasn', "wasn't", 'weren', "weren't", 'won', "won't", 'wouldn', "wouldn't"]
	let stopwordsDict ={}
	stopwords.filter(w => w.length < 8).forEach(w => stopwordsDict[w]=1)
	const titleList = ["UmljaGFyZF9JX29mX0VuZ2xhbmQ=","RWFzdF9DaGluYV9TZWE=","UGl6emE=","UG9pc29u","UHVtcF9vcmdhbg==","QXByaWNvdA==","VGl0aGU=","VmlkZW9fYXJ0","U3VwZXJjb25kdWN0aXZpdHk=","WmlvbmlzbQ==","UGln","U3VsZnVyaWNfYWNpZA==","RGltZW5zaW9u","UHJvdG9u","Q291bmNpbF9vZl9FdXJvcGU=","Um9zZXR0YV9TdG9uZQ==","QXBvbGxvXzEx","R29kYXZhcmlfUml2ZXI=","R2VvcmdlX0MuX01hcnNoYWxs","Q29uZ3Jlc3Nfb2ZfQmVybGlu","V2FzaGluZ3Rvbl9JcnZpbmc=","TWV0YWxsdXJneQ==","VGhvbWFzX0hlbnJ5X0h1eGxleQ==","SG9yaXpvbg==","TWVsdGluZw==","SmVsbHlmaXNo","U2VhdHRsZQ==","Sm9obl90aGVfQmFwdGlzdA==","SG9ybW9uZQ==","RHJhZ29u","U2F3","SGFydWtpX011cmFrYW1p","QWJpb2dlbmVzaXM=","RXhwbG9yYXRpb24=","RGVyaXZhdGl2ZQ==","SXZhbl9QYXZsb3Y=","UGVudGVjb3N0","TnVtZXJpY2FsX2RpZ2l0","VmlkZW9fY2FtZXJh","SW50ZXJuYXRpb25hbF9yZWxhdGlvbnM=","TG91aXNfUGhpbGlwcGVfSQ==","RGVyX1NwaWVnZWw=","V2F0Y2g=","RXRoaW9waWFuX0NpdmlsX1dhcg==","TW91bnRfTG9nYW4=","VmlraW5nX0FnZQ==","QnJvd25pYW5fbW90aW9u","TW9kZXJuX3BlbnRhdGhsb24=","RWlmZmVsX1Rvd2Vy","Um9tYW50aWNpc20=","UHRvbGVteQ==","RWFyd2ln","QXp0ZWNz","Q3J5c3RhbF9zdHJ1Y3R1cmU=","U3Jpbml2YXNhX1JhbWFudWphbg==","QnVz","U3VyYXQ=","RWxpemFiZXRoX0NhZHlfU3RhbnRvbg==","VHJhbnNpdGlvbl9tZXRhbA==","U3RyaW5nX2luc3RydW1lbnQ=","QmVuZWx1eA==","UHJpc20=","QW5reWxvc2F1cnVz","UG9wZQ==","Q2VjaWxfUmhvZGVz","UHN5Y2hvYW5hbHlzaXM=","U2FuZ3JpYQ==","Q29nbml0aXZlX3BzeWNob2xvZ3k=","VmlvbGE=","RnJlbmNoX0ZpcnN0X1JlcHVibGlj","VGlncmlz","T1BFQw==","RnJpZWRyaWNoX05pZXR6c2NoZQ==","SmV0X1Byb3B1bHNpb25fTGFib3JhdG9yeQ==","RG9waW5nX2luX3Nwb3J0","V2FsdF9XaGl0bWFu","UGhpbG9zb3BoaWNhbF9sb2dpYw==","SGlzdG9yeV9vZl90aGVfRWFydGg=","R2Fz","R2VuZXRpY2FsbHlfbW9kaWZpZWRfb3JnYW5pc20=","RnJ1Y3Rvc2U=","QXN0ZXJvaWRfYmVsdA==","R2VyaWF0cmljcw==","Tm9ydGhfUG9sZQ==","Uml2ZXJfZGVsdGE=","V2lsbGlhbV9TaGFrZXNwZWFyZQ==","VGhhaWxhbmQ=","Q29tbW9uX2NvbGQ=","VXJzYV9NYWpvcg==","Q2hyaXN0aWFuX0NodXJjaA==","QXJlYQ==","QW1hdGV1cl90aGVhdHJl","R2xlbm5fTWlsbGVy","QWxpX0toYW1lbmVp","Q2lubmFtb24=","VGhlX0JhaGFtYXM=","S2F6YWtoX2xhbmd1YWdl","VGFpZ2E=","TXVsdGlwbGljYXRpb24=","RnJlZV9Tb2Z0d2FyZV9Gb3VuZGF0aW9u","SGFtbWVy","RGlja19Gb3NidXJ5","QXV0aG9yaXR5","QXN0ZXJpeA==","V2F2ZWd1aWRl","QW5nbGU=","TnVjbGVhcl9jaGVtaXN0cnk=","UXVlZW4=","TWlsaXRhcnlfc2NpZW5jZQ==","RWxvbl9NdXNr","TW91bnRfT2x5bXB1cw==","UGF1bF9LbGVl","RWR3YXJkX1RlbGxlcg==","Q2xhbXBfKHRvb2wp","U2hhcms=","UGhpbGFkZWxwaGlh","VHJvcGljYWxfZm9yZXN0","U2VzYW1lX1N0cmVldA==","QWxiZXJ0X0VpbnN0ZWlu","UG9uY2VfZGVfTGVvbg==","VHJhaW4=","UGVkcm9fSUlfb2ZfQnJhemls","UG90YXNzaXVtX2h5ZHJveGlkZQ==","Q2hpY2tlbg==","TG93ZXJfUGFsZW9saXRoaWM=","QWNyb3BvbGlzX29mX0F0aGVucw==","SW9uX3RocnVzdGVy","TWFhc2FpX3Blb3BsZQ==","SV9Mb3ZlX0x1Y3k=","Q29sb25lbA==","Q2FyZWVy","V3Jlc3RsaW5n","R2VuZXJhbF9wcmFjdGl0aW9uZXI=","TW91bnRhaW4=","SHlkcm9nZW5fYm9uZA==","UEhQ","SVVQQUNfbm9tZW5jbGF0dXJlX29mX29yZ2FuaWNfY2hlbWlzdHJ5","TmV3X1plYWxhbmQ=","U2lraGlzbQ==","U2tp","U29waG9jbGVz","Q2FwYWNpdG9y","SGlzdG9yeV9vZl9tdXNpYw==","UGFybWVuaWRlcw==","Rm9yZWlnbl9wb2xpY3k=","UGVudGhvdXNlX2FwYXJ0bWVudA==","TGFicmFkb3JfU2Vh","V29yZF9wcm9jZXNzb3I=","SnVkaWNpYXJ5","TXVhbW1hcl9HYWRkYWZp","TWlzc2lzc2lwcGlfUml2ZXI=","TWFybG9uX0JyYW5kbw==","Q29tYmluZV9oYXJ2ZXN0ZXI=","Q2hhbWJlcl9tdXNpYw==","TGFrZV9CYWlrYWw=","Q29uc3RhbnRpbmVfdGhlX0dyZWF0","SGlzdG9yeV9vZl9JcmVsYW5k","RW1iZXp6bGVtZW50","Q2F1c2FsaXR5","UGVhY2g=","QmVlY2g=","SmFkZV9FbXBlcm9y","VHJhaW5fc3RhdGlvbg==","U3VsZWltYW5fdGhlX01hZ25pZmljZW50","S2FidWtp","Um9ja3lfTW91bnRhaW5z","TWFnbmV0aXNt","Rmxvb2Q=","S29uc3RhbnRpbl9TdGFuaXNsYXZza2k=","TWFydGluX0x1dGhlcg==","UmFpbmVyX1dlcm5lcl9GYXNzYmluZGVy","U2hpdGFv","RWRzZ2VyX1cuX0RpamtzdHJh","TnVjbGVhcl9wb3dlcg==","Q29uY2VwdHVhbF9hcnQ=","RW5naW5l","RXBpZ3JhcGh5","TWluaW1hbGlzbQ==","TGVucw==","Q2hhcmlvdA==","UnVt","U3BhbmlzaF9sYW5ndWFnZQ==","Rm9yd2FyZF9lcnJvcl9jb3JyZWN0aW9u","VGhlX0dvZGZhdGhlcg==","S2l3aWZydWl0","Q2VsbF93YWxs","SHlwZXJ0ZXh0X1RyYW5zZmVyX1Byb3RvY29s","QmhhZ2F2YWRfR2l0YQ==","U2Fsdmlh","Tm9ucHJvZml0X29yZ2FuaXphdGlvbg==","S2F6aW1pcl9NYWxldmljaA==","RHJhY29fKGNvbnN0ZWxsYXRpb24p","VmVkYW50YQ==","Q29yc2ljYQ==","QXJhbWFpY19sYW5ndWFnZQ==","RWFzeV9saXN0ZW5pbmc=","QW5hbHl0aWNfZ2VvbWV0cnk=","Q2FsaXBoYXRl","VGFpd2FuX1N0cmFpdA==","Q2xhc3NpZmljYXRpb25fb2ZfZmluaXRlX3NpbXBsZV9ncm91cHM=","Q2Vhc2VmaXJl","SHlkcm9lbGVjdHJpY2l0eQ==","TG9jaF9OZXNzX01vbnN0ZXI=","TW9iaWxlX3Bob25l","U29jaW9sb2d5","TnVtYmVy","UmVkb3g=","UGVhdA==","Q2FyZ28=","SGVybWFubl9NYWllcg==","VGVtcGVyYXRlX2NsaW1hdGU=","SGF1bWVh","TW9zcXVl","Q2l2aWxfZGlzb2JlZGllbmNl","UmVzcGlyYXRvcnlfc3lzdGVt","TWlkZGxlX0FnZXM=","RGVubmlzX1JpdGNoaWU=","SmF6eg==","TW9jaGVfY3VsdHVyZQ==","U3RpZmZuZXNz","QXJyb3c=","R2x1Y29zZQ==","TGlicmFyeV9vZl9BbGV4YW5kcmlh","U2FoYXJh","Q2V0YWNlYQ==","Q2hpbmE=","VG9ycXVl","U2tvcGpl","QmFtYm9v","U2lsa19Sb2Fk","RXhwb25lbnRpYWxfZnVuY3Rpb24=","U3RhY2tfKGdlb2xvZ3kp","U3RyYWl0X29mX0hvcm11eg==","QmlsbHlfV2lsZGVy","VGluYW1vdQ==","U2NyYW1ibGVfZm9yX0FmcmljYQ==","UGxheV8oYWN0aXZpdHkp","TWloYWlfRW1pbmVzY3U=","U3RldmVfV296bmlhaw==","SHlwb3hpYV8obWVkaWNhbCk=","QWZyaWNhbl9idWZmYWxv","T3Jl","RG9taW5vZXM=","VW5pdmVyc2l0eV9vZl9Db3BlbmhhZ2Vu","Q2VudGlwZWRl","Q2hhcm9u","TWVyeWxfU3RyZWVw","QnJh","U29tYWxpYQ==","U3Vic3RhbmNlX2RlcGVuZGVuY2U=","UHVyaXRhbg==","TWVjY2E=","SHVuZ2Vy","RWd5cHRpYW5faGllcm9nbHlwaHM=","U2tpbl9jYW5jZXI=","RXRobmljX2NvbmZsaWN0","UGVyaXNjb3Bl","WWFr","R3VpdGFy","QmFsa2FuX1dhcnM=","VmVsb2NpdHk=","T3BlcmF0aW9uYWxfYW1wbGlmaWVy","SmFjb2I=","SGFsb2dlbg==","RmF1c3Q=","TGludXNfVG9ydmFsZHM=","QW50b25fQnJ1Y2tuZXI=","VHJpYW5ndWx1bV9HYWxheHk=","WW91dGg=","RHV0eQ==","RmF0","Q29tcGFzcw==","U3VzdGFpbmFibGVfZGV2ZWxvcG1lbnQ=","QW5nbGVyZmlzaA==","Qm95","R3VucG93ZGVy","SW5mb3JtYXRpb24=","SmFwYW4=","UGVyaW9kXzJfZWxlbWVudA==","Q2FyYm9uX21vbm94aWRl","SW5kdXN0cmlhbF9hZ3JpY3VsdHVyZQ==","QmFuaw==","Tm9ydGhfWWVtZW5fQ2l2aWxfV2Fy","UGlnbWVudA==","WW9zZW1pdGVfTmF0aW9uYWxfUGFyaw==","S2FtY2hhdGthX1Blbmluc3VsYQ==","RmlkZWxfQ2FzdHJv","SXJpc2hfU2Vh","SHVtYW5fcmlnaHRz","QXRvbQ==","VG95","U3ByaW5nXyhzZWFzb24p","Uml2ZXI=","UGFzdGE=","U3BhbmlzaF9jb25xdWVzdF9vZl90aGVfSW5jYV9FbXBpcmU=","UGV0ZXJfR2FicmllbA==","QXJhbF9TZWE="]

	let titleTokens = []
	let contentTokens = []
	let sections = []
	let guess = ''
	let selectedWord = ''
	let selectedWordIndex = 0
	let wordCount = {}
	let loading = true

	function getArticle() {
		const titles = ['Hydrogen', 'Archery', 'Galaxy', 'Fern', 'Lion', 'Glacier', 'Watt']
		const rand = Math.floor(Math.random() * titles.length);
		let urlTitle = titles[rand]

		// Fetch from wikimedia rest api e.g. https://en.wikipedia.org/api/rest_v1/page/mobile-sections/Australia_%28continent%29
		fetch(`https://en.wikipedia.org/api/rest_v1/page/mobile-sections/${urlTitle}`)
			.then(response => response.json())
			.then(data => {
				title = data.lead.displaytitle
				let html = data.lead.sections[0].text
				let text = getText(html)
				wiki += getText(html)
				wikiSections.push({
					text: text,
					headline: data.lead.displaytitle
				})
				let i = 0;
				while(wiki.length < 15000 && i < data.remaining.sections.length) {
					html = data.remaining.sections[i].text
					text = getText(html)
					wiki += getText(html)
					wikiSections.push({
						text: text,
						headline: data.remaining.sections[i].line
					})
					i++
				}
				renderTokens()
			})
	}

	function getText(html) {
		let text = html.replace(/<style.*>.*<\/style>/ig, '')
		text = striptags(text);
		// &amp;, &lt;, &gt;, &quot;, and &#39;
		text = text
			.replace(/&nbsp;/g, ' ')
			.replace(/&(?:amp);/g, '&')
			.replace(/&(?:lt);/g, '<')
			.replace(/&(?:gt);/g, '>')
			.replace(/&(?:quot);/g, '"')
			.replace(/&(?:#39);/g, "'")
		// strip citations
		text = text.replace(/\[\d+\]/ig, '')
		return text
	}
	
	getArticle()

	function renderTokens() {
		console.log('rendering...')

		sections = []
		wordCount = {}
		for(const i in wikiSections) {
			addSection(wikiSections[i].headline, true)
			if(i == 0) {
				// check if the title (first headline of first section) has any redactions.
				solved = isSolved()
			}
			addSection(wikiSections[i].text, false)
		}

		loading=false
	}

	function isSolved(){ 		
		let isSolved = true
		for(const i in sections[0].tokens) {
			if(sections[0].tokens[i].redacted) {
				isSolved=false
			}
		}
		return isSolved
		console.log(`solved: ${solved}`)
	}

	function addSection(text, isHeadline) {
		let matches = [...text.matchAll(regex)]
		let tokens = getTokens(matches)
		sections.push({
			headline: isHeadline,
			tokens: tokens
		})
	}
	
	function getTokens(matches) {
		let tokens=[]
		for(const i in matches) {
			let word = matches[i][1]
			if (word) {
				let wordLower = word.toLowerCase();
				wordCount[wordLower] = wordLower in wordCount ? wordCount[wordLower] + 1 : 1
				let token = {
					value: word,
					wordLower: wordLower,
					id: getWordId(wordLower, wordCount[wordLower]),
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
	
	function selectWord(word) {
		selectedWordIndex = selectedWord == word ? selectedWordIndex+1 : 1
		selectedWord = word
		const wordId = getWordId(selectedWord, selectedWordIndex);
		let element = document.getElementById(wordId)
		console.log(`scroll to ${wordId}`)
		if(element) {
			element.scrollIntoView();
		}
		renderTokens()
	}
	
	function getWordId(word, wordIndex) {
		let id = `${base64encode(word).replaceAll('=','a')}${wordIndex}`
		return id
	}

	function handleSubmit() {
		const wordRegex = /(\W)+/i
		// TODO don't allow non-word or stopword guesses
		// if (!wordRegex.test(selectedWord)) {
		// 	guess = ''
		// 	console.log('invalid guess')
		// 	return
		// }
		selectedWord=guess.toLowerCase()
		selectedWordIndex=1
		selectWord(selectedWord)
		if(selectedWord == 'togglecheats') {
			solved = !solved
		}
		let regex = new RegExp(`\\b${selectedWord}\\b`,'gi')
		let count = (wiki.match(regex) || []).length
		guesses[selectedWord] = count
		guess = ''
		renderTokens()
	}
	function base64encode(str) {
		let encode = encodeURIComponent(str).replace(/%([a-f0-9]{2})/gi, (m, $1) => String.fromCharCode(parseInt($1, 16)))
		return btoa(encode)
	}
	function base64decode(str) {
		let decode = atob(str).replace(/[\x80-\uffff]/g, (m) => `%${m.charCodeAt(0).toString(16).padStart(2, '0')}`)
		return decodeURIComponent(decode)
	}
</script>
<div id="main">
	<nav>
		<h1>Redactle</h1>
		<p class="info">A puzzle game to guess the title of a random Wikipedia article by revealing the words from the article. 
			Similar to redactle.com but without the daily game limit.</p>
	</nav>
	<div id="article">
		{#if loading}
			<p>loading...</p>
		{/if}
		{#if solved}
			<p>Solved in {Object.keys(guesses).length} guesses!</p>
		{/if}
		{#each sections as section}
			{#if section.headline}
				<h2>
				{#each section.tokens as token}
					<Span id={token.id} value={token.value} redacted={token.redacted} highlight={token.highlight || false}></Span>
				{/each}
				</h2>
			{:else}
				<p>
				{#each section.tokens as token}
					<Span id={token.id} value={token.value} redacted={token.redacted} highlight={token.highlight || false}></Span>
				{/each}
				</p>
			{/if}
		{/each}
	</div>

	<div id="guesses">
		<h3>
			Guesses
		</h3>
		<div id="guess-form">
			<form on:submit|preventDefault={handleSubmit}>
				<input bind:value={guess} placeholder="guess a word...">
			</form>
		</div>
			<guess-list>
				{#each Object.keys(guesses).reverse() as word, i}
				<span on:click={selectWord(word)} class="{selectedWord==word ? 'highlight word' : 'word'}"><b>{word}</b> ({guesses[word]})</span> 
				{/each}
			</guess-list>
		</div>
	</div>
<style>
	body {
		margin:0;
		padding: 0;
		background: black;
		color: #b6b6b6;
	}

	#main {
		display: grid;
		grid-template-rows: 120px 1fr;
		grid-template-columns: 8fr 2fr;
		font-family:Arial, Helvetica, sans-serif;
		height: 100%;
		position: absolute;
		background: black;
		margin: 0;
		padding: 0;
		color: #b6b6b6;
	}

	@media (max-device-width: 960px) {
		#main {
			display: grid;
			grid-template-rows: 50px 1fr 10em;
			grid-template-columns: 1fr;
		}
		#main .info {
			display: none;
		}
	}

	nav {
		grid-column: 1/-1;
		background-color: black;
		border-bottom: 1px solid #6e6e0f;
		padding: .5em;
	}

	nav .info {
		font-size: small;
	}

	#article {
		padding:.5em;
		height:100%;
		overflow-y:scroll;
	}
	#guesses {
		padding:.5em;
		background: black;
		color: #b6b6b6;
	}

	nav h1 {
		margin:0;
	}
	#article h2, #article p, guess-list .word {
		font-family:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace
	}

	#guesses {
		overflow-y:scroll;
	}
	
	guess-list .word {
		margin:0 0 0 1em;
		display: block;
		float: left;
		
	}
	.highlight {
		background-color: #66eeff;
	}
</style>