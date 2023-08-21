<script lang="ts">
	import { Send} from 'lucide-svelte';
    export let text: string;
</script>


<button class="submit mt-6 w-auto" type="submit">
    <span class="icon fill-white"><Send size="20" /></span>
    <span class="text-add ml-1"> {text}</span>
</button>