<script lang="ts">
  import type { PageData } from "./$types";

  import Breadcrumb from "$lib/ui/BreadcrumbSolo.svelte";

  import { Edit } from "lucide-svelte";
  import { Button } from "flowbite-svelte";

  export let data: PageData;
  let profile = data.user.profile;
</script>

<Breadcrumb title="Your profile" />

<div class="flex justify-between items-center">

	<div>
<ul>
	<li>
		<strong>First name</strong>: {profile.first_name}
	</li>
	<li>
		<strong>Last name</strong>: {profile.last_name}
	</li>
	<li>
		<strong>University</strong>: {profile.university}
	</li>
	<li>
		<strong>Country</strong>: {profile.country.name}
	</li>
	<li>
		<strong>Role</strong>: {profile.role}
	</li>
  </ul>

  <Button class="mt-6" href="/profile/edit" color="blue">
	<Edit class="mr-3 w-5 h-5" /> Edit your details
  </Button>
</div>


<img class="rounded-full w-32" src="/assets/images/IMG_2920_carre.jpg" alt="user" />

</div>
