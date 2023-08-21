<script lang="ts">
	import type { PageData } from './$types';

	import { invalidateAll } from '$app/navigation';
	import { superForm } from 'sveltekit-superforms/client';

	// import Input from '$lib/ui/forms/Input.svelte';
	import Textarea from '$lib/ui/forms/Textarea.svelte';

	import { Save } from 'lucide-svelte';

	import { Button, Card, Input } from 'stwui';

	export let data: PageData;
	let { user } = data;

	const { form, errors, message, enhance } = superForm(data.form, {
		applyAction: false,
		onResult({ result }) {
			if (result.type === 'success') {
				console.log('success');
			}
			invalidateAll();
		}
	});
</script>

<h1>Account</h1>

<p>
	Logged in as {user?.email}
</p>


<form class="call-form mt-6" method="post" action="?/add" use:enhance>

	<Input name="title" value={$form.title} error={$errors.title}>
		<Input.Label slot="label">Title</Input.Label>
	</Input>

	<Textarea
		text="Description"
		name="description"
		value={$form.description}
		error={$errors.description}
	/>
	<Button type="primary">
		<Save size="18" />
		<span class="ml-2">Update your profile</span>
	</Button>
</form>