import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type RecommendationCreateInput = {
  relevanceScore?: number | null;
  user?: UserWhereUniqueInput | null;
  event?: EventWhereUniqueInput | null;
};
