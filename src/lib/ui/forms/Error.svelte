<script lang="ts">
	export let error: undefined | string | unknown;
</script>

{#if error}
	<div class="error">{error}</div>
{/if}
