<script>
    import Icon from '$lib/components/flashy/icon_streak.svelte'

    export let next_card;
</script>

<div class={'flex w-full justify-around w-[95%] sm:w-[30%]'}>
    <button on:click={next_card} >
        <Icon mode={'check'} size={'size-16 cursor-pointer'}/>
    </button>
    <button on:click={next_card} >
        <Icon mode={'cross'} size={'size-16 cursor-pointer'}/>
    </button>
</div>
