<script>

import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Dropdown,
    DropdownItem,
    DropdownDivider
} from 'flowbite-svelte';
import {
    Icon
} from 'flowbite-svelte-icons';
import {
    page
} from '$app/stores';

$: activeUrl = $page.url.pathname;

</script>

<Navbar class="-ml-4 sm:-ml-8 -mt-2" let:hidden let:toggle>
    <NavBrand href="/">
        <img class="h-9 sm:h-12 lg:h-16" src="/logo.png" alt="logo" />
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl class="mt-6" {hidden} {activeUrl}>
        <NavLi class="mt-3" href="/auth">Sign In</NavLi>
    </NavUl>
</Navbar>

<p class="text-gray-500 text-sm lg:-mt-2">
    Society for Institutional & Organizational Economics
</p>
