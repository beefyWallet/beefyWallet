import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import data from '../../data'
import { TextField } from '@material-ui/core'

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
]

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(20),
      height: theme.spacing(12),
    },
    button: {
      margin: theme.spacing(1),
      left: 20,
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(2),
      marginRight: 36,
      minWidth: 120,
    },
  },
}))

export default function Variants() {
  const classes = useStyles()
  const [data2, setData2] = React.useState(data)

  const [open, setOpen] = React.useState(false)
  const [source, setSource] = React.useState('')
  const [amount, setAmount] = React.useState('')
  const [transaction, setTransaction] = React.useState('')
  const [currency, setCurrency] = React.useState('')
  const [note, setNote] = React.useState('')

  const handlerMoneySource = event => {
    setSource(event.target.value || '')
  }
  const handleTransaction = event => {
    setTransaction(event.target.value || '')
  }
  const amountHandler = event => {
    setAmount(event.target.value || '')
  }

  const handleCurrency = event => {
    setCurrency(event.target.value || '')
  }

  const handlerNote = event => {
    setNote(event.target.value || '')
  }
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    console.log(source, ' ', amount, ' ', currency, ' ', transaction, ' ')
    setOpen(false)

    const x = data[0].money_sources.filter(item => item.name == source)
    const sourceData = {
      id: x.length.toString(),
      value: amount.toString(),
      note: note,
      transaction_date: '2021',
    }
    // setData2(prevData2=>[...prevData2, ])

    x[0][transaction].push(sourceData)
    console.log(x[0][transaction])
  }

  return (
    <React.Fragment>
      {data[0].money_sources.map(moneySource => (
        <grid key={moneySource.id} className={classes.root}>
          <Paper elevation={3}>
            <h3>{moneySource.name}</h3>

            <h4>
              {moneySource.incomes.reduce(
                (sum, incomeValue) => (sum += parseInt(incomeValue.value)),
                0
              )}
            </h4>
            <h4>
              {moneySource.expenses.reduce(
                (sum, incomeValue) => (sum += parseInt(incomeValue.value)),
                0
              )}
            </h4>
          </Paper>
        </grid>
      ))}

      <div>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          onClick={handleClickOpen}
        >
          Add new Source
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>List Of Money Sources</DialogTitle>
          <DialogContent>
            <form className={classes.container}>
              <FormControl className={classes.formControl}>
                <TextField
                  label="Source"
                  select
                  value={source}
                  onChange={handlerMoneySource}
                  variant="outlined"
                >
                  <MenuItem value="Closet">Closet</MenuItem>
                  <MenuItem value="Bank">Bank</MenuItem>
                  <MenuItem value="Backet">Backet</MenuItem>
                  <MenuItem value="add_new_Source">Add New Source</MenuItem>
                </TextField>
              </FormControl>

              <FormControl className={classes.formControl}>
                <TextField
                  label="Transaction"
                  select
                  id="transaction"
                  value={transaction}
                  onChange={handleTransaction}
                  variant="outlined"
                >
                  <MenuItem value="incomes">Income</MenuItem>
                  <MenuItem value="expenses">Expense</MenuItem>
                </TextField>
              </FormControl>

              <FormControl className={classes.formControl}>
                <TextField
                  id="amount"
                  label="amount"
                  value={amount}
                  onChange={amountHandler}
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />
              </FormControl>
              <FormControl>
                <TextField
                  id="currency"
                  select
                  label="Select"
                  value={currency}
                  onChange={handleCurrency}
                  helperText="Please select your currency"
                  variant="outlined"
                >
                  {currencies.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>
              <FormControl>
                <TextField
                  id="note"
                  label="Notes"
                  placeholder="Placeholder"
                  value={note}
                  onChange={handlerNote}
                  multiline
                  rows={5}
                  variant="outlined"
                />
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </React.Fragment>
  )
}
