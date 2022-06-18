<script>
import Span from './../components/Span.svelte'
import striptags from 'striptags'
import { add_classes, element_is, get_all_dirty_from_scope, loop_guard } from 'svelte/internal'
import * as animateScroll from "svelte-scrollto";
import { onMount } from 'svelte';
import * as pluralize from 'pluralize';

let wikiSections = []
let regex = /([\u00BF-\u1FFF\u2C00-\uD7FF\w]+)([^\u00BF-\u1FFF\u2C00-\uD7FF\w]*)/ig
const commonWords = ["a","aboard","about","above","across","after","against","along","amid","among","an","and","around","as","at","because","before","behind","below","beneath","beside","between","beyond","but","by","concerning","considering","despite","down","during","except","following","for","from","if","in","inside","into","is","it","like","minus","near","next","of","off","on","onto","opposite","or","out","outside","over","past","per","plus","regarding","round","save","since","than","the","through","till","to","toward","under","underneath","unlike","until","up","upon","versus","via","was","with","within","without"]
let commonWordsDict ={}
commonWords.forEach(w => commonWordsDict[w]=1)
const titles = ["UmljaGFyZF9JX29mX0VuZ2xhbmQ=","RWFzdF9DaGluYV9TZWE=","UGl6emE=","UG9pc29u","UHVtcF9vcmdhbg==","QXByaWNvdA==","VGl0aGU=","VmlkZW9fYXJ0","U3VwZXJjb25kdWN0aXZpdHk=","WmlvbmlzbQ==","UGln","U3VsZnVyaWNfYWNpZA==","RGltZW5zaW9u","UHJvdG9u","Q291bmNpbF9vZl9FdXJvcGU=","Um9zZXR0YV9TdG9uZQ==","QXBvbGxvXzEx","R29kYXZhcmlfUml2ZXI=","R2VvcmdlX0MuX01hcnNoYWxs","Q29uZ3Jlc3Nfb2ZfQmVybGlu","V2FzaGluZ3Rvbl9JcnZpbmc=","TWV0YWxsdXJneQ==","VGhvbWFzX0hlbnJ5X0h1eGxleQ==","SG9yaXpvbg==","TWVsdGluZw==","SmVsbHlmaXNo","U2VhdHRsZQ==","Sm9obl90aGVfQmFwdGlzdA==","SG9ybW9uZQ==","RHJhZ29u","U2F3","SGFydWtpX011cmFrYW1p","QWJpb2dlbmVzaXM=","RXhwbG9yYXRpb24=","RGVyaXZhdGl2ZQ==","SXZhbl9QYXZsb3Y=","UGVudGVjb3N0","TnVtZXJpY2FsX2RpZ2l0","VmlkZW9fY2FtZXJh","SW50ZXJuYXRpb25hbF9yZWxhdGlvbnM=","TG91aXNfUGhpbGlwcGVfSQ==","RGVyX1NwaWVnZWw=","V2F0Y2g=","RXRoaW9waWFuX0NpdmlsX1dhcg==","TW91bnRfTG9nYW4=","VmlraW5nX0FnZQ==","QnJvd25pYW5fbW90aW9u","TW9kZXJuX3BlbnRhdGhsb24=","RWlmZmVsX1Rvd2Vy","Um9tYW50aWNpc20=","UHRvbGVteQ==","RWFyd2ln","QXp0ZWNz","Q3J5c3RhbF9zdHJ1Y3R1cmU=","U3Jpbml2YXNhX1JhbWFudWphbg==","QnVz","U3VyYXQ=","RWxpemFiZXRoX0NhZHlfU3RhbnRvbg==","VHJhbnNpdGlvbl9tZXRhbA==","U3RyaW5nX2luc3RydW1lbnQ=","QmVuZWx1eA==","UHJpc20=","QW5reWxvc2F1cnVz","UG9wZQ==","Q2VjaWxfUmhvZGVz","UHN5Y2hvYW5hbHlzaXM=","U2FuZ3JpYQ==","Q29nbml0aXZlX3BzeWNob2xvZ3k=","VmlvbGE=","RnJlbmNoX0ZpcnN0X1JlcHVibGlj","VGlncmlz","T1BFQw==","RnJpZWRyaWNoX05pZXR6c2NoZQ==","SmV0X1Byb3B1bHNpb25fTGFib3JhdG9yeQ==","RG9waW5nX2luX3Nwb3J0","V2FsdF9XaGl0bWFu","UGhpbG9zb3BoaWNhbF9sb2dpYw==","SGlzdG9yeV9vZl90aGVfRWFydGg=","R2Fz","R2VuZXRpY2FsbHlfbW9kaWZpZWRfb3JnYW5pc20=","RnJ1Y3Rvc2U=","QXN0ZXJvaWRfYmVsdA==","R2VyaWF0cmljcw==","Tm9ydGhfUG9sZQ==","Uml2ZXJfZGVsdGE=","V2lsbGlhbV9TaGFrZXNwZWFyZQ==","VGhhaWxhbmQ=","Q29tbW9uX2NvbGQ=","VXJzYV9NYWpvcg==","Q2hyaXN0aWFuX0NodXJjaA==","QXJlYQ==","QW1hdGV1cl90aGVhdHJl","R2xlbm5fTWlsbGVy","QWxpX0toYW1lbmVp","Q2lubmFtb24=","VGhlX0JhaGFtYXM=","S2F6YWtoX2xhbmd1YWdl","VGFpZ2E=","TXVsdGlwbGljYXRpb24=","RnJlZV9Tb2Z0d2FyZV9Gb3VuZGF0aW9u","SGFtbWVy","RGlja19Gb3NidXJ5","QXV0aG9yaXR5","QXN0ZXJpeA==","V2F2ZWd1aWRl","QW5nbGU=","TnVjbGVhcl9jaGVtaXN0cnk=","UXVlZW4=","TWlsaXRhcnlfc2NpZW5jZQ==","RWxvbl9NdXNr","TW91bnRfT2x5bXB1cw==","UGF1bF9LbGVl","RWR3YXJkX1RlbGxlcg==","Q2xhbXBfKHRvb2wp","U2hhcms=","UGhpbGFkZWxwaGlh","VHJvcGljYWxfZm9yZXN0","U2VzYW1lX1N0cmVldA==","QWxiZXJ0X0VpbnN0ZWlu","UG9uY2VfZGVfTGVvbg==","VHJhaW4=","UGVkcm9fSUlfb2ZfQnJhemls","UG90YXNzaXVtX2h5ZHJveGlkZQ==","Q2hpY2tlbg==","TG93ZXJfUGFsZW9saXRoaWM=","QWNyb3BvbGlzX29mX0F0aGVucw==","SW9uX3RocnVzdGVy","TWFhc2FpX3Blb3BsZQ==","SV9Mb3ZlX0x1Y3k=","Q29sb25lbA==","Q2FyZWVy","V3Jlc3RsaW5n","R2VuZXJhbF9wcmFjdGl0aW9uZXI=","TW91bnRhaW4=","SHlkcm9nZW5fYm9uZA==","UEhQ","SVVQQUNfbm9tZW5jbGF0dXJlX29mX29yZ2FuaWNfY2hlbWlzdHJ5","TmV3X1plYWxhbmQ=","U2lraGlzbQ==","U2tp","U29waG9jbGVz","Q2FwYWNpdG9y","SGlzdG9yeV9vZl9tdXNpYw==","UGFybWVuaWRlcw==","Rm9yZWlnbl9wb2xpY3k=","UGVudGhvdXNlX2FwYXJ0bWVudA==","TGFicmFkb3JfU2Vh","V29yZF9wcm9jZXNzb3I=","SnVkaWNpYXJ5","TXVhbW1hcl9HYWRkYWZp","TWlzc2lzc2lwcGlfUml2ZXI=","TWFybG9uX0JyYW5kbw==","Q29tYmluZV9oYXJ2ZXN0ZXI=","Q2hhbWJlcl9tdXNpYw==","TGFrZV9CYWlrYWw=","Q29uc3RhbnRpbmVfdGhlX0dyZWF0","SGlzdG9yeV9vZl9JcmVsYW5k","RW1iZXp6bGVtZW50","Q2F1c2FsaXR5","UGVhY2g=","QmVlY2g=","SmFkZV9FbXBlcm9y","VHJhaW5fc3RhdGlvbg==","U3VsZWltYW5fdGhlX01hZ25pZmljZW50","S2FidWtp","Um9ja3lfTW91bnRhaW5z","TWFnbmV0aXNt","Rmxvb2Q=","S29uc3RhbnRpbl9TdGFuaXNsYXZza2k=","TWFydGluX0x1dGhlcg==","UmFpbmVyX1dlcm5lcl9GYXNzYmluZGVy","U2hpdGFv","RWRzZ2VyX1cuX0RpamtzdHJh","TnVjbGVhcl9wb3dlcg==","Q29uY2VwdHVhbF9hcnQ=","RW5naW5l","RXBpZ3JhcGh5","TWluaW1hbGlzbQ==","TGVucw==","Q2hhcmlvdA==","UnVt","U3BhbmlzaF9sYW5ndWFnZQ==","Rm9yd2FyZF9lcnJvcl9jb3JyZWN0aW9u","VGhlX0dvZGZhdGhlcg==","S2l3aWZydWl0","Q2VsbF93YWxs","SHlwZXJ0ZXh0X1RyYW5zZmVyX1Byb3RvY29s","QmhhZ2F2YWRfR2l0YQ==","U2Fsdmlh","Tm9ucHJvZml0X29yZ2FuaXphdGlvbg==","S2F6aW1pcl9NYWxldmljaA==","RHJhY29fKGNvbnN0ZWxsYXRpb24p","VmVkYW50YQ==","Q29yc2ljYQ==","QXJhbWFpY19sYW5ndWFnZQ==","RWFzeV9saXN0ZW5pbmc=","QW5hbHl0aWNfZ2VvbWV0cnk=","Q2FsaXBoYXRl","VGFpd2FuX1N0cmFpdA==","Q2xhc3NpZmljYXRpb25fb2ZfZmluaXRlX3NpbXBsZV9ncm91cHM=","Q2Vhc2VmaXJl","SHlkcm9lbGVjdHJpY2l0eQ==","TG9jaF9OZXNzX01vbnN0ZXI=","TW9iaWxlX3Bob25l","U29jaW9sb2d5","TnVtYmVy","UmVkb3g=","UGVhdA==","Q2FyZ28=","SGVybWFubl9NYWllcg==","VGVtcGVyYXRlX2NsaW1hdGU=","SGF1bWVh","TW9zcXVl","Q2l2aWxfZGlzb2JlZGllbmNl","UmVzcGlyYXRvcnlfc3lzdGVt","TWlkZGxlX0FnZXM=","RGVubmlzX1JpdGNoaWU=","SmF6eg==","TW9jaGVfY3VsdHVyZQ==","U3RpZmZuZXNz","QXJyb3c=","R2x1Y29zZQ==","TGlicmFyeV9vZl9BbGV4YW5kcmlh","U2FoYXJh","Q2V0YWNlYQ==","Q2hpbmE=","VG9ycXVl","U2tvcGpl","QmFtYm9v","U2lsa19Sb2Fk","RXhwb25lbnRpYWxfZnVuY3Rpb24=","U3RhY2tfKGdlb2xvZ3kp","U3RyYWl0X29mX0hvcm11eg==","QmlsbHlfV2lsZGVy","VGluYW1vdQ==","U2NyYW1ibGVfZm9yX0FmcmljYQ==","UGxheV8oYWN0aXZpdHkp","TWloYWlfRW1pbmVzY3U=","U3RldmVfV296bmlhaw==","SHlwb3hpYV8obWVkaWNhbCk=","QWZyaWNhbl9idWZmYWxv","T3Jl","RG9taW5vZXM=","VW5pdmVyc2l0eV9vZl9Db3BlbmhhZ2Vu","Q2VudGlwZWRl","Q2hhcm9u","TWVyeWxfU3RyZWVw","QnJh","U29tYWxpYQ==","U3Vic3RhbmNlX2RlcGVuZGVuY2U=","UHVyaXRhbg==","TWVjY2E=","SHVuZ2Vy","RWd5cHRpYW5faGllcm9nbHlwaHM=","U2tpbl9jYW5jZXI=","RXRobmljX2NvbmZsaWN0","UGVyaXNjb3Bl","WWFr","R3VpdGFy","QmFsa2FuX1dhcnM=","VmVsb2NpdHk=","T3BlcmF0aW9uYWxfYW1wbGlmaWVy","SmFjb2I=","SGFsb2dlbg==","RmF1c3Q=","TGludXNfVG9ydmFsZHM=","QW50b25fQnJ1Y2tuZXI=","VHJpYW5ndWx1bV9HYWxheHk=","WW91dGg=","RHV0eQ==","RmF0","Q29tcGFzcw==","U3VzdGFpbmFibGVfZGV2ZWxvcG1lbnQ=","QW5nbGVyZmlzaA==","Qm95","R3VucG93ZGVy","SW5mb3JtYXRpb24=","SmFwYW4=","UGVyaW9kXzJfZWxlbWVudA==","Q2FyYm9uX21vbm94aWRl","SW5kdXN0cmlhbF9hZ3JpY3VsdHVyZQ==","QmFuaw==","Tm9ydGhfWWVtZW5fQ2l2aWxfV2Fy","UGlnbWVudA==","WW9zZW1pdGVfTmF0aW9uYWxfUGFyaw==","S2FtY2hhdGthX1Blbmluc3VsYQ==","RmlkZWxfQ2FzdHJv","SXJpc2hfU2Vh","SHVtYW5fcmlnaHRz","QXRvbQ==","VG95","U3ByaW5nXyhzZWFzb24p","Uml2ZXI=","UGFzdGE=","U3BhbmlzaF9jb25xdWVzdF9vZl90aGVfSW5jYV9FbXBpcmU=","UGV0ZXJfR2FicmllbA==","QXJhbF9TZWE="]

let sections = []
let tokenLookup={}
let guess = ''
let selectedWord = ''
let selectedWordIndex = 0
let wordCount = {}
let loading = true

let showSettings = false
let settings = {}
let showWon = false
$: showModal = showSettings || showWon

let gameState
onMount(async () => {
	loadSettings()
	loadGameState()
	loadArticle()
})
function loadSettings() {
	settings = JSON.parse(localStorage.getItem('settings'))
	if (settings == null) {
		settings = getDefaultSettings()
	}
}
function saveSettings() {
	localStorage.setItem('settings', JSON.stringify(settings))
}
function getDefaultSettings() {
	return {
		showMisses: true,
		pluralizeGuesses: false
	}
}

function loadGameState() {
	// The game article should be driven by the URL as the source of truth
	const params = getLocationHashParameters()
	const encodedTitle = params.get('article')

	if(encodedTitle) {
		// Try to get state for the article
		let json = localStorage.getItem('gameStates')
		if (json != null) {
			const savedGames = JSON.parse(json)
			// if savedGames has key encodedTitle
			if (savedGames[encodedTitle] !== undefined) {
				gameState = savedGames[encodedTitle];
				return
			}
		}

		// Otherwise, new game 
		gameState = getDefaultGameState()
		if(encodedTitle) {
			gameState.encodedTitle = encodedTitle
			gameState.urlTitle = base64decode(encodedTitle)
			return
		}
	}

	// TODO - remove - Legacy global gameState
	const json = localStorage.getItem('gameState')
	if(json !== null) {
		gameState = JSON.parse(json)
		gameState.encodedTitle = base64encode(gameState.urlTitle)
		gameState.created = gameState.updated
		console.log(`load state from global gamestate ${encodedTitle}`)
		return
	}

	// New game with random article
	gameState = getDefaultGameState()
	saveGameState()
}
function saveGameState() {
	gameState.updated = (new Date()).getTime()
	try {
		const json = localStorage.getItem('gameStates') || '{}'
		const savedGames = JSON.parse(json)
		savedGames[gameState.encodedTitle] = gameState;
		localStorage.setItem('gameStates', JSON.stringify(savedGames))

		// TODO - remove - Legacy global gameState
		localStorage.setItem('gameState', JSON.stringify(gameState))
	} catch(e) {
		console.log(e)
	}
}
function getDefaultGameState() {
	const json = localStorage.getItem('gameStates') || '{}'
	const savedGames = JSON.parse(json)
	const filteredTitles = titles.filter(x => savedGames[x] === undefined)
	const rand = Math.floor(Math.random() * filteredTitles.length);
	const encodedTitle = filteredTitles[rand]
	return {
		urlTitle: base64decode(encodedTitle),
		encodedTitle : encodedTitle,
		guesses: {},
		solved: false,
		updated: (new Date()).getTime(),
		created:  (new Date()).getTime()
	}
}
function getLocationHashParameters() {
	let hash = window.location.hash.substring(1)
	let params = hash.split('&')
	let result = new Map()
	params.forEach(p => {
		const parts = p.split('/')
		if(parts.length === 2) {
			result.set(parts[0], parts[1])
		}
	})
	return result
}
function newGame() {
	if(!confirm('Are you sure you want to start a new game?')) {
		return
	}
	gameState = getDefaultGameState()
	window.location.hash = '#'
	loadArticle()
	saveGameState()
}
async function loadArticle() {
	// Fetch from wikimedia rest api e.g. https://en.wikipedia.org/api/rest_v1/page/mobile-sections/Australia_%28continent%29
	let response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/mobile-sections/${gameState.urlTitle}`)
	let data = await response.json()
	let count = 0
	let html = data.lead.sections[0].text
	let text = getText(html)
	loading=true
	count += text.length
	wikiSections = []
	wikiSections.push({
		text: text,
		headline: striptags(data.lead.displaytitle)
	})
	let i = 0;
	while(count < 100000 && i < data.remaining.sections.length) {
		html = data.remaining.sections[i].text
		text = getText(html)
		count += text.length
		wikiSections.push({
			text: text,
			headline: striptags(data.remaining.sections[i].line)
		})
		i++
	}
	window.location.href = '#article/' + base64encode(gameState.urlTitle)
	renderTokens()
}
function getText(html) {
	 if (typeof window !== "undefined") {
	 	var parser = new window.DOMParser();
	 	var htmlDoc = parser.parseFromString(html, 'text/html');

		// Remove notes, tables, images, captions etc
	 	const tagsToRemove = ['style', 'table', 'figure']
	 	tagsToRemove.forEach(tag => {
			let nodeList = htmlDoc.getElementsByTagName(tag)
			let nodes = Array.prototype.slice.call(nodeList,0); 
			nodes.forEach(node => node.remove())
		})
		const classesToRemove = ['navigation-not-searchable', 'thumbinner', 'gallery', 'infobox', 'hatnote','thumb']
		classesToRemove.forEach(className => {
			let nodeList = htmlDoc.getElementsByClassName(className)
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
	gameState.solved = titleRedaction === undefined
	if(gameState.solved) {
		showWon = true
		saveSolvedGame()
		trackEvent('win_game', {title: gameState.urlTitle})
		renderTokens()
	}
}
function trackEvent(eventName, props) {
	try {
		gtag('event', eventName, props);
	} catch(error) {
		console.log(error)
	}
}
const storageKey = 'solved_game_history'
function saveSolvedGame() {
	let history = getHistory()
	let item = gameState
	history[gameState.urlTitle] = item
	localStorage.setItem(storageKey, JSON.stringify(history))
	console.log(`solved: ${gameState.solved}`)
}
function getHistory() {
	return JSON.parse(localStorage.getItem(storageKey) || '{}')
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
	return !gameState.solved
			&& !commonWordsDict.hasOwnProperty(wordNormal) 
			&& !gameState.guesses.hasOwnProperty(wordNormal);
}
function selectWord(word, scrollTo) {
	selectedWordIndex = selectedWord == word ? selectedWordIndex+1 : 0
	// loop back to top once all words have been selected
	if(!wordCount.hasOwnProperty(word)) {
		return
	}
	selectedWordIndex = selectedWordIndex % wordCount[word]
	let isLoopBack = selectedWord == word && selectedWordIndex == 0
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
		animateScroll.scrollTo({
			container: '#article', 
			element: `#${wordId}`, 
			duration: isLoopBack ? 500 : 150, 
			offset: -25
		})
	}
	reRenderWord(word)
}
function getAccuracyPercent() {
	let guessCount = Object.keys(gameState.guesses).length;
	if(guessCount == 0) {
		return 0.0
	}
	const hits = Object.values(gameState.guesses).filter(x => x > 0).length
	const accuracy =  hits / guessCount
	return `${Math.round(accuracy * 10000) / 100}`

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

let shiftKeyDown = false
function handleKeydown(e) {
	// shift key
	if(e.keyCode == 16) {
		shiftKeyDown = true
	}
}
function handleKeyup(e) {
	// shift key
	if(e.keyCode == 16) {
		shiftKeyDown = false
	}
	// esc key
	if(e.keyCode == 27) {
		showSettings = false
		showWon = false
	}
}
function handleSubmit(ev) {
	console.log(ev)
	let guessNormalized=normalize(guess)
	if (!validateGuess(guessNormalized)) {
		console.log('invalid guess')
		guess = ''
		return
	}
	let words = [guessNormalized]
	if(settings.pluralizeGuesses || shiftKeyDown) {
		let plural = pluralize.plural(guessNormalized)
		if(plural) {
			words.push(plural)
		}
	}
	let wordsCount = words
		.map(x => {
			return {word: x, count: (wordCount[x] || 0) }
		 })
		.sort((a,b) => a.count - b.count)

	wordsCount.forEach(w => {
		gameState.guesses[w.word] = w.count || 0
		trackEvent('guess', {word:w.word})
	})
	// select most common word
	selectWord(wordsCount[wordsCount.length-1].word, false)
	// rerender everything not selected as well
	wordsCount.slice(0,-1).forEach(w => reRenderWord(w.word))
	guess = ''
	checkSolved()
	saveGameState()
	if(guessNormalized == 'togglecheats') {
		gameState.solved = !gameState.solved
		showWon = true
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
    return str
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.trim()
		.split(' ')[0];
}
function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}
let shareWonCopied = false
function shareWon() {
	const text = document.getElementById('share-text')?.innerText;
	copyTextToClipboard(text)
	shareWonCopied = true
	setTimeout(() => shareWonCopied = false, 5000)
}
let customWikiUrl
let customGameUrl
function handleCustomWikiUrl() {
	const parts = customWikiUrl.split('/');
	const title = parts[parts.length-1]
	const base64title = base64encode(title)
	customGameUrl = window.location.origin + window.location.pathname + '#article/' + base64title
}
</script>



<svelte:window on:keydown={handleKeydown} on:keyup="{handleKeyup}"/>
<div id="main">
<nav>
	<h1>Redactle Unlimited</h1>
	<button id='new-game' on:click={newGame}>New Game</button>
	<button id="settings" on:click={() => showSettings = !showSettings}>⚙️</button>
	<p class="info">A puzzle game to guess the title of a random Wikipedia article by revealing the words from the article. 
		Similar to redactle.com but without the daily game limit.</p>
</nav>
<div id="article">
	{#if loading}
		<p>loading...</p>
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
{#if gameState}
<div id="guesses">
	<h3>
		Guesses ({Object.keys(gameState.guesses).length})
	</h3>
	<form id="guess-form" on:submit|preventDefault={handleSubmit}>
		<button id="btn-top" type="button" on:click={() => backToTop()}>▲ Top</button>
		<input id="input-guess" bind:value={guess} placeholder="guess a word..." autocomplete="off" title="Hold shift key to pluralize."/>
		<input id="submit" type="submit" value="Guess" />
	</form>
	<div id="guess-list">
		{#each Object.keys(gameState.guesses).reverse() as word, i}
		{#if settings.showMisses || gameState.guesses[word] > 0 || i == 0}
		<span on:click={selectWord(word, true)} class="{(selectedWord==word ? 'highlight' : '') + (gameState.guesses[word] > 0 ? ' hit' : ' miss') + ' word'}"><b>{word}</b>({gameState.guesses[word]})</span> 
		{/if}
		{/each}
	</div>
</div>
{/if}

{#if showModal}
<div id="modal-container" on:mousedown|self={() => {showSettings = false}} >
	{#if showSettings}
	<div id="settings" class="modal">
		<span class="close" on:click={() => {showSettings = false}}>⨯</span>
		<h3>Settings</h3>
		<fieldset>
			<p>
				<input id="input-pluralize" type="checkbox" bind:checked={settings.pluralizeGuesses} on:change={saveSettings} />
				<label for="input-pluralize">Attempt to pluralize guesses.</label>
			</p>
			<p>	
				<input id="input-show-misses" type="checkbox" bind:checked={settings.showMisses} on:change={saveSettings} />
				<label for="input-show-misses">Show guesses with zero matches.</label>
			</p>
		</fieldset>
		<fieldset>
			<legend>Custom Wikipedia Article</legend>
			<p>Paste a wiki link to start a new game.</p>
			<input id="custom-wiki-url" type="text" bind:value={customWikiUrl} placeholder="Wikipedia URL" on:change={handleCustomWikiUrl} />
			{#if customGameUrl}<p>✅ Use this URL to play: <a target="_blank" href="{customGameUrl}">{customGameUrl}</a></p>{/if}
		</fieldset>
	</div>
	{:else if showWon}
	<div id="solved" class="modal">
		<span class="close" on:click={() => {showWon = false}}>⨯</span>
		<h3>Solved!</h3>
		<p id="solved-message">You solved Redactle Unlimited in {Object.keys(gameState.guesses).length} guesses with {getAccuracyPercent()}% accuracy!</p>
		<p id="share-text" style="display:none;">I solved Redactle Unlimied in {Object.keys(gameState.guesses).length} guesses with {getAccuracyPercent()}% accuracy! Play at {window.location}.</p>
		<button id="copy-share" on:click={shareWon}>{#if shareWonCopied}Copied ✅{:else}Copy and Share{/if}</button>
	</div>
	{/if}
</div>
{/if}

</div>

<style>
	body {
		margin:0;
		padding: 0;
		background: black;
		color: #b6b6b6;
	}

	a, a:visited {
		color: #6dacff;
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

	#article::-webkit-scrollbar {
  		display: none;
	}

	#article p, #article h2 {
		 max-width: 100em;
	}

	#guesses {
		padding:0 .5em;
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
			padding:0 .5em;
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

	nav button, .modal button {
		background-color: #444;
		color: #bababa;
		float: right;
		cursor: pointer;
		border-radius: 5px;
		border: 1px solid #c79f02;
		height: 1.5rem;
		margin: 0 0 0 .2em;
	}
	#article h2, #article p, #guess-list .word {
		font-family:Consolas,monospace;
		line-height: 1.5;
		padding:0 3px;
		border-radius: 3px;
	}
	
	h3 {
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
		font-size:16px !important;
		margin:5px 0;
		user-select: none;
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
		font-size: 16px !important;
	}

	#guess-list {
		overflow-y: scroll;
		margin:5px 0;
	}
	#guess-list::-webkit-scrollbar {
		display: none;
	}

	#guess-list .word {
		margin:0 1em 0 0;
		display: block;
		float: left;
		user-select: none;
	}
	#guess-list .word.hit {
		cursor: pointer;
	}
	#guess-list .word.miss {
		color:#555;
	}	
	.highlight{
        background-color: #c1c1c1;
        color: #333;
    }
	.modal {
		max-width: 700px;
		width: 85%;
		position: fixed;
		top: 30%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 5px;
		background: #373737;
		display: block;
		padding:0.5rem;
	}
	.modal.show {
		display: block;
	}
	.close {
		cursor:pointer;
		color:white;
		position:absolute;
		top:0;
		font-size:32px;
		right:0;
		margin-right: 10px;
	}
	#modal-container {
		position: fixed;
		width:100%;
		height:100%;
		background-color: rgba(0, 0, 0, 0.3);
	}
	.modal input[type="text"] {
		padding:0.5em;
		width: 95%;
		font-size: 1.1em;
		border-radius: 5px;
	}
</style>