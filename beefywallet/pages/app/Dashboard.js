import clsx from "clsx";
import useStyles from "../../useStyle";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chart from "../../src/components/Chart";
import Total from "../../src/components/Total";
import Reports from "../../src/components/Reports";
import React, { useState } from "react";
import MoneySources from "../../src/components/MoneySources";
import axios from "axios";
import { useEffect } from "react";

export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [isLoading, setLoading] = useState(true);
  const [moneySourceData, setmoneySourceData] = useState();
  const [transactionsData, setTransactionsData] = useState();
  let moneySourcesUrl =
    "http://beefy-wallet-api.herokuapp.com/beefy_wallet_api/money_sources/";

  let transactionsUrl =
    "http://beefy-wallet-api.herokuapp.com/beefy_wallet_api/transactions/";

  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) {
    var token = localStorage.getItem("access_token");
  }
  useEffect(() => {
    getApiData();
  }, []);

  async function getApiData() {
    const config = { headers: { Authorization: "Bearer " + token } };
    const moneySourcesDataAPI = await axios.get(moneySourcesUrl, config);
    setmoneySourceData(moneySourcesDataAPI.data);
    const transactionsDataAPI = await axios.get(transactionsUrl, config);
    setTransactionsData(transactionsDataAPI.data);
    setLoading(false);
  }

  if (isLoading) {
    return <div className={classes.loading}>Loading...</div>;
  }
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Paper className={classes.initiallyHeight}>
          <h1 className="text-2xl">Dashboard</h1>
        </Paper>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MoneySources moneySourceData={moneySourceData} />
        </Grid>

        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <Chart />
          </Paper>
        </Grid>

        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Total moneySourceData={moneySourceData} />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Reports transactionsData={transactionsData} />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
