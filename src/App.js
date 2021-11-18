import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import { Toolbar } from '@mui/material';
import Product from './components/layout/Product';
import React from 'react';
import { Box } from '@mui/system';
import AppContext from './utils/AppContext';

function App() {
	const [contextVariables, setContextVariables] = React.useState({
		products: [],
		filteredProducts: [],
		loadingState: true,
		sidebarMobile: false,
		// theme
	});

	React.useEffect(() => {
		const getProducts = async () => {
			try {
				const response = await axios.get(
					'https://react-filter-app-by-golden.web.app:3000/products' //instead of localhost
				);

				setContextVariables({
					...contextVariables,
					products: response.data,
					filteredProducts: response.data,
					loadingState: false,
				});
			} catch (error) {
				setContextVariables({
					...contextVariables,
					products: [],
					filteredProducts: [],
					loadingState: false,
				});
			}
		};
		getProducts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<AppContext.Provider value={{ contextVariables, setContextVariables }}>
			<Navbar />
			<Box
				style={{
					display: 'flex',
				}}
			>
				<Box>
					<Sidebar />
				</Box>
				<Box
					style={{
						width: '100%',
					}}
					sx={{
						paddingInline: { sm: '20px' },
					}}
				>
					<h1>Products</h1>
					<Box>
						<Product />
					</Box>
					<Toolbar />
				</Box>
			</Box>
		</AppContext.Provider>
	);
}

export default App;
