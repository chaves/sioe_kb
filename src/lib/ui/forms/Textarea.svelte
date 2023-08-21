<script lang="ts">
	import Error from '$lib/ui/forms/Error.svelte';
	import autosize from 'svelte-autosize';

	export let value = '';
    export let name: string;
    export let text: string;
	export let error: undefined | string | unknown;

</script>

<div class="mt-6">
    <label for="{name}"
        >{text}
        <textarea rows="6" use:autosize name="{name}" bind:value></textarea>
        <Error error={error} />
    </label>
</div>
