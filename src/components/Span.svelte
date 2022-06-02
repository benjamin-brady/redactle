<script>
    export let value = '';
    export let highlight = false;
    export let redacted = false;
    </script>
    
    <span class="{highlight ? 'highlight' : ''}">{ redacted ? '▀'.repeat(value.length) : value }</span>
    
    <style>
    .highlight{
        color:black;
        background-color: #66eeff;
    }
</style>