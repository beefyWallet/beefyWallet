import clsx from 'clsx'
import useStyles from '../../useStyle'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Chart from '../../src/components/Chart'
import Deposits from '../../src/components/Deposits'
import Reports from '../../src/components/Reports'
import React from 'react'
import Variants from '../../src/components/AddSources'

export default function Dashboard() {
  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Paper className={classes.initiallyHeight}>
          <h1 className="text-2xl">Dashboard</h1>
        </Paper>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Variants />
        </Grid>

        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <Chart />
          </Paper>
        </Grid>

        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Deposits />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Reports />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
