<script>
import Span from './../components/Span.svelte'
import striptags from 'striptags'
import { element_is, get_all_dirty_from_scope, loop_guard } from 'svelte/internal'

let wikiSections = []
let guesses = {}
let solved = false
let regex = /([\u00BF-\u1FFF\u2C00-\uD7FF\w]+)([^\u00BF-\u1FFF\u2C00-\uD7FF\w]*)/ig
const commonWords = ["a","aboard","about","above","across","after","against","along","amid","among","an","and","around","as","at","because","before","behind","below","beneath","beside","between","beyond","but","by","concerning","considering","despite","down","during","except","following","for","from","if","in","inside","into","is","it","like","minus","near","next","of","off","on","onto","opposite","or","out","outside","over","past","per","plus","regarding","round","save","since","than","the","through","till","to","toward","under","underneath","unlike","until","up","upon","versus","via","was","with","within","without"]
let commonWordsDict ={}
commonWords.forEach(w => commonWordsDict[w]=1)
const titles = ["UmljaGFyZF9JX29mX0VuZ2xhbmQ=","RWFzdF9DaGluYV9TZWE=","UGl6emE=","UG9pc29u","UHVtcF9vcmdhbg==","QXByaWNvdA==","VGl0aGU=","VmlkZW9fYXJ0","U3VwZXJjb25kdWN0aXZpdHk=","WmlvbmlzbQ==","UGln","U3VsZnVyaWNfYWNpZA==","RGltZW5zaW9u","UHJvdG9u","Q291bmNpbF9vZl9FdXJvcGU=","Um9zZXR0YV9TdG9uZQ==","QXBvbGxvXzEx","R29kYXZhcmlfUml2ZXI=","R2VvcmdlX0MuX01hcnNoYWxs","Q29uZ3Jlc3Nfb2ZfQmVybGlu","V2FzaGluZ3Rvbl9JcnZpbmc=","TWV0YWxsdXJneQ==","VGhvbWFzX0hlbnJ5X0h1eGxleQ==","SG9yaXpvbg==","TWVsdGluZw==","SmVsbHlmaXNo","U2VhdHRsZQ==","Sm9obl90aGVfQmFwdGlzdA==","SG9ybW9uZQ==","RHJhZ29u","U2F3","SGFydWtpX011cmFrYW1p","QWJpb2dlbmVzaXM=","RXhwbG9yYXRpb24=","RGVyaXZhdGl2ZQ==","SXZhbl9QYXZsb3Y=","UGVudGVjb3N0","TnVtZXJpY2FsX2RpZ2l0","VmlkZW9fY2FtZXJh","SW50ZXJuYXRpb25hbF9yZWxhdGlvbnM=","TG91aXNfUGhpbGlwcGVfSQ==","RGVyX1NwaWVnZWw=","V2F0Y2g=","RXRoaW9waWFuX0NpdmlsX1dhcg==","TW91bnRfTG9nYW4=","VmlraW5nX0FnZQ==","QnJvd25pYW5fbW90aW9u","TW9kZXJuX3BlbnRhdGhsb24=","RWlmZmVsX1Rvd2Vy","Um9tYW50aWNpc20=","UHRvbGVteQ==","RWFyd2ln","QXp0ZWNz","Q3J5c3RhbF9zdHJ1Y3R1cmU=","U3Jpbml2YXNhX1JhbWFudWphbg==","QnVz","U3VyYXQ=","RWxpemFiZXRoX0NhZHlfU3RhbnRvbg==","VHJhbnNpdGlvbl9tZXRhbA==","U3RyaW5nX2luc3RydW1lbnQ=","QmVuZWx1eA==","UHJpc20=","QW5reWxvc2F1cnVz","UG9wZQ==","Q2VjaWxfUmhvZGVz","UHN5Y2hvYW5hbHlzaXM=","U2FuZ3JpYQ==","Q29nbml0aXZlX3BzeWNob2xvZ3k=","VmlvbGE=","RnJlbmNoX0ZpcnN0X1JlcHVibGlj","VGlncmlz","T1BFQw==","RnJpZWRyaWNoX05pZXR6c2NoZQ==","SmV0X1Byb3B1bHNpb25fTGFib3JhdG9yeQ==","RG9waW5nX2luX3Nwb3J0","V2FsdF9XaGl0bWFu","UGhpbG9zb3BoaWNhbF9sb2dpYw==","SGlzdG9yeV9vZl90aGVfRWFydGg=","R2Fz","R2VuZXRpY2FsbHlfbW9kaWZpZWRfb3JnYW5pc20=","RnJ1Y3Rvc2U=","QXN0ZXJvaWRfYmVsdA==","R2VyaWF0cmljcw==","Tm9ydGhfUG9sZQ==","Uml2ZXJfZGVsdGE=","V2lsbGlhbV9TaGFrZXNwZWFyZQ==","VGhhaWxhbmQ=","Q29tbW9uX2NvbGQ=","VXJzYV9NYWpvcg==","Q2hyaXN0aWFuX0NodXJjaA==","QXJlYQ==","QW1hdGV1cl90aGVhdHJl","R2xlbm5fTWlsbGVy","QWxpX0toYW1lbmVp","Q2lubmFtb24=","VGhlX0JhaGFtYXM=","S2F6YWtoX2xhbmd1YWdl","VGFpZ2E=","TXVsdGlwbGljYXRpb24=","RnJlZV9Tb2Z0d2FyZV9Gb3VuZGF0aW9u","SGFtbWVy","RGlja19Gb3NidXJ5","QXV0aG9yaXR5","QXN0ZXJpeA==","V2F2ZWd1aWRl","QW5nbGU=","TnVjbGVhcl9jaGVtaXN0cnk=","UXVlZW4=","TWlsaXRhcnlfc2NpZW5jZQ==","RWxvbl9NdXNr","TW91bnRfT2x5bXB1cw==","UGF1bF9LbGVl","RWR3YXJkX1RlbGxlcg==","Q2xhbXBfKHRvb2wp","U2hhcms=","UGhpbGFkZWxwaGlh","VHJvcGljYWxfZm9yZXN0","U2VzYW1lX1N0cmVldA==","QWxiZXJ0X0VpbnN0ZWlu","UG9uY2VfZGVfTGVvbg==","VHJhaW4=","UGVkcm9fSUlfb2ZfQnJhemls","UG90YXNzaXVtX2h5ZHJveGlkZQ==","Q2hpY2tlbg==","TG93ZXJfUGFsZW9saXRoaWM=","QWNyb3BvbGlzX29mX0F0aGVucw==","SW9uX3RocnVzdGVy","TWFhc2FpX3Blb3BsZQ==","SV9Mb3ZlX0x1Y3k=","Q29sb25lbA==","Q2FyZWVy","V3Jlc3RsaW5n","R2VuZXJhbF9wcmFjdGl0aW9uZXI=","TW91bnRhaW4=","SHlkcm9nZW5fYm9uZA==","UEhQ","SVVQQUNfbm9tZW5jbGF0dXJlX29mX29yZ2FuaWNfY2hlbWlzdHJ5","TmV3X1plYWxhbmQ=","U2lraGlzbQ==","U2tp","U29waG9jbGVz","Q2FwYWNpdG9y","SGlzdG9yeV9vZl9tdXNpYw==","UGFybWVuaWRlcw==","Rm9yZWlnbl9wb2xpY3k=","UGVudGhvdXNlX2FwYXJ0bWVudA==","TGFicmFkb3JfU2Vh","V29yZF9wcm9jZXNzb3I=","SnVkaWNpYXJ5","TXVhbW1hcl9HYWRkYWZp","TWlzc2lzc2lwcGlfUml2ZXI=","TWFybG9uX0JyYW5kbw==","Q29tYmluZV9oYXJ2ZXN0ZXI=","Q2hhbWJlcl9tdXNpYw==","TGFrZV9CYWlrYWw=","Q29uc3RhbnRpbmVfdGhlX0dyZWF0","SGlzdG9yeV9vZl9JcmVsYW5k","RW1iZXp6bGVtZW50","Q2F1c2FsaXR5","UGVhY2g=","QmVlY2g=","SmFkZV9FbXBlcm9y","VHJhaW5fc3RhdGlvbg==","U3VsZWltYW5fdGhlX01hZ25pZmljZW50","S2FidWtp","Um9ja3lfTW91bnRhaW5z","TWFnbmV0aXNt","Rmxvb2Q=","S29uc3RhbnRpbl9TdGFuaXNsYXZza2k=","TWFydGluX0x1dGhlcg==","UmFpbmVyX1dlcm5lcl9GYXNzYmluZGVy","U2hpdGFv","RWRzZ2VyX1cuX0RpamtzdHJh","TnVjbGVhcl9wb3dlcg==","Q29uY2VwdHVhbF9hcnQ=","RW5naW5l","RXBpZ3JhcGh5","TWluaW1hbGlzbQ==","TGVucw==","Q2hhcmlvdA==","UnVt","U3BhbmlzaF9sYW5ndWFnZQ==","Rm9yd2FyZF9lcnJvcl9jb3JyZWN0aW9u","VGhlX0dvZGZhdGhlcg==","S2l3aWZydWl0","Q2VsbF93YWxs","SHlwZXJ0ZXh0X1RyYW5zZmVyX1Byb3RvY29s","QmhhZ2F2YWRfR2l0YQ==","U2Fsdmlh","Tm9ucHJvZml0X29yZ2FuaXphdGlvbg==","S2F6aW1pcl9NYWxldmljaA==","RHJhY29fKGNvbnN0ZWxsYXRpb24p","VmVkYW50YQ==","Q29yc2ljYQ==","QXJhbWFpY19sYW5ndWFnZQ==","RWFzeV9saXN0ZW5pbmc=","QW5hbHl0aWNfZ2VvbWV0cnk=","Q2FsaXBoYXRl","VGFpd2FuX1N0cmFpdA==","Q2xhc3NpZmljYXRpb25fb2ZfZmluaXRlX3NpbXBsZV9ncm91cHM=","Q2Vhc2VmaXJl","SHlkcm9lbGVjdHJpY2l0eQ==","TG9jaF9OZXNzX01vbnN0ZXI=","TW9iaWxlX3Bob25l","U29jaW9sb2d5","TnVtYmVy","UmVkb3g=","UGVhdA==","Q2FyZ28=","SGVybWFubl9NYWllcg==","VGVtcGVyYXRlX2NsaW1hdGU=","SGF1bWVh","TW9zcXVl","Q2l2aWxfZGlzb2JlZGllbmNl","UmVzcGlyYXRvcnlfc3lzdGVt","TWlkZGxlX0FnZXM=","RGVubmlzX1JpdGNoaWU=","SmF6eg==","TW9jaGVfY3VsdHVyZQ==","U3RpZmZuZXNz","QXJyb3c=","R2x1Y29zZQ==","TGlicmFyeV9vZl9BbGV4YW5kcmlh","U2FoYXJh","Q2V0YWNlYQ==","Q2hpbmE=","VG9ycXVl","U2tvcGpl","QmFtYm9v","U2lsa19Sb2Fk","RXhwb25lbnRpYWxfZnVuY3Rpb24=","U3RhY2tfKGdlb2xvZ3kp","U3RyYWl0X29mX0hvcm11eg==","QmlsbHlfV2lsZGVy","VGluYW1vdQ==","U2NyYW1ibGVfZm9yX0FmcmljYQ==","UGxheV8oYWN0aXZpdHkp","TWloYWlfRW1pbmVzY3U=","U3RldmVfV296bmlhaw==","SHlwb3hpYV8obWVkaWNhbCk=","QWZyaWNhbl9idWZmYWxv","T3Jl","RG9taW5vZXM=","VW5pdmVyc2l0eV9vZl9Db3BlbmhhZ2Vu","Q2VudGlwZWRl","Q2hhcm9u","TWVyeWxfU3RyZWVw","QnJh","U29tYWxpYQ==","U3Vic3RhbmNlX2RlcGVuZGVuY2U=","UHVyaXRhbg==","TWVjY2E=","SHVuZ2Vy","RWd5cHRpYW5faGllcm9nbHlwaHM=","U2tpbl9jYW5jZXI=","RXRobmljX2NvbmZsaWN0","UGVyaXNjb3Bl","WWFr","R3VpdGFy","QmFsa2FuX1dhcnM=","VmVsb2NpdHk=","T3BlcmF0aW9uYWxfYW1wbGlmaWVy","SmFjb2I=","SGFsb2dlbg==","RmF1c3Q=","TGludXNfVG9ydmFsZHM=","QW50b25fQnJ1Y2tuZXI=","VHJpYW5ndWx1bV9HYWxheHk=","WW91dGg=","RHV0eQ==","RmF0","Q29tcGFzcw==","U3VzdGFpbmFibGVfZGV2ZWxvcG1lbnQ=","QW5nbGVyZmlzaA==","Qm95","R3VucG93ZGVy","SW5mb3JtYXRpb24=","SmFwYW4=","UGVyaW9kXzJfZWxlbWVudA==","Q2FyYm9uX21vbm94aWRl","SW5kdXN0cmlhbF9hZ3JpY3VsdHVyZQ==","QmFuaw==","Tm9ydGhfWWVtZW5fQ2l2aWxfV2Fy","UGlnbWVudA==","WW9zZW1pdGVfTmF0aW9uYWxfUGFyaw==","S2FtY2hhdGthX1Blbmluc3VsYQ==","RmlkZWxfQ2FzdHJv","SXJpc2hfU2Vh","SHVtYW5fcmlnaHRz","QXRvbQ==","VG95","U3ByaW5nXyhzZWFzb24p","Uml2ZXI=","UGFzdGE=","U3BhbmlzaF9jb25xdWVzdF9vZl90aGVfSW5jYV9FbXBpcmU=","UGV0ZXJfR2FicmllbA==","QXJhbF9TZWE="]

let showMisses = true
let sections = []
let tokenLookup={}
let guess = ''
let selectedWord = ''
let selectedWordIndex = 0
let wordCount = {}
let loading = true
let urlTitle = ''

getArticle()

function getArticle() {
	const rand = Math.floor(Math.random() * titles.length);
	urlTitle = base64decode(titles[rand])
	// Fetch from wikimedia rest api e.g. https://en.wikipedia.org/api/rest_v1/page/mobile-sections/Australia_%28continent%29
	fetch(`https://en.wikipedia.org/api/rest_v1/page/mobile-sections/${urlTitle}`)
		.then(response => response.json())
		.then(data => {
			let count = 0
			let title = data.lead.displaytitle
			let html = data.lead.sections[0].text
			let text = getText(html)
			count += text.length
			wikiSections.push({
				text: text,
				headline: data.lead.displaytitle
			})
			let i = 0;
			while(count < 100000 && i < data.remaining.sections.length) {
				html = data.remaining.sections[i].text
				text = getText(html)
				count += text.length
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
	 if (typeof window !== "undefined") {
	 	console.log('removing tags')
	 	var parser = new window.DOMParser();
	 	var htmlDoc = parser.parseFromString(html, 'text/html');
	 	const removeTags = ['style', 'table']
	 	removeTags.forEach(tag => {
			let nodeList = htmlDoc.getElementsByTagName(tag)
			let nodes = Array.prototype.slice.call(nodeList,0); 
			nodes.forEach(node => node.remove())
		})
		html = htmlDoc.body.innerHTML
	 }
	let text = striptags(html);
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
function renderTokens() {
	console.log('rendering...')

	sections = []
	wordCount = {}
	for(const i in wikiSections) {
		addSection(wikiSections[i].headline, true)
		addSection(wikiSections[i].text, false)
	}
	loading=false
}
function checkSolved(){ 		
	let checkSolved = true
	// if no redactions exist in the title the puzzle has been solved
	let titleRedaction = sections[0].tokens.find(x => x.redacted)
	solved = titleRedaction === undefined
	if(solved) {
		updateLocalstorage()
		renderTokens()
	}
}
const storageKey = 'solved_game_history'
function updateLocalstorage() {
	let history = getHistory()
	let date = new Date()
	let item = {
		title: urlTitle,
		guesses: Object.keys(guesses).length,
		time: date.getTime()
	}
	history[urlTitle] = item
	window.localStorage.setItem(storageKey, JSON.stringify(history))
	console.log(`solved: ${solved}`)
}
function getHistory() {
	return JSON.parse(window.localStorage.getItem(storageKey) || '{}')
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
			let wordNormal = normalize(word);
			wordCount[wordNormal] = wordNormal in wordCount ? wordCount[wordNormal] + 1 : 1
			let token = {
				value: word,
				wordNormal: wordNormal,
				id: getWordId(wordNormal, wordCount[wordNormal]-1),
				redacted:shouldRedact(wordNormal),
				highlight: wordNormal == selectedWord,
			}
			if(!(wordNormal in tokenLookup)) {
				tokenLookup[wordNormal]=[]
			}
			tokenLookup[wordNormal].push(token)
			tokens.push(token)
		}
		if(matches[i][2]) {
			tokens.push({value:matches[i][2]})
		}
	}
	return tokens
}
function reRenderWord(wordNormal) {
	if(!tokenLookup.hasOwnProperty(wordNormal)) return
	tokenLookup[wordNormal].forEach(token => {
		token.redacted = shouldRedact(wordNormal)
		token.highlight = wordNormal == selectedWord
	});
	// trigger svelte update
	sections = [...sections]
}
function shouldRedact(wordNormal) {
	return !solved
			&& !commonWordsDict.hasOwnProperty(wordNormal) 
			&& !guesses.hasOwnProperty(wordNormal);
}
function selectWord(word, scrollTo) {
	selectedWordIndex = selectedWord == word ? selectedWordIndex+1 : 0
	// loop back to top once all words have been selected
	if(word in wordCount && wordCount[word] > 0) {
		selectedWordIndex = selectedWordIndex % wordCount[word]
	}

	selectedWord = word

	sections.forEach(section => {
		section.tokens
		.filter(t => t.highlight == true)
		.forEach(token => {
			token.highlight = false
		})
	})

	// select new word
	const wordId = getWordId(selectedWord, selectedWordIndex)
	let element = document.getElementById(wordId)
	if(element && scrollTo) {
		element.scrollIntoView();
	}
	reRenderWord(word)
}
function backToTop() {
	let element = document.getElementById('headline-section-0')
	if(element) {
		element.scrollIntoView()
	}
}
function getWordId(word, wordIndex) {
	let id = `${base64encode(word).replaceAll('=','a')}${wordIndex}`
	return id
}
function handleSubmit() {
	let word=normalize(guess)
	if (!validateGuess(word)) {
		console.log('invalid guess')
		guess = ''
		return
	}
	guesses[word] = wordCount[word] || 0

	selectWord(word, false)
	guess = ''
	checkSolved()
	if(word == 'togglecheats') {
		solved = !solved
		renderTokens()
	}
}
function validateGuess(str) {
	if(str in commonWordsDict) return false
	if(/^\w+$/.test(str) == false) return false
	return true
}
function base64encode(str) {
	let encode = encodeURIComponent(str).replace(/%([a-f0-9]{2})/gi, (m, $1) => String.fromCharCode(parseInt($1, 16)))
	return btoa(encode)
}
function base64decode(str) {
	let decode = atob(str).replace(/[\x80-\uffff]/g, (m) => `%${m.charCodeAt(0).toString(16).padStart(2, '0')}`)
	return decodeURIComponent(decode)
}
function normalize(str) {
	// removes accents from string
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}
</script>



<div id="main">
<nav>
	<h1>Redactle Unlimited</h1>
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
	{#each sections as section, i}
		{#if section.headline}
			<h2 id="headline-section-{i}">
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
		Guesses ({Object.keys(guesses).length})
	</h3>
	<form id="guess-form" on:submit|preventDefault={handleSubmit}>
		<button id="btn-top" type="button" on:click={() => backToTop()}>▲ Top</button>
		<input id="input-guess" bind:value={guess} placeholder="guess a word..." autocomplete="off"/>
		<input id="submit" type="submit" value="Guess" />
	</form>
	<guess-list>
		{#each Object.keys(guesses).reverse() as word, i}
		{#if showMisses || guesses[word] > 0 || i == 0}
		<span on:click={selectWord(word, true)} class="{(selectedWord==word ? 'highlight' : '') + (guesses[word] > 0 ? ' hit' : ' miss') + ' word'}"><b>{word}</b>({guesses[word]})</span> 
		{/if}
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
		grid-template-rows: 90px 1fr;
		grid-template-columns: 8fr 3fr;
		font-family:Arial, Helvetica, sans-serif;
		height: 100%;
		position: absolute;
		background: black;
		margin: 0;
		padding: 0;
		color: #989898;
		font-size:18px;
		width: 100%;

	}

	#article {
		padding: 0 1em 0 5%;
		height:100%;
		overflow-y:scroll;
		overflow-x:hidden;
	}

	#article p, #article h2 {
		 max-width: 100em;
	}

	#guesses {
		padding:.5em;
		background: black;
		color: #b6b6b6;
		display: flex;
		flex-direction: column;
		border-top: 1px solid #686868;
	}

	@media (max-device-width: 960px) {
		#main {
			display: grid;
			grid-template-rows: 40px 1fr 10em;
			grid-template-columns: 1fr;
			font-size: 0.9em;
		}
		#main .info {
			display: none;
		}

		#guesses {
			flex-direction: column-reverse;
			justify-content: space-between;
		}

		#guesses h3 {
			display: none;
		}

		#article {
			padding:.5em;
		}
	}

	nav {
		grid-column: 1/-1;
		background-color: rgb(38, 38, 38);
		border-bottom: 1px solid #6e6e0f;
		padding: .5em;
	}

	nav .info {
		font-size: small;
	}

	nav h1 {
		margin:0;
		color:black;
        background-color: #c7a002;
		display: inline;
	}
	#article h2, #article p, guess-list .word {
		font-family:Consolas,monospace;
		line-height: 1.5;
	}
	
	#guesses h3 {
		margin:.3em 0;
	}
	#guess-form input, #guess-form button {
		background: rgb(133, 133, 133);
		margin:0;
		padding:.3em;
	}

	#guess-form input:first-child, #guess-form button:first-child {
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}

	#guess-form input:last-child, #guess-form button:last-child {
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}


	input, button, submit { border:none; }
	#guess-form {
		display: flex;
		justify-content: center;
		width: 100%;
		font-size:1.1em;
	}
	#guess-form button:hover, #guess-form input[type=submit]:hover {
		cursor: pointer;
		background: #c1c1c1;
	}
	#guesses #input-guess {
		background-color: #333;
		color:white;
		width: 80%;
		padding:.3em;
		border-radius: 0px;
	}

	guess-list {
		overflow-y: scroll;
	}

	guess-list .word {
		margin:0 0 0 1em;
		display: block;
		float: left;
		cursor: pointer;
		
	}
	guess-list .word.miss {
		color:#555;
	}	
	.highlight{
        background-color: #c1c1c1;
        color: #333;
    }
</style>