<script>
    import {annotate} from 'svelte-rough-notation';
    import {deck_info} from '$lib/store/deck_store.js'
    import {get_countdown} from '$lib/helper/alg.js'
    
    let timer;
    let timer_s;
    deck_info.subscribe((value) => {
        timer = value.timer;
    })

    let r = setInterval(() => {
        timer_s = get_countdown(timer);
    }, 1000);
</script>
<div
    class={'flex gap-5 justify-center items-center basis-1/3 border-2 border-slate-600 rounded-xl shadow-lg'}>
    <div class={'flex flex-col justify-center items-center font-virgil text-2xl size-full gap-y-5'}>
        <span
            use:annotate={{type: 'underline', iterations: 2, visible: true, strokeWidth: 3}}
            class={'text-green-600 text-3xl'}
        >
            {timer_s}
        </span>

        <span class={'max-w-[90%]'}>until next session</span>
    </div>
</div>
