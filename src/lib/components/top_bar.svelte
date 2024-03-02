<script>
    import Hamburger from './hamburger.svelte'
    import Bell from './icons/bell.svelte'
    import flag from '$lib/assets/Flag_of_France.svg'
    import Annotation from 'svelte-rough-notation'

    export let toggle_menu;
    export let is_open;
</script>

<div class={`flex justify-between items-center py-5 w-[95%] ${is_open ? 'opacity-50' : ''}`}>
    <Bell />
<span class={'text-2xl font-virgil text-center'}>
        <Annotation visible={true} type='underline' multiline={true} iterations={1} padding={3}>
            Paquet MTC FLETC
        </Annotation>
    </span>
    <div class={'flex gap-5'}>
        <img src={flag} alt={'france flag'} class={'h-6 rounded ring-2 ring-slate-600'}/>
        <Hamburger {toggle_menu} />
    </div>
</div>
