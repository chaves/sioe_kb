<script>
import LinksAdmin from '$lib/data/menu_admin.json';

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

let links = LinksAdmin;
$: activeUrl = $page.url.pathname;
$: session = $page.data?.session;
$: fullName = $page.data?.user?.profile ? $page.data?.user.profile.first_name + ' ' + $page.data?.user.profile.last_name : 'User';
</script>
<Navbar class="-ml-4 sm:-ml-8 -mt-2" let:hidden let:toggle>
    <NavBrand href="/">
        <img class="h-9 sm:h-12 lg:h-16" src="/logo.png" alt="logo" />
    </NavBrand>
    <NavHamburger on:click={toggle} />
    {#if session}
    <NavUl class="mt-6" {hidden} {activeUrl}>
        {#each links as link}
        <NavLi class="mt-3" href="{link.path}">{link.title}</NavLi>
        {/each}
        <NavLi id="nav-menu1" class="cursor-pointer">
            <img id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" class="w-10 h-10 rounded-full cursor-pointer" src="/assets/images/IMG_2920_carre.jpg" alt="{fullName}">
        </NavLi>
        <Dropdown triggeredBy="#nav-menu1" class="w-44 z-20">
            <DropdownItem href="/profile">Your Profile</DropdownItem>
            <DropdownDivider />
            <DropdownItem href="/auth/logout">Sign out</DropdownItem>
        </Dropdown>
    </NavUl>
    {:else}
    <NavLi href="/auth">>Log in</NavLi>
    {/if}
</Navbar>


<p class="text-gray-500 text-sm lg:-mt-2">
    Society for Institutional & Organizational Economics
</p>
