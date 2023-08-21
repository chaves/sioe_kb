<script lang="ts">
	import '../../app.css';
	import NavPublic from '$lib/ui/NavPublic.svelte';
	import NavPrivate from '$lib/ui/NavPrivate.svelte';
	import Footer from '$lib/ui/Footer.svelte';

	export let data: LayoutData;

</script>

<!--Header-->
<header class="bg-white sticky-bar py-2">
	<div class="container bg-white">
		{#if data?.session}
			<NavPrivate />
		{:else}
			<NavPublic />
		{/if}
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
