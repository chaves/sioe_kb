import type { PageServerLoad, Actions } from "./$types";
import { fail, redirect } from '@sveltejs/kit';
import { prismaClient } from "$lib/utilis/prismaClient";
import { superValidate, message } from 'sveltekit-superforms/server';
import { DocumentModel } from '$lib/validations/document';

export const load = (async ({ locals }) => {
  const session = await locals.getSession();
  if (!session) {
    return { session: null, user: null };
  } else {
    const user = await prismaClient.user.findFirst({
        where: { id: session.user.id },
      });
    return { session, user };
  }
}) satisfies PageServerLoad;

export const actions: Actions = {
	add: async ({ request, locals }) => {

		const form = await superValidate(request, DocumentModel);

        console.log(form);

		if (!form.valid) {
			return fail(400, { form });
		}
		try {
            const session = await locals.getSession();
			const document = await prismaClient.document.create({
				data: {
					title: form.data.title,
					description: form.data.description,
					user_id: session.user.id
				}
			});
            console.log(document);
			return { form, document };
		} catch (e) {
			console.log(e);
			return message(form, 'An unknown error occurred.');
		}
	}
};
