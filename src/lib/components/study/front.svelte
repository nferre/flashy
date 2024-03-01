<script>
    export let card;
</script>
<div class={'flex flex-col justify-around h-full w-[70%] mx-auto'}>
    <div>
        <h1 class={'text-center font-bold text-md'}>Poul</h1>
        <span>
            {card != undefined ? card.poul : 'loading...'}
        </span>
    </div>
    <div>
        <h1 class={'text-center font-bold text-md'}>Langue</h1>
        <span>
            {card != undefined ? card.langue : 'loading...'}
        </span>
    </div>
    <div>
        <h1 class={'text-center font-bold text-md'}>Symptome</h1>
        <span>
            {card != undefined ? card.symptome : 'loading...'}
        </span>
    </div>
</div>
