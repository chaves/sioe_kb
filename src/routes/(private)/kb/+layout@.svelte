<script lang="ts">
	import { browser } from '$app/environment';
	// https://github.com/shinokada/flowbite-sveltekit-responsive-sidebar-layout/blob/main/src/routes/%2Blayout.svelte
	import LinksAdmin from '$lib/data/menu_admin.json';
	let links = LinksAdmin;

	import '../../../app.css';
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import {
		DarkMode,
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		Drawer,
		CloseButton,
		SidebarDropdownWrapper,
		Dropdown,
   		DropdownItem,
        DropdownDivider
	} from 'flowbite-svelte';
	import { sineIn } from 'svelte/easing';

	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};
	export let data: PageData;

	let breakPoint: number = 1024;
	let width: number;
	let backdrop: boolean = false;
	let activateClickOutside = true;
	let drawerHidden: boolean = false;

	$: if (width >= breakPoint) {
		drawerHidden = false;
		activateClickOutside = false;
	} else {
		drawerHidden = true;
		activateClickOutside = true;
	}
	onMount(() => {
		if (width >= breakPoint) {
			drawerHidden = false;
			activateClickOutside = false;
		} else {
			drawerHidden = true;
			activateClickOutside = true;
		}
	});
	const toggleSide = () => {
		if (width < breakPoint) {
			drawerHidden = !drawerHidden;
		}
	};
	const toggleDrawer = () => {
		drawerHidden = false;
	};
	$: activeUrl = $page.url.pathname;$: activeUrl = $page.url.pathname;
	$: session = $page.data?.session;
	$: fullName = $page.data?.user?.profile ? $page.data?.user.profile.first_name + ' ' + $page.data?.user.profile.last_name : 'User';	let spanClass = 'pl-2 self-center text-md text-gray-900 whitespace-nowrap dark:text-white';
	let divClass = 'w-full ml-auto lg:block lg:w-auto order-1 lg:order-none';
	let ulClass =
		'flex flex-col py-3 my-4 lg:flex-row lg:my-0 text-sm font-medium gap-4 dark:lg:bg-transparent lg:bg-white lg:border-0';
	let navDivClass =
		'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700 flex items-center justify-between w-full mx-auto py-1.5 px-4';
</script>

<svelte:window bind:innerWidth={width} />
<header class="flex-none w-full mx-auto bg-white dark:bg-slate-950">
	<Navbar let:hidden let:toggle>
		<NavHamburger
			on:click={toggleDrawer}
			btnClass="focus:outline-none whitespace-normal rounded-lg focus:ring-2 p-1.5 focus:ring-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 m-0 mr-3 lg:hidden"
		/>
		<NavBrand href="/" class="lg:ml-64">
			<img class="h-9 sm:h-12 lg:h-16 self-center whitespace-nowrap dark:text-white pl-4" src="/logo.png" alt="logo" />
		</NavBrand>
		<NavUl class="mt-6"
			{hidden}
			{activeUrl}
			{divClass}
			{ulClass}
			nonActiveClass="md:!pl-3 md:!py-2 lg:!pl-0 text-gray-700 hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 dark:text-white lg:dark:hover:text-primary-700 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
			activeClass="md:!pl-3 md:!py-2 lg:!pl-0 lg:text-primary-700 text-white dark:text-white dark:lg:text-primary-500 bg-primary-700 lg:bg-transparent dark:bg-primary-600 lg:dark:bg-transparent cursor-default"
		>
		{#each links as link}
			<NavLi class="lg:px-2 lg:mb-0" href="{link.path}">{link.title}</NavLi>
		{/each}
		<NavLi id="nav-menu1" class="cursor-pointer -mt-2">
            <img id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" class="w-10 h-10 rounded-full cursor-pointer" src="/assets/images/IMG_2920_carre.jpg" alt="">
        </NavLi>
        <Dropdown triggeredBy="#nav-menu1" class="w-44 z-20">
            <DropdownItem href="/profile">Your Profile</DropdownItem>
            <DropdownDivider />
            <DropdownItem href="/auth/logout">Sign out</DropdownItem>
        </Dropdown>
		</NavUl>
		<NavHamburger on:click={toggle} btnClass="lg:hidden" />
	</Navbar>
</header>

<p class="text-gray-500 text-sm text-center lg:text-left lg:ml-80">
	Society for Institutional & Organizational Economics
</p>

<Drawer
	transitionType="fly"
	{backdrop}
	{transitionParams}
	bind:hidden={drawerHidden}
	bind:activateClickOutside
	width="w-64"
	class="overflow-scroll pb-32"
	id="sidebar"
>
	<div class="flex items-center">
		<CloseButton on:click={() => (drawerHidden = true)} class="mb-4 dark:text-white lg:hidden" />
	</div>
	<Sidebar asideClass="w-54">
		<SidebarWrapper divClass="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
			<SidebarGroup>
				<SidebarItem label="Knowledge Base" href="/" on:click={toggleSide} active={activeUrl === `/`} />
				<SidebarDropdownWrapper label="Annual Conference">
					<SidebarItem
						label="Call for Papers"
						href="sdfdsf"
						{spanClass}
						activeClass="flex items-center p-2 text-base font-normal text-gray-900 bg-primary-200 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-primary-700"
						on:click={toggleSide}
						active={false}
					/>
					<SidebarItem
					label="Re"
					href="sdfdsf"
					{spanClass}
					activeClass="flex items-center p-2 text-base font-normal text-gray-900 bg-primary-200 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-primary-700"
					on:click={toggleSide}
					active={false}
				/>
				</SidebarDropdownWrapper>
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</Drawer>

<section class="py-6 bg-blueGray-50">
	<div class="flex px-4 mx-auto w-full">
		<main class="lg:ml-72 w-full mx-auto">
			<slot />
		</main>
	</div>
</section>