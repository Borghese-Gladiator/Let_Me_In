import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// custom React Router link
import CustomLink from '../CustomLink';
// Navigation Menu (navbar && sidebar)
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Button, Typography } from '@material-ui/core';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#393e46'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    height: 50,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));
    

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const { logo } = props;
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          aria-label="saved menu routing"
          aria-controls="primary-search-saved-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <ExitToAppIcon />
        </IconButton>
        <p>Open Saved</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="static"
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>  
          <CustomLink to={"/"}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <img src={logo} className={classes.logo} alt="logo" />
            </IconButton>
          </CustomLink>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <CustomLink ariaLabel={`Link to favorites page`} to={'/signin'} style={{textDecoration: 'none'}}>
              <Button style={{color: 'inherit'}}>
                <Typography variant="button" display="block" gutterBottom>
                  Login
                </Typography>
                <ExitToAppIcon />
              </Button>
            </CustomLink>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
