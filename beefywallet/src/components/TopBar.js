import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import WbSunnySharpIcon from "@material-ui/icons/WbSunnySharp";
import { useContext, useState } from "react";
import { ApiDataContext } from "../context/apiData";

import clsx from "clsx";
import React from "react";

const TopBar = ({ open, setOpen, classes, setThemeMode }) => {
  const [theme, setTheme] = React.useState(true);
  const changeThemeHandler = () => {
    if (theme) {
      setThemeMode("light");
      setTheme(false);
    } else {
      setThemeMode("Dark");
      setTheme(true);
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const { isLoading, moneySourceData } = useContext(ApiDataContext);
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
        {isLoading
          ? "Getting your Data"
          : "Hi " +
            moneySourceData[0].author.username[0].toUpperCase() +
            moneySourceData[0].author.username.slice(1)}
      </Typography>
      <IconButton color="inherit">
        <Badge color="secondary">
          {/* <Badge badgeContent={4} color="secondary"> */}
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <IconButton color="inherit" onClick={changeThemeHandler}>
        {theme ? <Brightness3Icon /> : <WbSunnySharpIcon />}
      </IconButton>
    </Toolbar>
  );
};

export default TopBar;
