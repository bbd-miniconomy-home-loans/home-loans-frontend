import * as React from 'react';

import { Outlet, Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { Variables } from './variables';

import { Logo } from '../components';
import { Pages } from '../common/constants';

const settings = ['Logout'];

function NavigationBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenMenu = (setter) => (event) => {

    setter(event.currentTarget);
  };

  const handleCloseMenu = (setter) => () => {

    setter(null);
  };

  const RenderPageLinks = () => {

    return (
      Pages.map((page) => (
        <Button
          key={page.id}
          to={page.link}
          component={Link}
          onClick={handleCloseMenu(setAnchorElNav)}
          sx={{ my: 2, color: Variables.darkColor, display: 'block' }}
        >
          {page.name}
        </Button>
      ))
    );
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl" sx={{ bgcolor: Variables.lightColor, width: '100vw', color: Variables.darkColor }}>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>

            {/* Mobile Menu */}
            <Logo />
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenMenu(setAnchorElNav)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseMenu(setAnchorElNav)}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {RenderPageLinks()}
              </Menu>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {RenderPageLinks()}
            </Box>

            <Box sx={{ flexGrow: 0 }}>

              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenMenu(setAnchorElUser)} sx={{ p: 0 }}>
                  <Avatar alt="profile image" src="" />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseMenu(setAnchorElUser)}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseMenu(setAnchorElUser)}>
                    <Typography>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Outlet />
    </>
  );
}
export default NavigationBar;
