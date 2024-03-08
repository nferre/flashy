import { writable } from "svelte/store";

export const deck_info = writable({
    nb_session: 0,
    card_memorized: 0,
    timer: new Date(0).getMinutes(),
    deck: undefined,
});
