import { User } from "../user/User";
import { Event } from "../event/Event";

export type Recommendation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  relevanceScore: number | null;
  user?: User | null;
  event?: Event | null;
};
