import React from 'react';
import { TextInput, NumberInput, SimpleForm, DateTimeInput, Create, ReferenceInput, SelectInput } from 'react-admin';
import {validateExpires, validateName, validatePrice} from "./validators";

export const ItemCreate = props => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="name" validate={validateName}/>
			<NumberInput source="price" validate={validatePrice}/>
			<DateTimeInput source="expires" validate={validateExpires}/>
			<ReferenceInput source="categoryId" reference="categories">
				<SelectInput optionText="name" />
			</ReferenceInput>
		</SimpleForm>
	</Create>
);