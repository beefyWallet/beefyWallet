import React from "react";
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
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import NotificationMenuAds from "./NotificationMenuAds";
import PdfGemerator from "./ConvertToPdf";

import clsx from "clsx";

const TopBar = ({ open, setOpen, classes, setThemeMode }) => {
  const { isLoading, moneySourceData, quotesData } = useContext(ApiDataContext);
  const [state, setState] = React.useState({
    open1: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open1 } = state;

  const handleClick = (newState) => () => {
    setState({ open1: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open1: false });
  };
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
  function randomNumber() {
    if (!isLoading) {
      let quoteLength = quotesData.length;
      let min = 0;
      let max = Math.floor(quoteLength);
      let rand = Math.floor(Math.random() * (max - min) + min);
      return quotesData[rand].quote;
    }
  }
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
        {!isLoading && moneySourceData.length != 0
          ? "Hi " +
            moneySourceData[0].author.username[0].toUpperCase() +
            moneySourceData[0].author.username.slice(1)
          : "Getting your Data"}
      </Typography>
      <Button
        disableElevation
        variant="contained"
        style={{
          marginRight: 10,
        }}
        onClick={handleClick({ vertical: "bottom", horizontal: "right" })}
      >
        Advice?
      </Button>
      <PdfGemerator />
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open1}
        onClose={handleClose}
        message={isLoading ? null : randomNumber()}
        key={vertical + horizontal}
      />
      <IconButton color="inherit">
        <Badge color="secondary">
          {/* <Badge badgeContent={4} color="secondary"> */}
          {/* <NotificationsIcon /> */}
          <NotificationMenuAds />
        </Badge>
      </IconButton>

      <IconButton color="inherit" onClick={changeThemeHandler}>
        {theme ? <Brightness3Icon /> : <WbSunnySharpIcon />}
      </IconButton>
    </Toolbar>
  );
};

export default TopBar;
