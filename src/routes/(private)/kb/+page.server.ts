import type { PageServerLoad } from './$types';
import { prismaClient} from '$lib/utilis/prismaClient';


export const load = (async () => {
  const users = await prismaClient.user.findMany();
  return {users};
}) satisfies PageServerLoad;
