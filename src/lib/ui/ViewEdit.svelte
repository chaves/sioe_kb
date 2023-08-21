<script lang="ts">
	import { Edit } from 'lucide-svelte';
	export let edit: boolean;
</script>

<button class="submit mt-6 mb-3" on:click={() => (edit = !edit)}>
	{#if edit}
		<span class="icon fill-white"><Edit /></span>
		<span class="text-add">Exit edit mode</span>
	{:else}
		<span class="icon fill-white"><Edit /></span>
		<span class="text-add">Edit</span>
	{/if}
</button>
