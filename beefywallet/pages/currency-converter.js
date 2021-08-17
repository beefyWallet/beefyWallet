import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import PdfGenerator from "../src/components/ConvertToPdf";

const useStyles = makeStyles({
  totalContext: {
    flex: 1,
  },
  total: {
    marginBottom: 15,
  },
  output: {
    marginLeft: 15,
    border: "1px rgba(255, 255, 255, 0.23) solid",
    padding: 12,
    borderRadius: 2,
  },
});

export default function CurrentConverter() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(getPair(first, second));
  }
  function getPair(first, second) {
    let url = `https://free.currconv.com/api/v7/convert?q=${first}_${second}&compact=ultra&apiKey=03a707a84ec370857f4f`;
    axios.get(url).then((res) => {
      setRate(res.data[`${first}_${second}`]);
      console.log(rate);
    });
  }
  const classes = useStyles();
  return (
    <>
      <Typography color="textSecondary" variant="h5" className={classes.total}>
        Money converter
      </Typography>
      <Grid container>
        <Grid item md={8}>
          <form
            //   className={classes.initiallyTopMargin}
            noValidate
            autoComplete="off"
          >
            <Grid container>
              <Grid item md={12}>
                <TextField
                  id="amount"
                  label="Amount"
                  variant="outlined"
                  name="Amount"
                  fullWidth
                  onChange={(e) => setAmount(e.target.value.toUpperCase())}
                />
                <TextField
                  id="first"
                  label="USD EUR JPY GBP AUD JOD ..."
                  variant="outlined"
                  name="first"
                  fullWidth
                  onChange={(e) => setFirst(e.target.value.toUpperCase())}
                />
                <TextField
                  id="second"
                  label="USD EUR JPY GBP AUD JOD ..."
                  variant="outlined"
                  name="second"
                  fullWidth
                  onChange={(e) => setSecond(e.target.value)}
                />
              </Grid>
              <Grid item md={12}>
                <Button
                  type="submit"
                  variant="outlined"
                  fullWidth
                  color="primary"
                  onClick={handleSubmit}
                  style={{
                    marginTop: 10,
                  }}
                >
                  Convert
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item md={3} className={classes.output}>
          <Typography
            color="textSecondary"
            variant="h5"
            className={classes.total}
          >
            Output :
          </Typography>
          <Typography component="p" variant="h6">
            {/* {rate.length ? rate[`${first}_${second}`] * amount : "Fill the box"}
            {second} */}
            {rate * amount}
            {rate ? " " + second : ""}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
// Advice.Layout = BeefyWalletAdmin
