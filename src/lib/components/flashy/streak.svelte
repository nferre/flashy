<script>
    import check from '$lib/assets/check_streak.svg'
    import Icon_streak from '$lib/components/flashy/icon_streak.svelte'
    import {annotate} from 'svelte-rough-notation';

    const number_streak = [
        {mode: 'check', letter: 'L'},
        {mode: 'check', letter: 'M'},
        {mode: 'cross', letter: 'M'},
        {mode: 'cross_gray', letter: 'J'},
        {mode: 'cross_gray', letter: 'V'},
        {mode: 'cross_gray', letter: 'S'},
        {mode: 'cross_gray', letter: 'D'},
        ]
</script>
<div
    class={'flex flex-col items-center basis-1/2 border-2 border-slate-600 rounded-xl shadow-lg font-virgil text-2xl'}
>
    <div class={'flex flex-col items-center justify-center basis-1/2 gap-y-5'}>
        <h2
            use:annotate={{type: 'underline', visible: true, iterations: 1}}
            class={'m-2'}
        >
            Streak this week :
        </h2>
        <div class={'flex'}>
        {#each number_streak as nb}
            <div class={'flex flex-col items-center'}>
                <Icon_streak size={'size-10'} mode={nb.mode}/>
                {nb.letter}
            </div>
        {/each}
        </div>
    </div>

    <div class={'flex items-center basis-1/2'}>
        <h2
            class={'flex sm:inline flex-col items-center'}
        >
            <span
                use:annotate={{type: 'underline', visible: true, padding: 2}}
            >
             Total streak :
            </span>
            <span
                use:annotate={{type: 'circle', visible: true, color: '#ef4444', padding: 10}}
                class={'text-2xl text-red-500 ml-2 text-truncate'}>
                12 🔥
            </span>
        </h2>
    </div>
</div>
