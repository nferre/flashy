<script>
    import { browser } from '$app/environment';
    if (browser) { // to prevent error window is not defined, because it's SSR
        window.location.href = '/flashy/flashy';
    }

</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
