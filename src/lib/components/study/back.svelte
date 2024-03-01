<script>
    export let card;
</script>
<div class={'flex flex-col justify-around h-full w-[70%] mx-auto'}>
    <div>
        <h1 class={'text-center font-bold text-md'}>Syndrome</h1>
        <span>
            {card != undefined ? card.syndrome : 'loading...'}
        </span>
    </div>
    <div>
        <h1 class={'text-center font-bold text-md'}>Principe de traitement</h1>
        <span>
            {card != undefined ? card.pdt: 'loading...'}
        </span>
    </div>
    <div>
        <h1 class={'text-center font-bold text-md'}>Point d'accu</h1>
        <span>
            {card != undefined ? card.point_accu : 'loading...'}
        </span>
    </div>
</div>
