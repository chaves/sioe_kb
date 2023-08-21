import * as z from "zod"
import * as imports from "../null"
import { CompleteCallSubmission, RelatedCallSubmissionModel } from "./index"

export const CallDisciplineModel = z.object({
  id: z.number().int(),
  name: z.string(),
  order: z.number().int(),
})

export interface CompleteCallDiscipline extends z.infer<typeof CallDisciplineModel> {
  call_submissions: CompleteCallSubmission[]
}

/**
 * RelatedCallDisciplineModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCallDisciplineModel: z.ZodSchema<CompleteCallDiscipline> = z.lazy(() => CallDisciplineModel.extend({
  call_submissions: RelatedCallSubmissionModel.array(),
}))
