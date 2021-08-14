import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import clsx from "clsx";
import React from "react";

import useMediaQuery from "@material-ui/core/useMediaQuery";

const TopBar = ({ open, setOpen, classes }) => {
  // const [theme, setTheme] = React.useState('light')
  // const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${theme})`)

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  return (
    <Toolbar className={classes.toolbar}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        className={classes.title}
      >
        Mr.Uknown
      </Typography>
      <IconButton color="inherit">
        {/* <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge> */}
        <Badge color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <IconButton color="inherit">
        <Brightness3Icon />
      </IconButton>
    </Toolbar>
  );
};

export default TopBar;
