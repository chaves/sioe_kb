import type { PageServerLoad, Actions } from "./$types";
import { prismaClient } from "$lib/utilis/prismaClient";
import { fail, redirect, type ServerLoad } from '@sveltejs/kit';

export const load = (async ({ locals }) => {
  const session = await locals.getSession();
  if (!session) {
    throw redirect(302, '/auth');
  } else {
    const user = await prismaClient.user.findFirst({
        where: { id: session.user.id },
        include: {
          profile: {
            include: {
              country: true,
            }
          },
        },
      });
    if (!user?.profile) {
      throw redirect(302, '/profile/edit');
    }
    return { session, user };
  }
}) satisfies PageServerLoad;
