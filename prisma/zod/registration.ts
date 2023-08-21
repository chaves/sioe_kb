import * as z from "zod"
import * as imports from "../null"
import { CompleteUser, RelatedUserModel, CompletePayment, RelatedPaymentModel } from "./index"

export const RegistrationModel = z.object({
  id: z.number().int(),
  user_id: z.string(),
  payment_id: z.number().int().nullish(),
  year: z.number().int(),
  paid: z.boolean(),
  gala: z.boolean(),
  guest_name: z.string(),
  guest_dietary: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
})

export interface CompleteRegistration extends z.infer<typeof RegistrationModel> {
  user: CompleteUser
  payment?: CompletePayment | null
}

/**
 * RelatedRegistrationModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedRegistrationModel: z.ZodSchema<CompleteRegistration> = z.lazy(() => RegistrationModel.extend({
  user: RelatedUserModel,
  payment: RelatedPaymentModel.nullish(),
}))
