import * as z from "zod"
import * as imports from "../null"
import { CompleteUser, RelatedUserModel, CompleteCallDiscipline, RelatedCallDisciplineModel, CompleteCallTopic, RelatedCallTopicModel, CompleteCallAuthor, RelatedCallAuthorModel, CompleteCallFile, RelatedCallFileModel } from "./index"

export const CallSubmissionModel = z.object({
  id: z.number().int(),
  user_id: z.string(),
  title: z.string(),
  abstract: z.string(),
  call_discipline_id: z.number().int(),
  call_topic_id: z.number().int(),
  accepted: z.boolean(),
  notified: z.boolean(),
  canceled: z.boolean(),
  publish: z.boolean(),
  comment: z.string().nullish(),
  notes: z.string().nullish(),
  created_at: z.date(),
  updated_at: z.date(),
})

export interface CompleteCallSubmission extends z.infer<typeof CallSubmissionModel> {
  user: CompleteUser
  discipline?: CompleteCallDiscipline | null
  topic?: CompleteCallTopic | null
  CallAuthor: CompleteCallAuthor[]
  CallFile: CompleteCallFile[]
}

/**
 * RelatedCallSubmissionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCallSubmissionModel: z.ZodSchema<CompleteCallSubmission> = z.lazy(() => CallSubmissionModel.extend({
  user: RelatedUserModel,
  discipline: RelatedCallDisciplineModel.nullish(),
  topic: RelatedCallTopicModel.nullish(),
  CallAuthor: RelatedCallAuthorModel.array(),
  CallFile: RelatedCallFileModel.array(),
}))
