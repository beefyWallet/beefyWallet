import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import useStyles from "../useStyle";
import React from "react";
// import PieChart from "../src/components/ChartPage";
import ReportsComponent from "../src/components/ReportsComponent";
export default function Reports({ transactionsData }) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.initiallyHeight}>
            <h1 className="text-2xl">Reports</h1>
          </Paper>
        </Grid>
        <ReportsComponent transactionsData={transactionsData} />
      </Grid>
    </React.Fragment>
  );
}
