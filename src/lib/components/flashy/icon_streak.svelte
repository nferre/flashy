<script>
    import check_streak from '$lib/assets/check_streak.svg'
    import cross from '$lib/assets/cross.svg'
    import cross_gray from '$lib/assets/cross_gray.svg'

    export let mode;
    export let size;
</script>

{#if mode == 'check'}
    <img src={check_streak} alt="check" class={size} />
{:else if mode == 'cross'}
    <img src={cross} alt="cross" class={size}/>
{:else}
    <img src={cross_gray} alt="cross_grey" class={size}/>
{/if}
