import { RecommendationUpdateManyWithoutEventsInput } from "./RecommendationUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  title?: string | null;
  description?: string | null;
  date?: Date | null;
  location?: string | null;
  categories?: Array<"Option1">;
  popularity?: number | null;
  recommendations?: RecommendationUpdateManyWithoutEventsInput;
};
