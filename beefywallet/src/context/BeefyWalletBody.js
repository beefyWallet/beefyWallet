import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import useStyles from "../../useStyle";

export default function BeefyWalletBody({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      {children}
    </div>
  );
}
