import React from 'react';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

export const Dashboard = () => (
	<Card>
		<CardContent>
			<Typography gutterBottom variant="h5" component="h1">Catalog.Admin application</Typography>
			<Typography component="p">Welcome</Typography>
		</CardContent>
	</Card>
);

export default Dashboard;

