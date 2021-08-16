import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import data from "../../data";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Reports({ transactionsData }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Reports</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Source</TableCell>
            <TableCell>Tranaction</TableCell>
            {/* <TableCell>incomes</TableCell> */}
            <TableCell>Amount</TableCell>
            <TableCell>Note</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactionsData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.creation_date}</TableCell>
              <TableCell>{row.money_source.name}</TableCell>
              <TableCell>
                {/* {row.expenses.reduce(
                  (sum, expense) => sum + parseInt(expense.value),
                  0
                )} */}
                {row.transaction_type}
              </TableCell>

              <TableCell>
                {/* {row.incomes.reduce(
                  (sum, income) => sum + parseInt(income.value),
                  0
                )} */}
                {row.value} &nbsp; JOD
              </TableCell>
              <TableCell>{row.note}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more Reports
        </Link>
      </div>
    </React.Fragment>
  );
}
