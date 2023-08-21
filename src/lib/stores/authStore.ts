import type { User } from '$lib/features/navBar/types/User';
import { get, writable } from 'svelte/store';
import { page } from '$app/stores';

export const authUser = writable<User | null>(null);

// Subscribe / unsubscribe from invitations when auth user changes
authUser.subscribe(async (user) => {

});