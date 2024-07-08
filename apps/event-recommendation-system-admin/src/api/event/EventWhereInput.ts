import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RecommendationListRelationFilter } from "../recommendation/RecommendationListRelationFilter";

export type EventWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  location?: StringNullableFilter;
  popularity?: IntNullableFilter;
  recommendations?: RecommendationListRelationFilter;
};
