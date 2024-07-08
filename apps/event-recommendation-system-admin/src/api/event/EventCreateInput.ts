import { RecommendationCreateNestedManyWithoutEventsInput } from "./RecommendationCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  title?: string | null;
  description?: string | null;
  date?: Date | null;
  location?: string | null;
  categories?: Array<"Option1">;
  popularity?: number | null;
  recommendations?: RecommendationCreateNestedManyWithoutEventsInput;
};
