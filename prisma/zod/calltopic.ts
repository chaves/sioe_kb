import * as z from "zod"
import * as imports from "../null"
import { CompleteCallSubmission, RelatedCallSubmissionModel } from "./index"

export const CallTopicModel = z.object({
  id: z.number().int(),
  name: z.string(),
  order: z.number().int(),
})

export interface CompleteCallTopic extends z.infer<typeof CallTopicModel> {
  call_submissions: CompleteCallSubmission[]
}

/**
 * RelatedCallTopicModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCallTopicModel: z.ZodSchema<CompleteCallTopic> = z.lazy(() => CallTopicModel.extend({
  call_submissions: RelatedCallSubmissionModel.array(),
}))
