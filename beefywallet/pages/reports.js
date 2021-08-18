import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import useStyles from "../useStyle";
import React from "react";
// import PieChart from "../src/components/ChartPage";
import ReportsComponent from "../src/components/ReportsComponent";
import PageHeader from "../src/components/PageHeader";
export default function Reports({ transactionsData }) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <React.Fragment>
      <PageHeader title="Reports" />
      <Grid container spacing={3}>
        <ReportsComponent transactionsData={transactionsData} />
      </Grid>
    </React.Fragment>
  );
}
