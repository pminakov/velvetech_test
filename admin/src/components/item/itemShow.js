import React from 'react';
import { TextField, NumberField, ChipField, SimpleShowLayout, DateField, Show } from 'react-admin';

export const ItemShow = props => (
	<Show {...props}>
		<SimpleShowLayout>
			<TextField source="id"/>
			<TextField source="name" />
			<NumberField source="price" />
			<DateField source="expires" />
			<ChipField source="CatalogCategory.name" label={"Category"}/>
		</SimpleShowLayout>
	</Show>
);