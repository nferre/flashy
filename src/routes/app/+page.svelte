<script>
    import Button from '$lib/components/buttons.svelte'
    import Number_session from '$lib/components/app/number_session.svelte'
    import Number_card from '$lib/components/app/number_card.svelte'
    import Timer from '$lib/components/app/timer.svelte'
    import Filter from '$lib/components/app/filter.svelte'
    import Streak from '$lib/components/app/streak.svelte'
    import {initializeFirebase, rtdb} from '$lib/firebase/firebase.client.js'
    import {getDocs, query, collection} from 'firebase/firestore'
    import { ref, onValue } from 'firebase/database'
    import {onMount} from 'svelte';

    let filter = {
        id: -1,
        tag: "none"
    };
    let filter_query;
    $: filter_query = filter.id == -1 ? '' : `?filter=${filter.tag}`;

    onMount(async () => {
        // initializeFirebase();
        // const test = ref(rtdb, 'mtc');
        // console.log(test);
        // onValue(test, (snap) => {
        //     const data = snap.val();
        //     console.log(data);
        // })
        // const q = query(collection(fdb, "test"));
        // const snap = await getDocs(q);
        // snap.forEach(item => console.log(item.id, "=>", item.data()));
    })
</script>
<div class={'flex flex-col max-w-[95%] lg:max-h-[85%] mb-28 md:mb-0 items-center size-full gap-5'}>
    <div class={'flex flex-col md:flex-row w-[70%] md:size-full gap-5'}>
        <Number_session />
        <Number_card />
        <Timer />
    </div>
    <div class={'flex flex-col md:flex-row w-[70%] md:size-full gap-5'}>
        <Filter bind:filter={filter} />
        <Streak />
    </div>

</div>     
<div class={'fixed z-10 bottom-0 flex justify-center max-h-[15%] w-full lg:w-[80%] bg-yellow-50 py-5'}>
    <a class={'cursor-pointer'} href={`/flashy/app/study${filter_query}`}>
        <Button style='rough' color='#14b8a6' text='RÉVISER !'/>
    </a>
</div>

