import React from 'react'
import clsx from 'clsx'
import useStyles from '../components/useStyle'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Chart from '../components/Chart'
import Deposits from '../components/Deposits'
import Orders from '../components/Orders'
import Box from '@material-ui/core/Box'
import BeefyWalletFooter from '../context/BeefyWalletFooter'

export default function Dashboard() {
  const classes = useStyles()

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={fixedHeightPaper}>
              <h1>Good Morning ,Mr.Unkown</h1>
            </Paper>
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
              <Orders />
            </Paper>
          </Grid>
        </Grid>

        <Box pt={4}>
          <BeefyWalletFooter />
        </Box>
      </Container>
    </main>
  )
}
