<script>
    export let id;
    export let value = '';
    export let highlight = false;
    export let redacted = false;
</script>
    
<span id={id} class="{(highlight ? 'highlight' : '') + (redacted ? ' redacted' : '')}">{#if redacted}<span class="char_count">{value.length}</span>{/if}{ redacted ? '█'.repeat(value.length - `${value.length}`.length) : value }</span>
    
<style>
    .highlight{
        background-color: #00becc;
        color: #0f0f0f;
    }
    .redacted, .char_count {
		background-color: #989898;
	}
    .char_count {
        color:#333;
        font-size: 0.8em;
    }
</style>