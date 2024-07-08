import { SortOrder } from "../../util/SortOrder";

export type RecommendationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  relevanceScore?: SortOrder;
  userId?: SortOrder;
  eventId?: SortOrder;
};
