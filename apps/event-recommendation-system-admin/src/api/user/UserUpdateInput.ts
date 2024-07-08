import { InputJsonValue } from "../../types";
import { RecommendationUpdateManyWithoutUsersInput } from "./RecommendationUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  name?: string | null;
  preferences?: InputJsonValue;
  recommendations?: RecommendationUpdateManyWithoutUsersInput;
};
