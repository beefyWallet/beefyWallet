import React, { useContext } from 'react'
import { ApiDataContext } from '../context/apiData'
import { makeStyles } from '@material-ui/core/styles'
import {
  IconButton,
  Badge,
  Tooltip,
  Divider,
  Box,
  List,
  ListItemAvatar,
  Avatar,
  ListItem,
} from '@material-ui/core'
import ListItemText from '@material-ui/core/ListItemText'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { alpha, styled } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import DoneAllIcon from '@material-ui/icons/DoneAll'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import CircularProgress from '@material-ui/core/CircularProgress'
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
  root: {
    height: 1000,
    minWidth: 275,
    marginTop: 5,
  },
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  typography: {
    padding: theme.spacing(2),
  },
}))

// function getDate(checkDate) {}
export default function NotificationMenuAds() {
  const { isLoading, adsData } = useContext(ApiDataContext)
  if (isLoading) {
    return (
      <div>
        {' '}
        <CircularProgress color="secondary" />
      </div>
    )
  }
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  // const anchorRef = React.useRef(null)
  const [open, setOpen] = React.useState(false)
  const [notifications, setNotifications] = React.useState(adsData)
  const [totalUnRead, setTotalUnRead] = React.useState(
    notifications.filter(item => item.read === false).length
  )

  const handleOpen = event => {
    setAnchorEl(event.currentTarget)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setAnchorEl(null)
  }

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map(notification => ({
        ...notification,
        read: true,
      }))
    )
    setTotalUnRead(0)
  }

  const itemChosenHandler = () => {
    setTotalUnRead(0)
    setOpen(false)
  }

  return (
    <div>
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        size="large"
        color={open ? 'secondary' : ''}
        onClick={handleOpen}
        sx={{
          ...(open && {
            bgcolor: theme =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.focusOpacity
              ),
          }),
        }}
      >
        <Badge badgeContent={totalUnRead} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        className={classes.root}
      >
        <CssBaseline />
        <Container maxWidth="sm">
          <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle1">Notifications</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                You have {totalUnRead} unread messages
              </Typography>
            </Box>

            {totalUnRead > 0 && (
              <Tooltip title=" Mark all as read">
                <IconButton color="primary" onClick={handleMarkAllAsRead}>
                  <DoneAllIcon />
                </IconButton>
              </Tooltip>
            )}
          </Box>

          <Divider />

          <Box>
            <List>
              {adsData.map(item => (
                <React.Fragment key={item.id}>
                  <Link href="/Discount">
                    <ListItem button onClick={itemChosenHandler}>
                      <ListItemAvatar>
                        <Avatar alt="Profile Picture" src={item.image} />
                        {item.vendor}
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.ad_type}
                        secondary={item.title}
                      />
                    </ListItem>
                  </Link>
                </React.Fragment>
              ))}
            </List>
          </Box>
        </Container>
      </Popover>
    </div>
  )
}
