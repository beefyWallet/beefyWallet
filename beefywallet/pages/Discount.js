// import BeefyWalletAdmin from '../../src/context/BeefyWalletAdmin'
import React from "react";
import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { ApiDataContext } from "../src/context/apiData";
const useStyles = makeStyles((theme) => ({
  marginBetween: {
    marginBottom: 20,
  },
  root: {
    maxWidth: 345,
  },
  mediaDiscount: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  initiallyHeight: {
    padding: theme.spacing(2),
    height: 50,
  },
}));

export default function Advice() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { isLoading, adsData } = useContext(ApiDataContext);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (isLoading) {
    return <div className={classes.loading}>Loading...</div>;
  }

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.initiallyHeight}>
            <h1 className="text-2xl">Discount's</h1>
          </Paper>
        </Grid>

        {adsData.map((item) => (
          <Grid item xs={12} className={classes.marginBetween}>
            <Paper>
              <Grid container spacing={0}>
                <Grid item xs={4}>
                  <CardMedia
                    className={classes.root}
                    component="img"
                    alt="Discount"
                    height="100"
                    image={item.image}
                    title="Discount"
                  />
                </Grid>
                <Grid item xs={8}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle2"
                      gutterBottom
                    >
                      Time: {item.creation_date}
                    </Typography>

                    <Typography variant="body1" component="p">
                      {item.text}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle2"
                      gutterBottom
                    >
                      <br /> Type: {item.ad_type}
                      <br /> Vendor: {item.vendor}
                    </Typography>
                  </CardContent>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography>
                        More details about the Discount ..
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
// Advice.Layout = BeefyWalletAdmin
