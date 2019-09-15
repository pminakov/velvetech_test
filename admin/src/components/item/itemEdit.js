import React from 'react';
import { TextInput, NumberInput, SimpleForm, DateTimeInput, Edit, ReferenceInput, SelectInput } from 'react-admin';
import {validateExpires, validateName, validatePrice} from "./validators";

export const ItemEdit = props => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput source="id" disabled={true}/>
			<TextInput source="name" validate={validateName}/>
			<NumberInput source="price" validate={validatePrice}/>
			<DateTimeInput source="expires" validate={validateExpires}/>
			<ReferenceInput source="categoryId" reference="categories">
				<SelectInput optionText="name" />
			</ReferenceInput>
		</SimpleForm>
	</Edit>
);