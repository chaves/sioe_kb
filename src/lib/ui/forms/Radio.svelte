<script lang="ts">
	import Error from '$lib/ui/forms/Error.svelte';
	export let options: string[];
	export let name: string;
	export let selected: string = '';
	export let error: string;
</script>

{#each options as option}
	<div>
		<label class="ml-2" for={name}>
			<input type="radio" {name} bind:group={selected} value={option.id} />
			{option.name}
		</label>
	</div>
{/each}
<Error {error} />
