import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { EventTitle } from "../event/EventTitle";

export const RecommendationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="relevance_score" source="relevanceScore" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="event.id" reference="Event" label="Event">
          <SelectInput optionText={EventTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
