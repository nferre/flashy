<script>
    import Spoiler from './spoiler.svelte'

    export let card;
    export let recto = false;
    let spoiler_visible = false;
    let title = recto ? ["Poul", "Langue", "Symptome"] : ["Syndrome", "Principes de traitement", "Point d'acupuncture"];
    $: spoiler_visible = card ? card.poul : false;
</script>
<div class={'flex flex-col justify-around h-full w-[70%] mx-auto'}>
    <div>
        <h1 class={'text-center font-bold text-md mb-4'}>{title[0]}</h1>
        <Spoiler {spoiler_visible}>
            <span>
                {card != undefined ? recto ? card.poul : card.syndrome : 'loading...'}
            </span>
        </Spoiler>
    </div>
    <div>
        <h1 class={'text-center font-bold text-md mb-4'}>{title[1]}</h1>
            <Spoiler {spoiler_visible}>
            <span>
                {card != undefined ? recto ? card.langue : card.pdt : 'loading...'}
            </span>
        </Spoiler>
    </div>
    <div>
        <h1 class={'text-center font-bold text-md mb-4'}>{title[2]}</h1>
        <Spoiler {spoiler_visible}>
            <span>
                {card != undefined ? recto ? card.symptome : card.point_accu : 'loading...'}
            </span>
        </Spoiler>
    </div>
</div>
