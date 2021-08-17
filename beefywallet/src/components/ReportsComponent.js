import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import {
  GridToolbarExport,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Title from "./Title";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { useContext, useState } from "react";
import { ApiDataContext } from "../context/apiData";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import useStyles from "../../useStyle";

function getDate(date) {
  const newDate = new Date(date);
  return `${newDate.getFullYear()}-${
    newDate.getMonth() + 1
  }-${newDate.getDate()}`;
}

export default function ReportsComponent() {
  const classes = useStyles();
  const { isLoading, transactionsData, addTransaction, DeleteTransaction } =
    useContext(ApiDataContext);

  if (isLoading) {
    return <div className={classes.loading}>Loading...</div>;
  }

  const deleteHandler = (e) => {
    DeleteTransaction(e.currentTarget.id);
  };
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Source</TableCell>
            <TableCell>Tranaction</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Note</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactionsData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{getDate(row.creation_date)}</TableCell>
              <TableCell>{row.money_source.name}</TableCell>
              <TableCell>
                {row.transaction_type == "Incomes" ? (
                  <ArrowUpwardIcon color="primary" />
                ) : (
                  <ArrowDownwardIcon color="secondary" />
                )}
                {row.transaction_type}
              </TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.value} &nbsp; JOD</TableCell>
              <TableCell>{row.note}</TableCell>
              <TableCell>
                <Button
                  color="secondary"
                  name={row.id}
                  id={row.id}
                  onClick={deleteHandler}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
