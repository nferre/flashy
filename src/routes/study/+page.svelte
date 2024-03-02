<script>
    import Main from '$lib/components/study/main.svelte'
    import Header from '$lib/components/study/header.svelte'
    import Footer from '$lib/components/study/footer.svelte'
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
    import {goto} from '$app/navigation'
    import {set_new_interval} from '$lib/helper/alg.js'
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
    <Header toggle={() => fliped = !fliped} {progress}/>
    <Main {fliped} card={card_data[current_card].card} />
    <Footer {next_card} />
</div>
