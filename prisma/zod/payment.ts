import * as z from "zod"
import * as imports from "../null"
import { CompleteUser, RelatedUserModel, CompleteMembership, RelatedMembershipModel, CompleteRegistration, RelatedRegistrationModel } from "./index"

export const PaymentModel = z.object({
  id: z.number().int(),
  user_id: z.string(),
  payer_id: z.string(),
  payer_email: z.string(),
  amount: z.string(),
  currency: z.string(),
  payment_status: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
})

export interface CompletePayment extends z.infer<typeof PaymentModel> {
  user: CompleteUser
  membership: CompleteMembership[]
  registration: CompleteRegistration[]
}

/**
 * RelatedPaymentModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPaymentModel: z.ZodSchema<CompletePayment> = z.lazy(() => PaymentModel.extend({
  user: RelatedUserModel,
  membership: RelatedMembershipModel.array(),
  registration: RelatedRegistrationModel.array(),
}))
