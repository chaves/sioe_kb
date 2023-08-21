<script lang="ts">
	import '../../app.css';
	import NavPublic from '$lib/ui/NavPublic.svelte';
	import Footer from '$lib/ui/Footer.svelte';

</script>

<!--Header-->
<header class="bg-white sticky-bar py-2">
	<div class="container bg-white">
		<NavPublic />
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
