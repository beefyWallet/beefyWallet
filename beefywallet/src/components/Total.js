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
});

export default function Total() {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* <Title>Recent Total</Title> */}
      <Typography component="p" variant="h4">
        1,000 JOD
      </Typography>
      <Typography color="textSecondary" className={classes.totalContext}>
        on 2021
      </Typography>
      <Typography color="textSecondary" variant="h4">
        Total
      </Typography>
      <div>
        {/* <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link> */}
      </div>
    </React.Fragment>
  );
}
