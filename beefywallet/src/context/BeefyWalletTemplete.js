import React from 'react'
import clsx from 'clsx'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import SideBar from '../components/SideBar'
import TopBar from '../components/TopBar'
import useStyles from '../../useStyle'

export default function BeefyWalletTemplete({ children }) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <TopBar setOpen={setOpen} open={open} classes={classes} />
      </AppBar>

      <SideBar setOpen={setOpen} open={open} classes={classes} />
      {children}
    </div>
  )
}
