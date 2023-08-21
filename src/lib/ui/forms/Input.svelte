<script lang="ts">
	import Error from '$lib/ui/forms/Error.svelte';

	export let name: string;
	export let text: string;
	export let error: undefined | string | unknown;

	export let value: string = '';
	export let type: string = 'text';
</script>

<div class="mt-6">
	<label for={name}
		>{text}
		{#if type === 'email'}
			<input type="email" {name} bind:value />
		{:else if type === 'password'}
			<input type="password" {name} bind:value />
		{:else}
			<input type="text" {name} bind:value />
		{/if}
		<Error {error} />
	</label>
</div>
