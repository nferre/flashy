<script>
    import Button from '$lib/components/buttons.svelte'
    import Number_session from '$lib/components/flashy/number_session.svelte'
    import Number_card from '$lib/components/flashy/number_card.svelte'
    import Timer from '$lib/components/flashy/timer.svelte'
    import Tags from '$lib/components/flashy/tags.svelte'
    import Streak from '$lib/components/flashy/streak.svelte'
</script>
<div class={'flex flex-col max-w-[95%] lg:max-h-[85%] mb-28 md:mb-0 items-center size-full gap-5'}>
    <div class={'flex flex-col md:flex-row w-[70%] md:size-full gap-5'}>
        <Number_session />
        <Number_card />
        <Timer />
    </div>
    <div class={'flex flex-col md:flex-row w-[70%] md:size-full gap-5'}>
        <Tags />
        <Streak />
    </div>

</div>     
<div class={'fixed z-10 bottom-0 flex justify-center max-h-[15%] w-full lg:w-[80%] bg-yellow-50 py-5'}>
    <a class={'cursor-pointer'} href="/study">
        <Button style='rough' color='#14b8a6' text='STUDY !' />
    </a>
</div>

