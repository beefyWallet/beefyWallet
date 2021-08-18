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

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

function getDate(date) {
  const newDate = new Date(date);
  return `${newDate.getFullYear()}-${
    newDate.getMonth() + 1
  }-${newDate.getDate()}`;
}

export default function Reports({ transactionsData }) {
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

  const { addTransaction, DeleteTransaction } = useContext(ApiDataContext);
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
  };
  const deleteHandler = (e) => {
    DeleteTransaction(e.currentTarget.id);
  };
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
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more Reports
        </Link>
      </div>
    </React.Fragment>
  );
}
