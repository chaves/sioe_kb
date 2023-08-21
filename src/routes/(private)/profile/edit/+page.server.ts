import { profileSchema } from '$lib/validations/zodShemas';
import type { PageServerLoad, Actions } from "./$types";
import { prismaClient } from "$lib/utilis/prismaClient";
import { fail, redirect } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms/server';

export const load: PageServerLoad = (async ({ locals }) => {
  const session = await locals.getSession();
  if (!session) {
    throw redirect(302, '/auth');
  } else {
    const user = await prismaClient.user.findFirst({
        where: { id: session.user.id },
        include: {
          profile: true,
        },
      });
    const countries = await prismaClient.country.findMany({orderBy: [ { name: 'desc'}]});
    const profileForm = await superValidate(profileSchema);
    return { session, user, countries, profileForm };
  }
});


export const actions: Actions = {
	default: async ({ request, locals }) => {

		const profileForm = await superValidate(request, profileSchema);

		// Validate form
		if (!profileForm.valid) {
			return message(profileForm, 'Invalid form');
		}

    const session = await locals.getSession();

		const { first_name, last_name, university, country_code } = profileForm.data as Record<string, string>;

    const upsertUser = await prismaClient.profile.upsert({
      where: {
        user_id: session.user.id,
      },
      update: {
        first_name: first_name,
        last_name: last_name,
        university: university,
        country_code: country_code
      },
      create: {
        user_id: session.user.id,
        first_name: first_name,
        last_name: last_name,
        university: university,
        country_code: country_code
      },
    });
    throw redirect(303, '/profile');
  }
};