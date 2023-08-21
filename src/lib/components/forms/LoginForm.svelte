<script lang="ts">
  import { superForm } from "sveltekit-superforms/client";
  import { page } from "$app/stores";
  import { Chasing } from "svelte-loading-spinners";
  import FormMessage from "$lib/ui/feedback/FormMessage.svelte";
  import { authUser } from "$lib/stores/authStore";
  import { goto } from "$app/navigation";
  import { Input, Helper } from "flowbite-svelte";
  import Error from '$lib/ui/forms/Error.svelte';
  import { Mail } from "lucide-svelte";

  export let data;
  export let redirectTo: string;

  const {
    form,
    errors,
    enhance: superEnhance,
    delayed,
    message,
  } = superForm(data);

  $: {
    setAuthUser($message?.user, $message?.redirectTo);
  }

  const setAuthUser = (user, redirectTo?: string) => {
    if (user && redirectTo) {
      authUser.set(user);
      goto(redirectTo);
    }
  };
</script>

<form
  class="call-form flex flex-col justify-center items-center"
  action="?/login&redirectTo={redirectTo ? redirectTo : 'account'}"
  method="POST"
  use:superEnhance
>
  <Input
    id="email"
    type="email"
    name="email"
    placeholder=""
    bind:value={$form.email}
  />

  <Helper class="text-sm mt-1 italic text-gray-400">
    Enter your email to receive a “magic” link.
  </Helper>

  <Error error="{$errors.email? $errors.email[0] : '' }" />

  <button
    class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 my-2"
    type="submit"
    disabled={$delayed}
  >
  <Mail class="w-4 h-4 mr-2" />
    Sign in
  </button>
</form>

<FormMessage message={$message} status={$page.status} />
<!-- loading indicator -->
{#if $delayed}
  <div class="grid justify-center">
    <Chasing size="60" color="#F87171" unit="px" duration="1s" />
  </div>
{/if}
