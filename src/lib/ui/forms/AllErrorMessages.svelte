<script lang="ts">
	import Error from '$lib/ui/forms/Error.svelte';

	export let error_messages: null | Object;

	console.log(error_messages);

	const messages: string[] = [];

	if (error_messages) {
		for (const [key, value] of Object.entries(error_messages)) {
			messages.push(value);
		}
	}
</script>

{#if messages}
	{#each messages as error}
		{#if error && error.length > 0}
			<Error error={error[0]} />
		{:else}
			<Error error={error} />
		{/if}
	{/each}
{/if}
