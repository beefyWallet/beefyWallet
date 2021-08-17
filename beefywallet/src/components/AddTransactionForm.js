import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { useContext, useState } from "react";
import { ApiDataContext } from "../context/apiData";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: "20%",
  },
  form: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 20,
  },
}));

export default function AddTransactionForm({ transactionsData }) {
  let categories = [
    "Food-Drinks",
    "Shopping",
    "Housing",
    "Transportation",
    "Vehicle",
    "Entertainment",
    "PC",
    "Investemnts",
    "Other",
  ];

  const { addTransaction } = useContext(ApiDataContext);
  const { moneySourceData } = useContext(ApiDataContext);
  const [formData, updateFormData] = useState(initialFormData);
  const initialFormData = Object.freeze({
    value: 0,
    transaction_type: "",
    note: "",
    category: "",
    money_source: "",
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
    addTransaction(formData);
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Add Transaction</Title>
      <form noValidate autoComplete="off">
        <div className={classes.form}>
          <TextField
            id="value"
            label="Value"
            variant="outlined"
            name="value"
            onChange={handleChange}
          />
          <FormControl className={classes.formControl}>
            <TextField
              label="transaction_type"
              select
              id="transaction_type"
              // value={transaction}
              name="transaction_type"
              onChange={handleChange}
              variant="outlined"
            >
              <MenuItem value="Incomes">Income</MenuItem>
              <MenuItem value="Expenses">Expense</MenuItem>
            </TextField>
          </FormControl>
          <TextField
            id="note"
            label="note"
            variant="outlined"
            name="note"
            onChange={handleChange}
            className={classes.formControl}
          />
          <FormControl className={classes.formControl}>
            <TextField
              label="category"
              select
              id="category"
              name="category"
              onChange={handleChange}
              variant="outlined"
            >
              {categories.map((item) => {
                return <MenuItem value={item}>{item}</MenuItem>;
              })}
            </TextField>
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              label="money_source"
              select
              id="money_source"
              name="money_source"
              onChange={handleChange}
              variant="outlined"
            >
              {moneySourceData.map((item) => {
                return <MenuItem value={item.name}>{item.name}</MenuItem>;
              })}
            </TextField>
          </FormControl>
        </div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Add Transaction
        </Button>
      </form>
    </React.Fragment>
  );
}
