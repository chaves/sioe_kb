import * as z from "zod"
import * as imports from "../null"
import { CompleteCallSubmission, RelatedCallSubmissionModel } from "./index"

export const CallFileModel = z.object({
  id: z.number().int(),
  call_submission_id: z.number().int(),
  file_name: z.string(),
  file_size: z.number().int(),
})

export interface CompleteCallFile extends z.infer<typeof CallFileModel> {
  call_submission: CompleteCallSubmission
}

/**
 * RelatedCallFileModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCallFileModel: z.ZodSchema<CompleteCallFile> = z.lazy(() => CallFileModel.extend({
  call_submission: RelatedCallSubmissionModel,
}))
