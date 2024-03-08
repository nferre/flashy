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
    let spoiler_visible = false;
    let next_card_date;
    let next_session_date;

    const progress = tweened(0.0, {
        duration: 400,
        easing: cubicOut
    });

    function get_progress() {
        progress.set((current_card + 1) / max_card);
    }

    function get_next_session_date() {
        if (next_session_date > next_card_date) {
            next_session_date = next_card_date;
        }
    }

    function next_card() {
        fliped = false;
        spoiler_visible = false;
        next_card_date = set_new_interval(timer, current_deck, current_card, deck_data);
        get_next_session_date();
        if (current_card == max_card - 1)
        {
            deck_info.update((value) => {
                value.timer = next_session_date;
                value.nb_session++;
                return value;
            })
            next_session_date = 0;
            goto('/flashy/app')
            return;
        }
        current_card++;
        timer = +new Date();
        get_progress();
    }

    onMount(() => {
        timer = +new Date();
        if (!localStorage.getItem('data'))
            localStorage.setItem('data', JSON.stringify($deck_info.deck.map((card, index) => ({card: card.card, info: card.info, tags: card.tags, id: index}))));
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
    <Main {fliped} {spoiler_visible} card={current_deck != undefined ? current_deck[current_card].card : undefined} />
    <Footer {next_card} />
</div>
