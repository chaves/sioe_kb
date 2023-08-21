<script lang="ts">
	export let title: string;
</script>

<section class="py-3 mb-6 bg-blueGray-100 rounded-xl">
	<div class="container text-center">
		<h1>{@html title}</h1>
	</div>
</section>

<style lang="postcss">
	h1 {
		@apply text-2xl lg:text-3xl font-bold mb-1;
	}
</style>
