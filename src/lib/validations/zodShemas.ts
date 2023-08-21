import { z } from 'zod';

export const documentSchema = z.object({
  title: z.string().nonempty({ message: 'The title field is required' }),
  description: z.string().nonempty({ message: 'The description field is required' }),
})

export const emailSchema = z.object({
	email: z
		.string({ required_error: 'Email is required' })
		.email({ message: 'Email must be a valid email address' }),
});

// export type LoginSchema = typeof loginSchema;


export const profileSchema = z.object({
  first_name: z.string().nonempty({ message: 'First name field is required' }),
  last_name: z.string().nonempty({ message: 'Last name field is required' }),
  university: z.string().nonempty({ message: 'University field is required' }),
  country_code: z.string().nonempty({ message: 'Country field is required' })
})
export type profileSchema = typeof profileSchema;