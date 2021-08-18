import { Paper, Typography } from "@material-ui/core";
import useStyles from "../../useStyle";

const PageHeader = ({ title }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.pageHeader}>
      <Typography
        align="center"
        color="textSecondary"
        component="h1"
        variant="h5"
      >
        {title}
      </Typography>
    </Paper>
  );
};

export default PageHeader;
