import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import ReportsComponent from "./ReportsComponent";
import Title from "./Title";

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function ReportsDashboard({ transactionsData }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Reports</Title>
      <ReportsComponent transactionsData={transactionsData} />
      <div className={classes.seeMore}>
        <Link color="primary" href="/Reports">
          See more Reports
        </Link>
      </div>
    </React.Fragment>
  );
}
