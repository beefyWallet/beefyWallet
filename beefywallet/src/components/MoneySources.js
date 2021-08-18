import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { ApiDataContext } from "../context/apiData";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  loading: {
    marginTop: theme.spacing(2),
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
  form: {
    display: "flex",
    flexWrap: "wrap",
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
    justifyContent: "space-between",
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
  const classes = useStyles();
  const [formData, updateFormData] = useState(initialFormData);
  const {
    addMoneySource,
    transactionsData,
    moneySourceData,
    DeleteMoneySource,
  } = useContext(ApiDataContext);
  const deleteHandler = (e) => {
    DeleteMoneySource(e.currentTarget.id);
  };
  function getAmount(moneySource) {
    let expenesTotal = transactionsData.reduce((total, item) => {
      if (
        item.transaction_type == "Expenses" &&
        item.money_source.name == moneySource.name
      ) {
        return (total = total + Number(item.value));
      } else {
        return total;
      }
    }, 0);
    let IncomesTotal = transactionsData.reduce((total, item) => {
      if (
        item.transaction_type == "Incomes" &&
        item.money_source.name == moneySource.name
      ) {
        return (total = total + Number(item.value));
      } else {
        return total;
      }
    }, 0);
    return moneySource.amount - expenesTotal + IncomesTotal;
  }
  const initialFormData = Object.freeze({
    amount: 0,
    name: "",
  });
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    addMoneySource(formData);
  };

  return (
    <React.Fragment>
      <Grid container>
        <Grid item md={9}>
          {moneySourceData.length == 0 ? (
            <Typography variant="body1" color="secondary">
              Try adding money sources
            </Typography>
          ) : (
            <Grid container spacing={3} className={classes.initiallyTopMargin}>
              <div className={classes.root}>
                {moneySourceData.map((moneySource) => (
                  <Grid item key={moneySource.id} xs={5} md={3} lg={3}>
                    <Paper className={classes.drawerPaper}>
                      <div className={classes.container}>
                        <Typography component="p" variant="h6">
                          {moneySource.name}
                        </Typography>
                        <Button
                          color="secondary"
                          // name={moneySource.id}
                          id={moneySource.id}
                          onClick={deleteHandler}
                        >
                          Delete
                        </Button>
                      </div>
                      <Typography color="textSecondary">
                        {getAmount(moneySource)} JOD
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </div>
            </Grid>
          )}
        </Grid>
        <Grid item md={3}>
          <form
            className={classes.initiallyTopMargin}
            noValidate
            autoComplete="off"
          >
            <Grid container>
              <Grid item md={12}>
                <TextField
                  id="amount"
                  label="Amount"
                  variant="outlined"
                  name="amount"
                  fullWidth
                  onChange={handleChange}
                />
                <TextField
                  id="name"
                  label="Name"
                  variant="outlined"
                  name="name"
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={12}>
                <Button
                  type="submit"
                  variant="outlined"
                  fullWidth
                  color="primary"
                  onClick={handleSubmit}
                >
                  Add Source
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
