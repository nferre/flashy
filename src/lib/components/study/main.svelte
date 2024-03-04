<script>
    import Card_content from './card_content.svelte'
    export let fliped = false;
    export let card;
    export let spoiler_visible;
</script>
<section
      class="w-[95%] sm:w-[60%] h-[80%] flex justify-center items-center text-white"
    >
      <div
        class="size-full bg-transparent group perspective"
      >
        <div
          class="border-slate-500 border-2 rounded-lg relative preserve-3d w-full h-full duration-1000"
         style:transform={fliped ? 'rotateY(180deg)' : ''}
        >
          <div class="absolute backface-hidden w-full h-full text-black bg-slate-50 rounded-xl">
                <Card_content {spoiler_visible} {card} recto={true} />
          </div>
          <div
            class="text-black absolute my-rotate-y-180 backface-hidden w-full h-full overflow-hidden bg-slate-50 rounded-xl"
          >
            <Card_content {card} {spoiler_visible}/>
          </div>
        </div>
      </div>
    </section>
