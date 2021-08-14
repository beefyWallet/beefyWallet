import BeefyWalletBody from "./BeefyWalletBody";
import BeefyWalletMain from "./BeefyWalletMain";
import React from "react";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import useStyles from "../../useStyle";

const BeefyWalletAdmin = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  return (
    <>
      <BeefyWalletBody>
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
        >
          <TopBar setOpen={setOpen} open={open} classes={classes} />
        </AppBar>

        <SideBar setOpen={setOpen} open={open} classes={classes} />
        <BeefyWalletMain>{children}</BeefyWalletMain>
      </BeefyWalletBody>
    </>
  );
};
export default BeefyWalletAdmin;
