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
import { Modal } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1,
    '& > *': {
      margin: theme.spacing(2),
      width: theme.spacing(20),
      height: theme.spacing(10),
    },
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
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(2),
    marginRight: 36,
    minWidth: 120,
  },
  drawerPaper: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(4),
    },
  },
  textField: {
    margin: theme.spacing(1),
    width: '25ch',
  },
}))

function camelCase(word) {
  return word[0].toUpperCase() + word.substring(1)
}
export default function Variants() {
  const classes = useStyles()
  const [data2, setData2] = React.useState(data)

  const [open, setOpen] = React.useState(false)
  const [source, setSource] = React.useState('')
  const [amount, setAmount] = React.useState('')
  // const [transaction, setTransaction] = React.useState('')
  const [currency, setCurrency] = React.useState('')
  // const [note, setNote] = React.useState('')
  const [addNewItemOpen, setAddNewItemOpen] = React.useState(false)
  const [addNewItemSource, setAddNewItemSource] = React.useState('')

  const [dataMoneySource, setDataMoneySource] = React.useState([
    'Bank',
    'Backet',
    'Closet',
  ])

  const handlerMoneySource = event => {
    setSource(event.target.value || '')
  }
  // const handleTransaction = event => {
  //   setTransaction(event.target.value || '')
  // }
  const amountHandler = event => {
    setAmount(parseFloat(event.target.value) || '')
  }

  const handleCurrency = event => {
    setCurrency(event.target.value || '')
  }

  // const handlerNote = event => {
  //   setNote(event.target.value || '')
  // }

  const addNewItemSourceHandler = event => {
    setAddNewItemSource(event.target.value || '')
  }

  const handleAddnewSourceItemOpen = () => {
    setAddNewItemOpen(true)
  }

  const handleAddnewSourceItemClose = () => {
    setAddNewItemOpen(false)
  }
  const handleAddnewSourceItemCloseOk = () => {
    setAddNewItemOpen(false)

    setDataMoneySource(prevDataMoney => [
      ...prevDataMoney,
      camelCase(addNewItemSource),
    ])
  }
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const handleCloseOk = () => {
    setOpen(false)

    if (source != 'add_new_Source' && source != '' && amount != '') {
      const newSource = data2[0].money_sources.filter(
        item => item.name == source
      )
      if (!newSource.length) {
        const newSourceAdded = {
          id: (data2[0].money_sources.length + 1).toString(),
          name: source,
          expenses: [],
          incomes: [],
          amount: amount,
          currency: 'JOD',
        }
        setData2(prevData2 => [
          ...prevData2,
          data2[0].money_sources.push(newSourceAdded),
        ])
      } else {
        setData2(prevData2 => [...prevData2, (newSource[0].amount += amount)])
        console.log(newSource[0])
      }
    }

    // console.log(newSource[0][transaction].length)
    // const sourceData = {
    //   id: (newSource[0][transaction].length + 1).toString(),
    //   value: amount.toString(),
    //   note: note,
    //   transaction_date: '2021',
    // }
    // setData2(prevData2 => [...prevData2, newSource[0][transaction].push(sourceData)])
  }
  React.useEffect(() => {}, [data2])

  return (
    <React.Fragment>
      <Grid container spacing={3} className={classes.initiallyTopMargin}>
        <div className={classes.root}>
          {data2[0].money_sources.map(moneySource => (
            <Grid item key={moneySource.id} xs={5} md={2} lg={2}>
              <Paper className={classes.drawerPaper}>
                <Typography component="p" variant="h6">
                  {moneySource.name}
                </Typography>
                <Typography color="textSecondary">
                  {moneySource.amount} {moneySource.currency}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </div>

        <Grid item xs={3}>
          <Button
            variant="outlined"
            size="large"
            color="primary"
            onClick={handleClickOpen}
          >
            Add new Source
          </Button>
        </Grid>
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
                  className={classes.textField}
                >
                  {dataMoneySource.map((sourceItem, index) => (
                    <MenuItem key={index + 1} value={sourceItem}>
                      {sourceItem}
                    </MenuItem>
                  ))}

                  {/* <MenuItem value="Bank">Bank</MenuItem>
                  <MenuItem value="Backet">Backet</MenuItem> */}
                  <MenuItem
                    value="add_new_Source"
                    onClick={handleAddnewSourceItemOpen}
                  >
                    Add New Source
                  </MenuItem>
                </TextField>
              </FormControl>

              <Dialog
                open={addNewItemOpen}
                onClose={handleAddnewSourceItemClose}
              >
                <DialogTitle>Add New Source</DialogTitle>
                <DialogContent>
                  <form className={classes.container}>
                    <FormControl className={classes.formControl}>
                      <TextField
                        id="addNewItemSource"
                        label="Add New Source"
                        value={addNewItemSource}
                        onChange={addNewItemSourceHandler}
                        variant="outlined"
                        className={classes.textField}
                      />
                    </FormControl>
                  </form>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleAddnewSourceItemClose} color="primary">
                    Cancel
                  </Button>
                  <Button
                    onClick={handleAddnewSourceItemCloseOk}
                    color="primary"
                  >
                    Ok
                  </Button>
                </DialogActions>
              </Dialog>

              {/* <FormControl className={classes.formControl}>
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
              </FormControl> */}

              <FormControl className={classes.formControl}>
                <TextField
                  id="amount"
                  label="amount"
                  value={amount}
                  onChange={amountHandler}
                  type="number"
                  variant="outlined"
                  style={{ margin: 8 }}
                  className={classes.textField}
                />
              </FormControl>
              {/* <FormControl>
                <TextField
                  id="currency"
                  select
                  label="Select"
                  value={currency}
                  onChange={handleCurrency}
                  helperText="Please select your currency"
                  variant="outlined"
                  style={{ margin: 8 }}
                  className={classes.textField}
                >
                  {currencies.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl> */}
              {/* <FormControl>
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
              </FormControl> */}
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleCloseOk} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </React.Fragment>
  )
}
