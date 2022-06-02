<script>
	import Span from './../components/Span.svelte'
	let titleb64 = 'UHJpbWUgbnVtYmVy'
	let title = atob(titleb64)
	const wikib64 = 'QSBwcmltZSBudW1iZXIgKG9yIGEgcHJpbWUpIGlzIGEgbmF0dXJhbCBudW1iZXIgZ3JlYXRlciB0aGFuIDEgdGhhdCBpcyBub3QgYSBwcm9kdWN0IG9mIHR3byBzbWFsbGVyIG5hdHVyYWwgbnVtYmVycy4gQSBuYXR1cmFsIG51bWJlciBncmVhdGVyIHRoYW4gMSB0aGF0IGlzIG5vdCBwcmltZSBpcyBjYWxsZWQgYSBjb21wb3NpdGUgbnVtYmVyLiBGb3IgZXhhbXBsZSwgNSBpcyBwcmltZSBiZWNhdXNlIHRoZSBvbmx5IHdheXMgb2Ygd3JpdGluZyBpdCBhcyBhIHByb2R1Y3QsIDEgw5cgNSBvciA1IMOXIDEsIGludm9sdmUgNSBpdHNlbGYuIEhvd2V2ZXIsIDQgaXMgY29tcG9zaXRlIGJlY2F1c2UgaXQgaXMgYSBwcm9kdWN0ICgyIMOXIDIpIGluIHdoaWNoIGJvdGggbnVtYmVycyBhcmUgc21hbGxlciB0aGFuIDQuIFByaW1lcyBhcmUgY2VudHJhbCBpbiBudW1iZXIgdGhlb3J5IGJlY2F1c2Ugb2YgdGhlIGZ1bmRhbWVudGFsIHRoZW9yZW0gb2YgYXJpdGhtZXRpYzogZXZlcnkgbmF0dXJhbCBudW1iZXIgZ3JlYXRlciB0aGFuIDEgaXMgZWl0aGVyIGEgcHJpbWUgaXRzZWxmIG9yIGNhbiBiZSBmYWN0b3JpemVkIGFzIGEgcHJvZHVjdCBvZiBwcmltZXMgdGhhdCBpcyB1bmlxdWUgdXAgdG8gdGhlaXIgb3JkZXIuCgpUaGUgcHJvcGVydHkgb2YgYmVpbmcgcHJpbWUgaXMgY2FsbGVkIHByaW1hbGl0eS4gQSBzaW1wbGUgYnV0IHNsb3cgbWV0aG9kIG9mIGNoZWNraW5nIHRoZSBwcmltYWxpdHkgb2YgYSBnaXZlbiBudW1iZXIge2Rpc3BsYXlzdHlsZSBufW4sIGNhbGxlZCB0cmlhbCBkaXZpc2lvbiwgdGVzdHMgd2hldGhlciB7ZGlzcGxheXN0eWxlIG59biBpcyBhIG11bHRpcGxlIG9mIGFueSBpbnRlZ2VyIGJldHdlZW4gMiBhbmQge2Rpc3BsYXlzdHlsZSB7c3FydCB7bn19fXtzcXJ0IHtufX0uIEZhc3RlciBhbGdvcml0aG1zIGluY2x1ZGUgdGhlIE1pbGxlcuKAk1JhYmluIHByaW1hbGl0eSB0ZXN0LCB3aGljaCBpcyBmYXN0IGJ1dCBoYXMgYSBzbWFsbCBjaGFuY2Ugb2YgZXJyb3IsIGFuZCB0aGUgQUtTIHByaW1hbGl0eSB0ZXN0LCB3aGljaCBhbHdheXMgcHJvZHVjZXMgdGhlIGNvcnJlY3QgYW5zd2VyIGluIHBvbHlub21pYWwgdGltZSBidXQgaXMgdG9vIHNsb3cgdG8gYmUgcHJhY3RpY2FsLiBQYXJ0aWN1bGFybHkgZmFzdCBtZXRob2RzIGFyZSBhdmFpbGFibGUgZm9yIG51bWJlcnMgb2Ygc3BlY2lhbCBmb3Jtcywgc3VjaCBhcyBNZXJzZW5uZSBudW1iZXJzLiBBcyBvZiBEZWNlbWJlciAyMDE4IHRoZSBsYXJnZXN0IGtub3duIHByaW1lIG51bWJlciBpcyBhIE1lcnNlbm5lIHByaW1lIHdpdGggMjQsODYyLDA0OCBkZWNpbWFsIGRpZ2l0cy5bMV0KClRoZXJlIGFyZSBpbmZpbml0ZWx5IG1hbnkgcHJpbWVzLCBhcyBkZW1vbnN0cmF0ZWQgYnkgRXVjbGlkIGFyb3VuZCAzMDAgQkMuIE5vIGtub3duIHNpbXBsZSBmb3JtdWxhIHNlcGFyYXRlcyBwcmltZSBudW1iZXJzIGZyb20gY29tcG9zaXRlIG51bWJlcnMuIEhvd2V2ZXIsIHRoZSBkaXN0cmlidXRpb24gb2YgcHJpbWVzIHdpdGhpbiB0aGUgbmF0dXJhbCBudW1iZXJzIGluIHRoZSBsYXJnZSBjYW4gYmUgc3RhdGlzdGljYWxseSBtb2RlbGxlZC4gVGhlIGZpcnN0IHJlc3VsdCBpbiB0aGF0IGRpcmVjdGlvbiBpcyB0aGUgcHJpbWUgbnVtYmVyIHRoZW9yZW0sIHByb3ZlbiBhdCB0aGUgZW5kIG9mIHRoZSAxOXRoIGNlbnR1cnksIHdoaWNoIHNheXMgdGhhdCB0aGUgcHJvYmFiaWxpdHkgb2YgYSByYW5kb21seSBjaG9zZW4gbGFyZ2UgbnVtYmVyIGJlaW5nIHByaW1lIGlzIGludmVyc2VseSBwcm9wb3J0aW9uYWwgdG8gaXRzIG51bWJlciBvZiBkaWdpdHMsIHRoYXQgaXMsIHRvIGl0cyBsb2dhcml0aG0uCgpTZXZlcmFsIGhpc3RvcmljYWwgcXVlc3Rpb25zIHJlZ2FyZGluZyBwcmltZSBudW1iZXJzIGFyZSBzdGlsbCB1bnNvbHZlZC4gVGhlc2UgaW5jbHVkZSBHb2xkYmFjaCdzIGNvbmplY3R1cmUsIHRoYXQgZXZlcnkgZXZlbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiAyIGNhbiBiZSBleHByZXNzZWQgYXMgdGhlIHN1bSBvZiB0d28gcHJpbWVzLCBhbmQgdGhlIHR3aW4gcHJpbWUgY29uamVjdHVyZSwgdGhhdCB0aGVyZSBhcmUgaW5maW5pdGVseSBtYW55IHBhaXJzIG9mIHByaW1lcyBoYXZpbmcganVzdCBvbmUgZXZlbiBudW1iZXIgYmV0d2VlbiB0aGVtLiBTdWNoIHF1ZXN0aW9ucyBzcHVycmVkIHRoZSBkZXZlbG9wbWVudCBvZiB2YXJpb3VzIGJyYW5jaGVzIG9mIG51bWJlciB0aGVvcnksIGZvY3VzaW5nIG9uIGFuYWx5dGljIG9yIGFsZ2VicmFpYyBhc3BlY3RzIG9mIG51bWJlcnMuIFByaW1lcyBhcmUgdXNlZCBpbiBzZXZlcmFsIHJvdXRpbmVzIGluIGluZm9ybWF0aW9uIHRlY2hub2xvZ3ksIHN1Y2ggYXMgcHVibGljLWtleSBjcnlwdG9ncmFwaHksIHdoaWNoIHJlbGllcyBvbiB0aGUgZGlmZmljdWx0eSBvZiBmYWN0b3JpbmcgbGFyZ2UgbnVtYmVycyBpbnRvIHRoZWlyIHByaW1lIGZhY3RvcnMuIEluIGFic3RyYWN0IGFsZ2VicmEsIG9iamVjdHMgdGhhdCBiZWhhdmUgaW4gYSBnZW5lcmFsaXplZCB3YXkgbGlrZSBwcmltZSBudW1iZXJzIGluY2x1ZGUgcHJpbWUgZWxlbWVudHMgYW5kIHByaW1lIGlkZWFscy4='
	let wiki = decodeURIComponent(escape(atob(wikib64)));
	let guesses = {}
	let solved = false
	let regex = /(([^\u0000-\u007F]|\w)+)((\W)*)/ig
	const stopwords = ['i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', "you're", "you've", "you'll", "you'd", 'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', "she's", 'her', 'hers', 'herself', 'it', "it's", 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', "that'll", 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', "don't", 'should', "should've", 'now', 'd', 'll', 'm', 'o', 're', 've', 'y', 'ain', 'aren', "aren't", 'couldn', "couldn't", 'didn', "didn't", 'doesn', "doesn't", 'hadn', "hadn't", 'hasn', "hasn't", 'haven', "haven't", 'isn', "isn't", 'ma', 'mightn', "mightn't", 'mustn', "mustn't", 'needn', "needn't", 'shan', "shan't", 'shouldn', "shouldn't", 'wasn', "wasn't", 'weren', "weren't", 'won', "won't", 'wouldn', "wouldn't"]
	let stopwordsDict ={}
	stopwords.forEach(w => stopwordsDict[w]=1)
	
	let titleTokens = []
	let contentTokens = []
	let guess = ''
	let selectedWord = ''
	
	
	// strip citations
	wiki = wiki.replace(/\[\d+\]/ig, '')

	function renderTokens() {
		console.log('redacting...')

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
	renderTokens()
	
	function selectWord(event) {
		console.log(event)
		selectedWord = event.word
		renderTokens()
	}
	
	function handleSubmit() {
		selectedWord=guess.toLowerCase()
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