<script>
    import arrow_flip from '$lib/assets/arrow_flip.svg'
    import arrow_back from '$lib/assets/arrow_back.svg'

    export let progress;
    export let toggle;
</script>
<div class={'flex items-center'}>
    <a href='/flashy/flashy'>
        <img src={arrow_back} alt='back arrow' class={'size-16'}/>
    </a>
    <progress value={$progress} class={'m-5 rounded border-2 border-slate-600'} />
    <button on:click={toggle}>
        <img src={arrow_flip} alt='flip arrow' class={'size-10'}/>
    </button>
</div>
