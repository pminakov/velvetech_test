import React from 'react';
import { TextInput, SimpleForm, Edit } from 'react-admin';

export const CategoryEdit = props => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput source="id" disabled={true}/>
			<TextInput source="name" />
		</SimpleForm>
	</Edit>
);