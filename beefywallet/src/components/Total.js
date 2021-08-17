import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useContext, useState } from "react";
import { ApiDataContext } from "../context/apiData";
import PdfGemerator from "./ConvertToPdf";
// import Title from './Title'

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  totalContext: {
    flex: 1,
  },
  total: {
    marginBottom: 15,
  },
});

export default function Total() {
  const { transactionsData, moneySourceData } = useContext(ApiDataContext);

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
    // console.log(expenesTotal);
    // console.log(IncomesTotal);
    return moneySource.amount - expenesTotal + IncomesTotal;
  }
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* <Title>Recent Total</Title> */}
      <Typography color="textSecondary" variant="h4" className={classes.total}>
        Total :
      </Typography>
      <Typography className={classes.total} component="p" variant="h4">
        {moneySourceData.reduce((total, item) => {
          return (total = total + getAmount(item));
        }, 0)}
        &nbsp;JOD
      </Typography>
      <PdfGemerator />
    </React.Fragment>
  );
}
