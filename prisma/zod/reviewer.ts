import * as z from "zod"
import * as imports from "../null"
import { CompleteUser, RelatedUserModel } from "./index"

export const ReviewerModel = z.object({
  id: z.number().int(),
  user_id: z.string(),
  pc: z.boolean(),
})

export interface CompleteReviewer extends z.infer<typeof ReviewerModel> {
  user: CompleteUser
}

/**
 * RelatedReviewerModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedReviewerModel: z.ZodSchema<CompleteReviewer> = z.lazy(() => ReviewerModel.extend({
  user: RelatedUserModel,
}))
