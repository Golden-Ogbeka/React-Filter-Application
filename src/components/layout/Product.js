import { CircularProgress } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import AppContext from '../../utils/AppContext';

function Product(props) {
	const { contextVariables } = React.useContext(AppContext);

	return contextVariables.loadingState ? (
		<CircularProgress />
	) : (
		<div style={{ height: 500, width: '100%' }}>
			<DataGrid
				rows={
					contextVariables.filteredProducts
						? contextVariables.filteredProducts.length > 0
							? contextVariables.filteredProducts
							: [{ id: 'Empty' }]
						: [{ id: 'Empty' }]
				}
				columns={[
					{ field: 'id', headerName: 'ID', width: 70 },
					{ field: 'title', headerName: 'Title', width: 200 },
					{ field: 'vendor', headerName: 'Vendor', width: 100 },
					{ field: 'price', headerName: 'Price ($)', width: 100 },
					{ field: 'tags', headerName: 'Tags', width: 150 },
					{ field: 'subscription', headerName: 'Subscription', width: 150 },
					{
						field: 'subscription_discount',
						headerName: 'Discount',
						width: 100,
					},
					{ field: 'option_value', headerName: 'Option value', width: 100 },
					{ field: 'url', headerName: 'Learn more', width: 600 },
				]}
				pageSize={8}
				rowsPerPageOptions={[8]}
			/>
		</div>
	);
}

export default Product;
