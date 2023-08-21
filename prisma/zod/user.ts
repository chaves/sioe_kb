import * as z from "zod"
import * as imports from "../null"
import { CompleteProfile, RelatedProfileModel, CompleteDocument, RelatedDocumentModel, CompleteCallSubmission, RelatedCallSubmissionModel, CompleteMembership, RelatedMembershipModel, CompletePayment, RelatedPaymentModel, CompleteRegistration, RelatedRegistrationModel, CompleteReviewer, RelatedReviewerModel } from "./index"

export const UserModel = z.object({
  id: z.string(),
  email: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  profile?: CompleteProfile | null
  Document: CompleteDocument[]
  CallSubmission: CompleteCallSubmission[]
  Membership: CompleteMembership[]
  Payment: CompletePayment[]
  Registration: CompleteRegistration[]
  Reviewer?: CompleteReviewer | null
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() => UserModel.extend({
  profile: RelatedProfileModel.nullish(),
  Document: RelatedDocumentModel.array(),
  CallSubmission: RelatedCallSubmissionModel.array(),
  Membership: RelatedMembershipModel.array(),
  Payment: RelatedPaymentModel.array(),
  Registration: RelatedRegistrationModel.array(),
  Reviewer: RelatedReviewerModel.nullish(),
}))
