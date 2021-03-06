import clsx from "clsx";
import useStyles from "../../useStyle";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chart from "../../src/components/Chart";
import Total from "../../src/components/Total";
import Reports from "../../src/components/Reports";
import React, { useContext } from "react";
import MoneySources from "../../src/components/MoneySources";
import { ApiDataContext } from "../../src/context/apiData";
import AddTransactionForm from "../../src/components/AddTransactionForm";
import ReportsDashboard from "../../src/components/ReportDashboard";
import PieChart from "../../src/components/Chart";
import MoneySourceChart from "../../src/components/MoneySourceChart";
import { Typography } from "@material-ui/core";
import PageHeader from "../../src/components/PageHeader";

export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const { isLoading, moneySourceData, transactionsData } =
    useContext(ApiDataContext);
  if (isLoading) {
    return <div className={classes.loading}>Loading...</div>;
  }
  return (
    <React.Fragment>
      <PageHeader title="Dashboard" />

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MoneySources moneySourceData={moneySourceData} />
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
          <Paper className={classes.initiallyHeight}>
            <Typography> Transactions Structure</Typography>
            <PieChart />
          </Paper>
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
          <Paper className={classes.initiallyHeight}>
            <Typography>Money Sources Structure</Typography>
            <MoneySourceChart />
          </Paper>
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
          <Paper className={fixedHeightPaper}>
            <Total moneySourceData={moneySourceData} />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ReportsDashboard transactionsData={transactionsData} />
          </Paper>
        </Grid>

        {/* <Grid item xs={12}>
          <AddTransactionForm transactionsData={transactionsData} />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}
