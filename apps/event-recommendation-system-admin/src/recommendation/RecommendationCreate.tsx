import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { EventTitle } from "../event/EventTitle";

export const RecommendationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="relevance_score" source="relevanceScore" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="event.id" reference="Event" label="Event">
          <SelectInput optionText={EventTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
