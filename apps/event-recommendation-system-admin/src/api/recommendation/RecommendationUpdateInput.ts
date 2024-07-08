import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type RecommendationUpdateInput = {
  relevanceScore?: number | null;
  user?: UserWhereUniqueInput | null;
  event?: EventWhereUniqueInput | null;
};
