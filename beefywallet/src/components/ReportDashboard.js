import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import ReportsComponent from "./ReportsComponent";
import Title from "./Title";
import AddTransactionForm from "./AddTransactionForm";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 8px",
  },
}));

export default function ReportsDashboard({ transactionsData }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container className={classes.btn}>
        <Title>Recent Reports</Title>
        <AddTransactionForm />
      </Grid>

      <ReportsComponent numberOfRows={3} transactionsData={transactionsData} />
      <div className={classes.seeMore}>
        <Link color="primary" href="/reports">
          See more Reports
        </Link>
      </div>
    </React.Fragment>
  );
}
