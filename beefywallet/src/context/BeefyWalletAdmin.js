import BeefyWalletTemplete from './BeefyWalletTemplete'
import React from 'react'
import useStyles from '../../useStyle'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import BeefyWalletFooter from '../context/BeefyWalletFooter'
const BeefyWalletAdmin = ({ children }) => {
  const classes = useStyles()
  return (
    <>
      <BeefyWalletTemplete>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            {children}
            <Box pt={4}>
              <BeefyWalletFooter />
            </Box>
          </Container>
        </main>
      </BeefyWalletTemplete>
    </>
  )
}
export default BeefyWalletAdmin
