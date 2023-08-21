import * as z from "zod"
import * as imports from "../null"
import { CompleteUser, RelatedUserModel } from "./index"

export const DocumentModel = z.object({
  id: z.number().int(),
  user_id: z.string(),
  title: z.string(),
  description: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
})

export interface CompleteDocument extends z.infer<typeof DocumentModel> {
  user: CompleteUser
}

/**
 * RelatedDocumentModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedDocumentModel: z.ZodSchema<CompleteDocument> = z.lazy(() => DocumentModel.extend({
  user: RelatedUserModel,
}))
