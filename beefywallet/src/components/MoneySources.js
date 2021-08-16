import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { useEffect } from "react";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  loading: {
    marginTop: theme.spacing(2),
    // marginRight: theme.spacing(2),
    fontSize: 16,
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(20),
      height: theme.spacing(10),
    },
  },
  initiallyTopMargin: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
    left: 20,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(2),
    marginRight: 36,
    minWidth: 120,
  },
  drawerPaper: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(4),
    },
  },
  textField: {
    margin: theme.spacing(1),
    width: "25ch",
  },
}));

function camelCase(word) {
  return word[0].toUpperCase() + word.substring(1);
}

// ###########################################
export default function MoneySources() {
  const [isLoading, setLoading] = useState(true);
  let testData = [
    {
      id: 1,
      name: "jjj",
      amount: 200,
    },
  ];
  const [data3, setData3] = useState();
  let moneySourcesUrl =
    "http://beefy-wallet-api.herokuapp.com/beefy_wallet_api/money_sources/";

  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) {
    var token = localStorage.getItem("access_token");
  }
  useEffect(() => {
    getMoneySourceData();
  }, []);

  async function getMoneySourceData() {
    const config = { headers: { Authorization: "Bearer " + token } };
    const moneySourcesData = await axios.get(moneySourcesUrl, config);
    setData3(moneySourcesData.data);
    setLoading(false);
  }
  // console.log(data3);
  const classes = useStyles();

  if (isLoading) {
    return <div className={classes.loading}>Loading...</div>;
  }
  return (
    <React.Fragment>
      <Grid container spacing={3} className={classes.initiallyTopMargin}>
        <div className={classes.root}>
          {data3.map((moneySource) => (
            <Grid item key={moneySource.id} xs={5} md={2} lg={2}>
              <Paper className={classes.drawerPaper}>
                <Typography component="p" variant="h6">
                  {moneySource.name}
                </Typography>
                <Typography color="textSecondary">
                  {moneySource.amount} JOD
                </Typography>
              </Paper>
            </Grid>
          ))}
        </div>
      </Grid>
    </React.Fragment>
  );
}
