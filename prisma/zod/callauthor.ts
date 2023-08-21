import * as z from "zod"
import * as imports from "../null"
import { CompleteCallSubmission, RelatedCallSubmissionModel } from "./index"

export const CallAuthorModel = z.object({
  id: z.number().int(),
  first_name: z.string(),
  last_name: z.string(),
  university: z.string(),
  presenter: z.boolean(),
  order: z.string(),
  call_submission_id: z.number().int(),
})

export interface CompleteCallAuthor extends z.infer<typeof CallAuthorModel> {
  call_submission: CompleteCallSubmission
}

/**
 * RelatedCallAuthorModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCallAuthorModel: z.ZodSchema<CompleteCallAuthor> = z.lazy(() => CallAuthorModel.extend({
  call_submission: RelatedCallSubmissionModel,
}))
