import {
	Divider,
	Drawer,
	List,
	TextField,
	Toolbar,
	Radio,
	RadioGroup,
	FormControlLabel,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AppContext from '../../utils/AppContext';

function Sidebar() {
	const { contextVariables, setContextVariables } =
		React.useContext(AppContext);

	const filterByTag = (e) => {
		if (e.target.value.length === 0) {
			return setContextVariables({
				...contextVariables,
				filteredProducts: contextVariables.products,
			});
		}
		return setContextVariables({
			...contextVariables,
			filteredProducts: contextVariables.products.filter((product) =>
				product.tags.includes(e.target.value)
			),
		});
	};
	const filterByPrice = (e) => {
		if (e.target.value.length === 0) {
			return setContextVariables({
				...contextVariables,
				filteredProducts: contextVariables.products,
			});
		}

		return setContextVariables({
			...contextVariables,
			filteredProducts: contextVariables.products.filter(
				(product) =>
					Math.ceil(product.price) === Number(e.target.value) ||
					product.price === Number(e.target.value)
			),
		});
	};
	const filterBySubscription = (value) => {
		if (value === true) {
			return setContextVariables({
				...contextVariables,
				filteredProducts: contextVariables.products.filter(
					(product) => product.subscription !== true
				),
			});
		}
		return setContextVariables({
			...contextVariables,
			filteredProducts: contextVariables.products,
		});
	};

	const handleDrawerToggle = () => {
		setContextVariables({
			...contextVariables,
			sidebarMobile: !contextVariables.sidebarMobile,
		});
	};

	return (
		<>
			<Toolbar />
			<Drawer
				variant='permanent'
				sx={{
					width: 240,
					display: { xs: 'none', sm: 'block' },
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: {
						width: 240,
						boxSizing: 'border-box',
					},
				}}
			>
				<Toolbar />

				<List
					style={{
						color: '#2A2E43B3',
						fontWeight: 'bold',
						fontSize: 14,
						fontFamily: 'Sora',
					}}
				>
					<center>
						<h4>Filters</h4>
					</center>
					<Divider />
					<Box
						style={{
							marginBottom: 20,
							paddingInline: 10,
						}}
					>
						<h3>Filter by tag</h3>
						<TextField
							label='Product Tag'
							variant='outlined'
							placeholder='Enter product tag'
							onChange={(e) => filterByTag(e)}
						/>
					</Box>

					<Divider />
					<Box
						style={{
							paddingInline: 10,
							marginBottom: 20,
						}}
					>
						<h3>Filter by price</h3>
						<TextField
							label='Product Price'
							variant='outlined'
							placeholder='Enter product price'
							onChange={(e) => filterByPrice(e)}
						/>
					</Box>
					<Divider />
					<Box
						style={{
							paddingInline: 10,
							marginBottom: 20,
						}}
					>
						<h3>Filter by subscription</h3>
						<RadioGroup name='radio-buttons-group'>
							<FormControlLabel
								value={true}
								control={<Radio />}
								label='Yes'
								onChange={() => filterBySubscription(true)}
							/>
							<FormControlLabel
								value={false}
								control={<Radio />}
								label='No'
								onChange={() => filterBySubscription(false)}
							/>
						</RadioGroup>
					</Box>
				</List>
			</Drawer>
			<Drawer
				// container={container}
				variant='temporary'
				open={contextVariables.sidebarMobile}
				onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
				sx={{
					display: { xs: 'block', sm: 'none' },
					'& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
				}}
			>
				<Toolbar />

				<List
					style={{
						color: '#2A2E43B3',
						fontWeight: 'bold',
						fontSize: 14,
						fontFamily: 'Sora',
					}}
				>
					<center>
						<h4>Filters</h4>
					</center>
					<Divider />
					<Box
						style={{
							marginBottom: 20,
							paddingInline: 10,
						}}
					>
						<h3>Filter by tag</h3>
						<TextField
							label='Product Tag'
							variant='outlined'
							placeholder='Enter product tag'
							onChange={(e) => filterByTag(e)}
						/>
					</Box>

					<Divider />
					<Box
						style={{
							paddingInline: 10,
							marginBottom: 20,
						}}
					>
						<h3>Filter by price</h3>
						<TextField
							label='Product Price'
							variant='outlined'
							placeholder='Enter product price'
							onChange={(e) => filterByPrice(e)}
						/>
					</Box>
					<Divider />
					<Box
						style={{
							paddingInline: 10,
							marginBottom: 20,
						}}
					>
						<h3>Filter by subscription</h3>
						<RadioGroup name='radio-buttons-group'>
							<FormControlLabel
								value={true}
								control={<Radio />}
								label='Yes'
								onChange={() => filterBySubscription(true)}
							/>
							<FormControlLabel
								value={false}
								control={<Radio />}
								label='No'
								onChange={() => filterBySubscription(false)}
							/>
						</RadioGroup>
					</Box>
				</List>
			</Drawer>
		</>
	);
}

export default Sidebar;
