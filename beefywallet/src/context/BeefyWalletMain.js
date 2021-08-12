import React from 'react'
import clsx from 'clsx'
import useStyles from '../components/useStyle'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import BeefyWalletFooter from '../context/BeefyWalletFooter'
import Dashboard from '../pages/Dashboard'
export default function BeefyWalletMain() {
  const classes = useStyles()

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Dashboard />
        <Box pt={4}>
          <BeefyWalletFooter />
        </Box>
      </Container>
    </main>
  )
}
