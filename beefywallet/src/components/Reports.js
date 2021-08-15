import React from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Title from './Title'
import data from '../../data'

function preventDefault(event) {
  event.preventDefault()
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}))

export default function Reports() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Title>Recent Reports</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Source</TableCell>
            <TableCell>expenses</TableCell>
            <TableCell>incomes</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data[0].money_sources.map(row => (
            <TableRow key={row.id}>
              <TableCell>0000</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                {row.expenses.reduce(
                  (sum, expense) => sum + parseInt(expense.value),
                  0
                )}
              </TableCell>

              <TableCell>
                {row.incomes.reduce(
                  (sum, income) => sum + parseInt(income.value),
                  0
                )}
              </TableCell>
              <TableCell align="right">
                {row.amount}
                {row.currency}
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
  )
}
