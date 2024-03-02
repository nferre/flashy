<script>
    import Main from '$lib/components/study/main.svelte'
    import Icon from '$lib/components/flashy/icon_streak.svelte'
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
    import {goto} from '$app/navigation'
    import {set_new_interval} from '$lib/helper/alg.js'
    import arrow_flip from '$lib/assets/arrow_flip.svg'
    import arrow_back from '$lib/assets/arrow_back.svg'
    import test from '$lib/assets/test.png'
    import card_data from './testcards.json'
    import {onMount} from 'svelte'
    import {deck_info} from '$lib/store/deck_store.js'

    let current_card = 0;
    let current_deck;
    const max_card = 20;
    let fliped = false;
    let timer;

    const progress = tweened(0.0, {
        duration: 400,
        easing: cubicOut
    });

    function get_progress() {
        progress.set((current_card + 1) / max_card);
    }

    function next_card() {
        fliped = false;
        set_new_interval(timer, current_deck, current_card);
        if (current_card == max_card - 1)
        {
            deck_info.update((value) => {
                value.nb_session++;
                return value;
            })
            goto('/flashy/flashy')
            return;
        }
        current_card++;
        timer = new Date().getTime();
        get_progress();
    }

    onMount(() => {
        timer = new Date().getTime();
        if (!localStorage.getItem('data'))
            localStorage.setItem('data', JSON.stringify(card_data.slice(0, 20)));
        current_deck = JSON.parse(localStorage.getItem('data'));
    })
</script>

<div class={'flex flex-col justify-around items-center h-screen overflow-hidden'}> 
    <div class={'flex items-center'}>
        <a href='/flashy/flashy'>
            <img src={arrow_back} alt='back arrow' class={'size-16'}/>
        </a>
        <progress value={$progress} class={'m-5 rounded border-2 border-slate-600'} />
        <button on:click={() => {fliped = !fliped}}>
            <img src={arrow_flip} alt='flip arrow' class={'size-10'}/>
        </button>
    </div>
    <Main {fliped} card={card_data[current_card].card} />
    <div class={'flex w-full justify-around w-[95%] sm:w-[30%]'}>
        <button on:click={next_card} >
            <Icon mode={'check'} size={'size-16 cursor-pointer'}/>
        </button>
        <Icon mode={'cross'} size={'size-16 cursor-pointer'}/>
    </div>
</div>
