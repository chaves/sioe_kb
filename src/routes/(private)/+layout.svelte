<script lang="ts">
	import { onMount } from 'svelte';
	import { goto, invalidate } from '$app/navigation';
	import type { LayoutData } from './$types';

	import '../../app.css';
	import NavPrivate from '$lib/ui/NavPrivate.svelte';
	import Footer from '$lib/ui/Footer.svelte';

	export let data: LayoutData;
	$: ({ supabase, session } = data);

</script>

<!--Header-->
<header class="bg-white py-2 flex-none w-full mx-auto dark:bg-slate-950">
	<div class="container bg-white">
		<NavPrivate />
	</div>
</header>

<section class="py-6 bg-blueGray-50">
	<div class="container main">
		<div class="mx-auto mb-6">
			<slot />
		</div>
	</div>
</section>

<Footer />