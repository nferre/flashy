<script>
    import Button from '$lib/components/buttons.svelte'
    import Top_bar from '$lib/components/top_bar.svelte'
    import Sidebar from '$lib/components/sidebar.svelte'

    let is_open = false;

    function menu(_is_open) {
        is_open = _is_open;
    }
</script>
<div class={'flex'}>
    <Sidebar
        extra_class={is_open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    />
    <div class={'flex flex-col items-center w-full md:h-[85vh] lg:h-[95vh]'}>
        <Top_bar {is_open} toggle_menu={() => menu(!is_open)} />
        <div 
            on:click={() => menu(false)}
            role={'button'}
            class={`flex cursor-default justify-center size-full ${is_open ? 'opacity-50' : ''}`}>
            <slot/>
        </div>
    </div>
</div>
