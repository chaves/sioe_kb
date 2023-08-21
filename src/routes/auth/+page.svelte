<!-- // src/routes/auth/+page.svelte -->
<script lang="ts">
  import type { PageData } from "./$types";

  import Breadcrumb from "$lib/ui/BreadcrumbSolo.svelte";
  import LoginForm from "$lib/components/forms/LoginForm.svelte";
  import OAuthLogin from "$lib/components/forms/OAuthLogin.svelte";

  import { Lightbulb } from "lucide-svelte";

  export let data: PageData;

  $: ({ supabase, redirectTo } = data);
</script>

<svelte:head>
  <title>SIOE - Login</title>
</svelte:head>

<Breadcrumb title="Sign in your user's account" />

<br />

<div class="box block">
  <!-- Default form -->
  <p>Sign in with a “magic” link:</p>
  <LoginForm data={data.form} redirectTo={redirectTo ?? ""} />
  <!-- Ouath alternatives -->
  <p class="mt-3">Or sign in with:</p>
  <OAuthLogin {supabase} />
</div>

<style>
  p {
    @apply text-center;
  }

  .box {
    @apply m-auto max-w-sm -mt-6 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700;
  }
</style>
