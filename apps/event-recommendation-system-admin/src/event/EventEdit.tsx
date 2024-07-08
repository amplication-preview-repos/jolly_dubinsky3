import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  SelectArrayInput,
  NumberInput,
  ReferenceArrayInput,
} from "react-admin";

import { RecommendationTitle } from "../recommendation/RecommendationTitle";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="date" source="date" />
        <TextInput label="location" source="location" />
        <SelectArrayInput
          label="categories"
          source="categories"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="popularity" source="popularity" />
        <ReferenceArrayInput
          source="recommendations"
          reference="Recommendation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RecommendationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
