import * as z from "zod"
import * as imports from "../null"
import { CompleteProfile, RelatedProfileModel } from "./index"

export const CountryModel = z.object({
  code: z.string(),
  name: z.string(),
})

export interface CompleteCountry extends z.infer<typeof CountryModel> {
  user: CompleteProfile[]
}

/**
 * RelatedCountryModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCountryModel: z.ZodSchema<CompleteCountry> = z.lazy(() => CountryModel.extend({
  user: RelatedProfileModel.array(),
}))
