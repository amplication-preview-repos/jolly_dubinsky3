import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type RecommendationWhereInput = {
  id?: StringFilter;
  relevanceScore?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
  event?: EventWhereUniqueInput;
};
