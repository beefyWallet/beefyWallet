import clsx from 'clsx'
import useStyles from '../../useStyle'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Chart from '../../src/components/Chart'
import Deposits from '../../src/components/Deposits'
import Orders from '../../src/components/Orders'
import BeefyWalletAdmin from '../../src/context/BeefyWalletAdmin'
export default function DashboardPage() {
  const classes = useStyles()

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.initiallyHeight}>
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
  )
}

DashboardPage.Layout = BeefyWalletAdmin
