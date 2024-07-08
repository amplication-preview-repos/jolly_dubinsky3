import { Recommendation } from "../recommendation/Recommendation";

export type Event = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  date: Date | null;
  location: string | null;
  categories?: Array<"Option1">;
  popularity: number | null;
  recommendations?: Array<Recommendation>;
};
