import { InputJsonValue } from "../../types";
import { RecommendationCreateNestedManyWithoutUsersInput } from "./RecommendationCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  name?: string | null;
  preferences?: InputJsonValue;
  recommendations?: RecommendationCreateNestedManyWithoutUsersInput;
};
