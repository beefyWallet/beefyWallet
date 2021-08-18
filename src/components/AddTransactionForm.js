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
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  formControl: {
    // margin: theme.spacing(1),
    // minWidth: "20%",
    marginBottom: 14,
    marginRight: 10,
  },
  form: {
    // display: "flex",
    // justifyContent: "space-between",
    marginBottom: 20,
  },
}));

export default function AddTransactionForm({}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
    addTransaction(formData);
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add Transaction
      </Button>
      <Dialog
        // fullWidth=""
        maxWidth="false"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Transaction</DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off">
            <Grid container>
              {/* <div className={classes.form}> */}
              <Grid item xs={3} lg={6}>
                <TextField
                  id="value"
                  label="Value"
                  variant="outlined"
                  name="value"
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={3} lg={6}>
                <FormControl fullWidth className={classes.formControl}>
                  <TextField
                    label="Transaction Type"
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
              </Grid>
              <Grid item lg={12}>
                <TextField
                  id="note"
                  fullWidth
                  label="Note"
                  variant="outlined"
                  name="note"
                  onChange={handleChange}
                  className={classes.formControl}
                />
              </Grid>
              <Grid item lg={6}>
                <FormControl fullWidth className={classes.formControl}>
                  <TextField
                    label="Category"
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
              </Grid>
              <Grid item lg={6}>
                <FormControl fullWidth className={classes.formControl}>
                  <TextField
                    label="Money Source"
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
              </Grid>

              {/* </div> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Add Transaction
              </Button>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
