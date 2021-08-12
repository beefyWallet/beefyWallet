import BeefyWalletAdmin from '../../src/context/BeefyWalletAdmin'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import clsx from 'clsx'
import useStyles from '../../useStyle'
import React from 'react'

export default function Advice() {
  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.initiallyHeight}>
            <h1 className="text-2xl">Advice</h1>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
Advice.Layout = BeefyWalletAdmin
