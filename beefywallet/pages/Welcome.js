import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="/">
      BeefyWallet
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function Welcome() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to <br /> <span style={({ color: '#3c5186' })}> Beefy Wallet</span>
          <img src="../../../assets/LogowithBg.png" alt="Logo" />
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Short discribtion about Beefy'}
        </Typography>
        <Typography variant="body1">Be part of us</Typography>
        <br/>
  
            <Button variant="outlined" color="primary" >
             <Link color="inherit" href="/Login">
             Sign-In
            </Link>
            </Button>
            <Button variant="outlined" color="secondary" style={({ marginLeft: '0.8rem' })}>
            <Link color="inherit" href="/SignUp">
             Sign-Up
            </Link>
            </Button>

      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">BeefyWallet is Awesome</Typography>
                  <Copyright />
                  
        </Container>
      </footer>
    </div>
  );
}