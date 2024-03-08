<script>
    import "../app.css"
    import {initializeFirebase, rtdb} from '$lib/firebase/firebase.client.js'
    import {onMount} from 'svelte'
    import { ref, onValue } from 'firebase/database'
    import {deck_info} from '$lib/store/deck_store.js'

    onMount(() => {
        initializeFirebase();
        const test = ref(rtdb, 'mtc');
        onValue(test, (snap) => {
            const data = snap.val();
            console.log("data:", data);
            deck_info.update((n) => {
                n.deck = data
                return n;
            }
            );
        })
    })
        
</script>

<div class={'min-h-screen bg-yellow-50'}>
<slot />

</div>
