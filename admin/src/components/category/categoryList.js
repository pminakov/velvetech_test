import React from 'react';
import { List, Datagrid, TextField, } from 'react-admin';

export const CategoryList = props => (
	<List {...props}>
		<Datagrid rowClick="show">
			<TextField source="name"/>
		</Datagrid>
	</List>
);