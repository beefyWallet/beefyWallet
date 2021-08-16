// import BeefyWalletAdmin from '../../src/context/BeefyWalletAdmin'
import React, { useState } from "react";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
// import data from '../data'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
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
  const [isLoading, setLoading] = useState(true);
  const [quotesData, setquotesData] = useState();
  let quotesUrl =
    "http://beefy-wallet-api.herokuapp.com/beefy_wallet_api/quotes/";

  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) {
    var token = localStorage.getItem("access_token");
  }
  useEffect(() => {
    getApiData();
  }, []);

  async function getApiData() {
    const config = { headers: { Authorization: "Bearer " + token } };
    const quotesDataAPI = await axios.get(quotesUrl, config);
    setquotesData(quotesDataAPI.data);
    setLoading(false);
  }
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
            <h1 className="text-2xl">Advice</h1>
          </Paper>
        </Grid>

        {quotesData.map((item) => (
          <Grid item xs={4} spacing={2}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {item.source[0]}
                  </Avatar>
                }
                // action={
                //   <IconButton aria-label="settings">
                //     <MoreVertIcon />
                //   </IconButton>
                // }
                title={item.source}
              />
              <CardMedia
                className={classes.media}
                image={item.image}
                title="Advice One"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.quote}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
                {/* <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton> */}
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography>More details about the advice ..</Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
// Advice.Layout = BeefyWalletAdmin
