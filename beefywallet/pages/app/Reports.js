import BeefyWalletAdmin from '../../src/context/BeefyWalletAdmin'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import clsx from 'clsx'
import useStyles from '../../useStyle'
import React from 'react'
import {
  Chart,
  PieSeries,
  Title,
  trace,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';


export default function Reports() {

  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  const data = [
    { country: 'Outcome', area: 12 },
    { country: 'Income', area: 7 },
  ];


  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.initiallyHeight}>
            <h1 className="text-2xl">Reports</h1>
          </Paper>
        </Grid>
      </Grid>

    
  
      <Paper>
        <Chart
          data= {data}
        >
          <PieSeries
            valueField="area"
            argumentField="country"
          />
          <Title
            text="Income and Outcome"
          />
          <Animation />
        </Chart>
      </Paper>
      </React.Fragment>

    );
  }
Reports.Layout = BeefyWalletAdmin

