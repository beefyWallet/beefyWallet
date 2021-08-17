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
export default function MoneySources({ moneySourceData }) {
  const classes = useStyles();
  const [formData, updateFormData] = useState(initialFormData);
  const { addMoneySource } = useContext(ApiDataContext);

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
      <Grid container spacing={3} className={classes.initiallyTopMargin}>
        <div className={classes.root}>
          {moneySourceData.map((moneySource) => (
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
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="amount"
            label="Amount"
            variant="outlined"
            name="amount"
            onChange={handleChange}
          />
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            name="name"
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Post
          </Button>
        </form>
      </Grid>
    </React.Fragment>
  );
}
