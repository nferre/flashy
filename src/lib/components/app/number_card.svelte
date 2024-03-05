<script>
    import {annotate} from 'svelte-rough-notation';
    import {deck_info} from '$lib/store/deck_store.js'

    let card_memorized_value = 0;
    deck_info.subscribe((value) => {
        card_memorized_value = value.card_memorized;
    })
</script>
<div
    class={'flex gap-5 justify-center items-center basis-1/3 border-2 border-slate-600 rounded-xl shadow-lg min-h-36'}>
    <div class={'flex flex-col justify-around items-center font-virgil text-2xl h-full sm:py-6 py-4'}>
        <span
            class={'text-orange-400 text-5xl'}
        >
            {card_memorized_value}%
        </span>

        <span class={'text-center'}>de cartes mémorisées</span>
    </div>
</div>
