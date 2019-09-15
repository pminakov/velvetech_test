import React from 'react';
import { TextField, SimpleShowLayout, Show } from 'react-admin';

export const CategoryShow = props => (
	<Show {...props}>
		<SimpleShowLayout>
			<TextField source="id" />
			<TextField source="name" />
		</SimpleShowLayout>
	</Show>
);