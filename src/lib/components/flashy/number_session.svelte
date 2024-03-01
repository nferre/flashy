<script>
    import check from '$lib/assets/check.svg'
    import {annotate} from 'svelte-rough-notation'
    import {deck_info} from '$lib/store/deck_store.js'

    let nb_session;

    deck_info.subscribe((value) => {
        nb_session = value.nb_session;
    })
</script>
<div
    class={'flex gap-5 justify-center items-center basis-1/3 border-2 border-slate-600 rounded-xl shadow-lg'}>
    <div class={'flex flex-col justify-around items-center font-virgil text-2xl h-full py-6'}>
        <span
            use:annotate={{type: 'underline', iterations: 3, visible: true, strokeWidth: 4, color: '#2f9e44'}}
            class={'text-green-600 text-5xl'}
        >
            {nb_session}
        </span>

        <span class={''}>Session finished</span>
    </div>
</div>
