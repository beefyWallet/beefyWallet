import BeefyWalletAdmin from "../../src/context/BeefyWalletAdmin";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import useStyles from "../../useStyle";
import React from "react";
import SignInSide from "../login";

export default function Reports() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.initiallyHeight}>
            <h1 className="text-2xl">Reports</h1>
          </Paper>
          <div>
            <SignInSide />
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
Reports.Layout = BeefyWalletAdmin;
