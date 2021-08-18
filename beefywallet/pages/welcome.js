import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles, responsiveFontSizes } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="/">
        BeefyWallet
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
  marginLeft: {
    marginLeft: 200,
  },
  typo: {
    background: theme.background,
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px #3c5186",
    // color: "black",
    height: 30,
    width: 300,
    padding: "0 20px",
    marginTop: 20,
  },
  colors: {
    color: "gray",
  },
  logo: {
    width: 400,
    height: 400,
    marginTop: 50,
  },
}));

export default function Welcome() {
  const SignInHanler = (e) => {
    // e.preventDefault();
    if (typeof window !== "undefined") {
      localStorage.setItem("s", "s");
    }
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={4} className={classes.marginLeft}>
          <Container component="main" className={classes.main} maxWidth="sm">
            <Typography variant="h2" component="h2" gutterBottom>
              Welcome to <br />
              <span style={{ color: "#3c5186" }}>Beefy Wallet </span>
              <Typography variant="h2" component="h2" gutterBottom>
                Control Your Habits
              </Typography>
            </Typography>
            <Typography
              variant="body1"
              component="p"
              className={classes.colors}
              gutterBottom
            >
              {
                "with BeefyWallet you can track your money sources and analyze your spending habits."
              }
              {
                "and we will suggest advice for you and offers to have better experince with us"
              }
            </Typography>
            <Typography
              className={classes.typo}
              variant="subtitle1"
              color="primary"
            >
              Join Now And Be More Controler
            </Typography>
            <br />

            <Button variant="outlined" color="primary" onClick={SignInHanler}>
              <Link color="inherit" href="/app/login">
                Sign-In
              </Link>
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              style={{ marginLeft: "0.8rem" }}
            >
              <Link color="inherit" href="/app/signup">
                Sign-Up
              </Link>
            </Button>
          </Container>
        </Grid>
        <Grid item xs={4}>
          <img src="/LogowithBg.png" alt="Logo" className={classes.logo} />
        </Grid>
      </Grid>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">BeefyWallet is Awesome</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
