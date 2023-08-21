<script lang="ts">
	import Error from '$lib/ui/forms/Error.svelte';
	export let options;
	export let name: string;
	export let text: string;
	export let error: undefined | string | unknown;
	export let value: number | string;

	let options_for_select = [{ id: '', name: 'Please select ...' }, ...options];
</script>

<label for={name}
	>{text}
	<select {name}>
		{#each options_for_select as item}
			{#if item.id == value}
				<option value={item.id} selected>{item.name}</option>
			{:else}
				<option value={item.id}>{item.name}</option>
			{/if}
		{/each}
	</select>
	<Error {error} />
</label>
