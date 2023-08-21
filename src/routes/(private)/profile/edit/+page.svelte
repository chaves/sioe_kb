<script lang="ts">
  import type { PageData } from "./$types";
  import { page } from "$app/stores";
  import type { profileSchema } from "$lib/validations/zodShemas";
  import FormMessage from "$lib/ui/feedback/FormMessage.svelte";

  import { superForm } from "sveltekit-superforms/client";
  import { Button } from 'flowbite-svelte';
  import { SendHorizontal } from "lucide-svelte";

  import Breadcrumb from "$lib/ui/BreadcrumbSolo.svelte";
  import Textarea from "$lib/ui/forms/Textarea.svelte";
  import Input from "$lib/ui/forms/Input.svelte";
  import SelectCountry from "$lib/ui/forms/SelectCountry.svelte";

  export let data;
  const { form, errors, enhance } = superForm(data.profileForm);
  const countries = data.countries;
  const profile = data.user.profile;

  $: first_name = $form.first_name ? $form.first_name : profile.first_name;
  $: last_name = $form.last_name ? $form.last_name : profile.last_name;
  $: university = $form.university ? $form.university : profile.university;
  $: country_code = $form.country_code ? $form.country_code : profile.country_code;
</script>

<Breadcrumb title="Edit your profile" />

<form class="call-form" method="POST" use:enhance>
  <Input
    text="First name"
    name="first_name"
    bind:value={first_name}
    error={$errors.first_name}
  />

  <Input
    text="Last name"
    type="text"
    name="last_name"
    bind:value={last_name}
    error={$errors.last_name}
  />

  <Input
    text="University / Organization"
    type="text"
    name="university"
    bind:value={university}
    error={$errors.university}
  />

  <SelectCountry
    text="Country"
    name="country_code"
    options={countries}
    bind:value={country_code}
    error={$errors.country_code}
  />


  <Button class="mt-6" type="submit" color="blue">
    <SendHorizontal class="mr-3 w-5 h-5" /> Update
    </Button>
</form>
