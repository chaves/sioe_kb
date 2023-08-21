import * as z from "zod"
import * as imports from "../null"
import { MembershipType } from "@prisma/client"
import { CompleteUser, RelatedUserModel, CompletePayment, RelatedPaymentModel } from "./index"

export const MembershipModel = z.object({
  id: z.number().int(),
  user_id: z.string(),
  payment_id: z.number().int().nullish(),
  year_start: z.number().int(),
  year_end: z.number().int(),
  type: z.nativeEnum(MembershipType),
  created_at: z.date(),
  updated_at: z.date(),
})

export interface CompleteMembership extends z.infer<typeof MembershipModel> {
  user: CompleteUser
  payment?: CompletePayment | null
}

/**
 * RelatedMembershipModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedMembershipModel: z.ZodSchema<CompleteMembership> = z.lazy(() => MembershipModel.extend({
  user: RelatedUserModel,
  payment: RelatedPaymentModel.nullish(),
}))
