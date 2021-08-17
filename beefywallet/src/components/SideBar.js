import Drawer from '@material-ui/core/Drawer'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import IconButton from '@material-ui/core/IconButton'
import { mainListItems, secondaryListItems } from '../components/listItems'
import clsx from 'clsx'

const SideBar = ({ setOpen, open, classes }) => {
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
      <img src="/LogowithBg.png" alt="Logo" style={{marginRight:40,height:60}} />

        <h4>BeefyWallet</h4>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{mainListItems}</List>
      <Divider />
      <List>{secondaryListItems}</List>
    </Drawer>
  )
}

export default SideBar
