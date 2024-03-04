<script>
    export let spoiler_visible;

</script>
<div 
    on:click={() => spoiler_visible = true}
    class={`w-full h-4/5 ${spoiler_visible == true ? 'transition-colors' : 'select-none bg-slate-200 text-slate-200 rounded size-full'}`}>
    <slot/>
</div>

