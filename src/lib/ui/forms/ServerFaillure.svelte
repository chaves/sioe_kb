<script lang="ts">
	import { vars } from '$lib/variables';
	import { ServerCrash } from 'lucide-svelte';
	export let status_code: number;
</script>

<div class="error_message">
	<span class="icon"><ServerCrash /></span> <span class="text-add">Error !</span><br />
	A server error has occurred.<br />
	Please contact <a href="mailto:{vars.CONFERENCE_EMAIL}">{vars.CONFERENCE_EMAIL}</a> and indicate the error message below (if there is one).<br />
	<span class="font-bold">Error code= {status_code}</span>
</div>

<style lang="postcss">
	.error_message {
		@apply text-center text-xl p-6 bg-red-200 rounded-2xl;
	}

	.icon {
		vertical-align: middle;
		display: inline-block;
	}
	.icon {
		@apply h-6 mr-1;
	}

	a {
		@apply font-semibold text-blue-dark hover:underline hover:decoration-pink-500 hover:decoration-2;
	}
</style>
