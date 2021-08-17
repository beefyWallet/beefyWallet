import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import { fontSize } from "@material-ui/system";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function Help() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper style={{ padding: 10, marginBottom: 50 }}>
        <h1 className="text-2xl">Help</h1>
      </Paper>
      <Paper style={{ width: 600, marginLeft: 200 }}>
        <Typography style={{ padding: 10 }} variant="h6" gutterBottom>
          Contact Us
        </Typography>
        <Grid
          style={{ width: 500, marginLeft: 40, paddingBottom: 30 }}
          container
          spacing={3}
        >
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="Your Question"
              name="Your Question"
              label="Your Question"
              multiline
              fullWidth
              autoComplete="Your Question"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="shipping country"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              style={{ marginTop: 15, marginLeft: 80 }}
              variant="outlined"
              color="primary"
            >
              Send Question
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Paper style={{ width: 300, marginTop: 70 }}>
        <h3 style={{ marginTop: 50, padding: 10, fontSize: 20 }}>
          Most Frequently Questions
        </h3>
      </Paper>
      <Grid style={{ marginTop: 20 }} container spacing={2}>
        <Grid item xs={6} md={6}>
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography
                  style={{ fontSize: 20 }}
                  component="h2"
                  variant="h5"
                >
                  How I can stop spending ?
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  by: Ali Samer
                </Typography>
                <br />
                <Typography variant="subtitle1">
                  <span style={{ color: "#50CB93" }}> Answer:</span> <br />
                  you can checkout our{" "}
                  <a
                    style={{
                      color: "#284E78",
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                    href="/Advice"
                  >
                    Advice
                  </a>{" "}
                  , it will help you
                </Typography>
              </CardContent>
            </div>
            <Hidden xsDown>
              <CardMedia
                className={classes.cardMedia}
                image="data:image/jpeg;base64,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"
                title="{post.imageTitle}"
              />
            </Hidden>
          </Card>
        </Grid>
        {/* Qustion 2 */}
        <Grid item xs={6} md={6}>
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography
                  style={{ fontSize: 20 }}
                  component="h2"
                  variant="h5"
                >
                  How I get the report ?
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  by: Maram Aysar
                </Typography>
                <br />
                <Typography variant="subtitle1">
                  <span style={{ color: "#50CB93" }}> Answer:</span> <br />
                  you can find your report at{" "}
                  <a
                    style={{
                      color: "#284E78",
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                    href="/Report"
                  >
                    Report
                  </a>{" "}
                  Page
                </Typography>
              </CardContent>
            </div>
            <Hidden xsDown>
              <CardMedia
                className={classes.cardMedia}
                image="data:image/jpeg;base64,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"
                title="{post.imageTitle}"
              />
            </Hidden>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
