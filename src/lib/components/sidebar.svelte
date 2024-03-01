<script>
    import logo from '$lib/assets/big_icon.png'
    import My_button from './buttons.svelte'
    import Hamburger from './hamburger.svelte'
    import Chevron_down from '$lib/components/icons/chevron_down.svelte'
    import Plus from '$lib/components/icons/plus.svelte'

    export let extra_class;
</script>

<div
    class={`absolute lg:static md:shadow-xl z-40 ${extra_class} h-screen border-r border-[#c6c4b1] transition-transform duration-100 ease-in flex flex-col min-w-60 max-w-60 lg:w-[20%] items-center justify-between pb-5 bg-yellow-50`}

>
    <div class={'flex flex-col'}>
        <img alt='logo' src={logo} class="w-40"/>
        <hr class={'my-3 border-t-2 border-zinc-500 border-dashed'}>
        <div class={'flex flex-col font-virgil gap-5 mt-5 text-xl'}>
            <div class={'flex justify-between'}>
                <span>My decks</span>
                <Chevron_down />
            </div>
            <div class={'flex justify-between'}>
                <span>Create deck</span>
                <Plus />
            </div>
        </div>
    </div>
    <div class={"flex flex-col gap-5 w-4/5"}>
        <My_button text={"Log in"} color={'#1e293b'} />
        <My_button text={"Sign up"} color={'#14b8a6'}/>
    </div>
</div>
