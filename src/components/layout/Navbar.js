import { AppBar, IconButton, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import logo from '../../logo.svg';
import React from 'react';
import { Menu as MenuIcon } from '@mui/icons-material';
import AppContext from '../../utils/AppContext';

function Navbar() {
	const { contextVariables, setContextVariables } =
		React.useContext(AppContext);

	const handleDrawerToggle = () => {
		setContextVariables({
			...contextVariables,
			sidebarMobile: !contextVariables.sidebarMobile,
		});
	};
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position='fixed'
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
			>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}
					>
						<img
							src={logo}
							className='App-logo'
							alt='logo'
							width='30px'
							height='30px'
						/>
					</IconButton>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</Box>
	);
}

export default Navbar;
