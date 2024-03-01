
<script>
    import {annotate} from 'svelte-rough-notation'
    let selected = -1;

    const tags = ["rein", "poumon", "vessie", "coeur", "rate"];
    const color = [{
        bg: "#ef4444",
        border: "#b91c1c"
    },
    {
        bg: "#14b8a6",
        border: "#0f766e",
    },
    {
        bg: "#06b6d4",
        border: "#0e7490",
    },
    {
        bg: "#a855f7",
        border: "#7e22ce",
    }]
</script>
<div
    class={'basis-1/2 border-2 border-slate-600 rounded-xl shadow-lg font-virgil text-2xl'}
>
    <div class={'flex flex-col items-center justify-center gap-y-5 mb-8 max-w-full h-full'}>
        <h2
            use:annotate={{type: 'underline', visible: true, strokeWidth: 2, iterations: 2}}
        >
            Tags
        </h2>
        <div class={'flex flex-wrap gap-5 place-content-center'}>
        {#each tags as tag, index}
            <div
                on:click={() => {selected = selected == index ? -1 : index}}
                style:border-color={color[index % 4].border}
                style:background-color={color[index % 4].bg}
                class={`select-none rounded-lg text-white hover:ring-4 ${selected == index ? 'ring-4 ring-blue-500' : ''} border-[3px] py-1 px-3`}>
                {tag}
            </div>
        {/each}
        </div>
    </div>
</div>
