<script>
    export let id;
    export let value = '';
    export let highlight = false;
    export let redacted = false;
</script>
{#if value.length > 2}
<span id={id} class="{(highlight ? 'highlight' : '') + (redacted ? ' redacted' : '')}">{#if redacted}<span class="char_count">{value.length}</span>{/if}{ redacted ? '█'.repeat(value.length - `${value.length}`.length) : value }</span>
{:else}
<span id={id} class="{(highlight ? 'highlight' : '') + (redacted ? ' redacted' : '')}">{ redacted ? '█'.repeat(value.length) : value}</span>
{/if}
<style>
    .highlight{
        background-color: #00becc;
        color: #0f0f0f;
    }
    .redacted, .char_count {
		background-color: #989898;
	}
    .char_count {
        color:#555;
        font-size: 0.75em;
    }
</style>