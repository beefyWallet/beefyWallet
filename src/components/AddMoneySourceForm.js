import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { ApiDataContext } from "../context/apiData";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

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
export default function AddMoneySourceForm() {
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
    setOpen(false);
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add Money Source
      </Button>
      <Dialog
        // fullWidth=""
        maxWidth="false"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Source</DialogTitle>
        <DialogContent>
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
                  label="Source"
                  variant="outlined"
                  name="name"
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  color="primary"
                  onClick={handleSubmit}
                >
                  Add Source
                </Button>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
