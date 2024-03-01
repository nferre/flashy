<script>
    import {annotate} from 'svelte-rough-notation'

    export let style;
    export let text = "click me"
    export let color = "#1e293b'";

</script>
<button
    use:annotate={{type: 'box', visible: style == 'rough' ? true : false, color: color, iterations: 3}}
    class={`px-8 py-2 font-semibold text-lg ${style != 'rough' ? 'border-2' : ''}`}
    style:border-color={color}
    >
        <span>
            {text}
       </span>
</button>
