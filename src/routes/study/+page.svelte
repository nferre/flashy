<script>
    import Main from '$lib/components/study/main.svelte'
    import Header from '$lib/components/study/header.svelte'
    import Footer from '$lib/components/study/footer.svelte'
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
    import {goto} from '$app/navigation'
    import {set_new_interval} from '$lib/helper/alg.js'
    import test from '$lib/assets/test.png'
    import deck_json from './testcards.json'
    import {onMount} from 'svelte'
    import {page} from '$app/stores'
    import {deck_info} from '$lib/store/deck_store.js'

    let current_card = 0;
    let current_deck;
    let deck_data;
    let max_card = 20;
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
        set_new_interval(timer, current_deck, current_card, deck_data);
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
            localStorage.setItem('data', JSON.stringify(deck_json.map((card, index) => ({card: card.card, info: card.info, tags: card.tags, id: index}))));
        deck_data = JSON.parse(localStorage.getItem('data'));
        if ($page.url.searchParams.has("filter")) {
            let filter = $page.url.searchParams.get("filter");
            current_deck = deck_data.filter((card) => card.tags.includes(filter))
            current_deck = current_deck.slice(0, 20);
        }
        else {
            current_deck = deck_data.slice(0, 20);

        }
        max_card = current_deck.length;
    })
</script>

<div class={'flex flex-col justify-around items-center h-screen overflow-hidden'}> 
    <Header toggle={() => fliped = !fliped} {progress}/>
    <Main {fliped} card={current_deck != undefined ? current_deck[current_card].card : undefined} />
    <Footer {next_card} />
</div>
