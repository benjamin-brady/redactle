<script>
    export let id;
    export let value = '';
    export let highlight = false;
    export let redacted = false;
    </script>
    
    <span id={id} class="{highlight ? 'highlight' : ''}">{ redacted ? '▀'.repeat(value.length) : value }</span>
    
    <style>
    .highlight{
        color:black;
        background-color: rgb(0, 127, 143);
    }
</style>