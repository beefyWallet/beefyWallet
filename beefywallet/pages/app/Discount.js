import BeefyWalletAdmin from '../../src/context/BeefyWalletAdmin'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import data from '../../data';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});


export default function Discount() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (

    <>
      <Grid  container spacing={3}>
      {data[0].money_sources.map(item =>((
        <Grid item xs={4} spacing={2}>
          <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://st.depositphotos.com/2036511/2769/v/950/depositphotos_27691617-stock-illustration-red-20-percent-discount-sign.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Discount Title
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Vendor 
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Date 
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Discount Type 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Discount Info .....................
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Visit
        </Button> */}
      </CardActions>
    </Card>
        </Grid>
        )))}
        
      </Grid>
  </>
  );
}
Discount.Layout = BeefyWalletAdmin