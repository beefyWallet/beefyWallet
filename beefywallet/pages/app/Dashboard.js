import clsx from 'clsx'
import useStyles from '../../useStyle'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Chart from '../../src/components/Chart'
import Total from '../../src/components/Total'
import Reports from '../../src/components/Reports'
import React, { useContext } from 'react'
import MoneySources from '../../src/components/MoneySources'
import { ApiDataContext } from '../../src/context/apiData'
export default function Dashboard() {
  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  const { isLoading, moneySourceData, transactionsData } =
    useContext(ApiDataContext)
  if (isLoading) {
    return <div className={classes.loading}>Loading...</div>
  }
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Paper className={classes.initiallyHeight}>
          <h1 className="text-2xl">Dashboard</h1>
        </Paper>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MoneySources moneySourceData={moneySourceData} />
        </Grid>

        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <Chart />
          </Paper>
        </Grid>

        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Total moneySourceData={moneySourceData} />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Reports transactionsData={transactionsData} />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
