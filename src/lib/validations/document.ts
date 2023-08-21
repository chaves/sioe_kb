import * as z from "zod"

export const DocumentModel = z.object({
  title: z.string().nonempty({ message: 'The title field is required' }),
  description: z.string().nonempty({ message: 'The description field is required' }),
})
