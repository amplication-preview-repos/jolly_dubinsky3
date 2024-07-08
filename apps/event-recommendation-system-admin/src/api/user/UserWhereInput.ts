import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { RecommendationListRelationFilter } from "../recommendation/RecommendationListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  name?: StringNullableFilter;
  preferences?: JsonFilter;
  recommendations?: RecommendationListRelationFilter;
};
