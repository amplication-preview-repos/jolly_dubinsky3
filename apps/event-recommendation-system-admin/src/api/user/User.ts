import { JsonValue } from "type-fest";
import { Recommendation } from "../recommendation/Recommendation";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  name: string | null;
  preferences: JsonValue;
  recommendations?: Array<Recommendation>;
};
