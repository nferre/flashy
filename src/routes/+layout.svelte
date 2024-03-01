<script>
    import "../app.css"
    import {goto} from '$app/navigation'
    import { page } from '$app/stores';

    $: if($page.route.id == "/") {
        goto('/flashy/flashy');
    }
</script>

<div class={'min-h-screen bg-yellow-50'}>
<slot />

</div>
