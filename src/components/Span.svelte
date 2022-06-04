<script>
    export let id;
    export let value = '';
    export let highlight = false;
    export let redacted = false;
</script>
    
<span id={id} class="{highlight ? 'highlight' : ''}">{ redacted ? '█'.repeat(value.length) : value }</span>
    
<style>
    .highlight{
        background-color: #00becc;
        color: #0f0f0f;
    }
</style>