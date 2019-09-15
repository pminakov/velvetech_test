import React from 'react';
import { List, Datagrid, TextField, NumberField, DateField, ChipField } from 'react-admin';


export const ItemList = props => (
	<List {...props}>
		<Datagrid rowClick="show">
			{/*<TextField source="id" />*/}
			<TextField source="name" />
			<NumberField source="price" />
			<DateField source="expires" />
			<ChipField source="CatalogCategory.name" label={"Category"}/>
		</Datagrid>
	</List>
);