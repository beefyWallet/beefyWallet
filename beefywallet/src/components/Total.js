import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
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

export default function Total({ moneySourceData }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* <Title>Recent Total</Title> */}
      <Typography color="textSecondary" variant="h4" className={classes.total}>
        Total :
      </Typography>
      <Typography component="p" variant="h4">
        {moneySourceData.reduce((total, item) => {
          return (total = total + item.amount);
        }, 0)}{" "}
        JOD
      </Typography>
    </React.Fragment>
  );
}
