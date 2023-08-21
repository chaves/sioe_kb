import * as z from "zod"
import * as imports from "../null"
import { Role } from "@prisma/client"
import { CompleteUser, RelatedUserModel, CompleteCountry, RelatedCountryModel } from "./index"

export const ProfileModel = z.object({
  id: z.number().int(),
  user_id: z.string(),
  role: z.nativeEnum(Role),
  first_name: z.string(),
  last_name: z.string(),
  university: z.string(),
  picture: z.string(),
  badge_name: z.string(),
  badge_affiliation: z.string(),
  special_food: z.string(),
  special_other: z.string(),
  homepage: z.string(),
  photo: z.string(),
  bio: z.string(),
  publications: z.string(),
  country_code: z.string().nullish(),
  created_at: z.date(),
  updated_at: z.date(),
})

export interface CompleteProfile extends z.infer<typeof ProfileModel> {
  user: CompleteUser
  country?: CompleteCountry | null
}

/**
 * RelatedProfileModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProfileModel: z.ZodSchema<CompleteProfile> = z.lazy(() => ProfileModel.extend({
  user: RelatedUserModel,
  country: RelatedCountryModel.nullish(),
}))
