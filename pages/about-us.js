import BeefyWalletAdmin from "../src/context/BeefyWalletAdmin";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import PageHeader from "../src/components/PageHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 230,
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
    backgroundColor: blue[500],
  },
}));

const users = [
  {
    username: "Amarh abu sahuon",
    img: "https://avatars.githubusercontent.com/u/63208748?v=4",
    github: "https://github.com/amarh-ayman",
    Linkedin: "https://www.linkedin.com/in/amarh-abusahuon-505685162/",
  },
  {
    username: "Abdullah Al Sawalmeh",
    img: "https://avatars.githubusercontent.com/u/79080917?v=4",
    github: "https://github.com/Abdullah-AlSawalmeh",
    Linkedin: "https://www.linkedin.com/in/abdullah-al-sawalmeh/",
  },
  {
    username: "Ayman Naif",
    img: "https://scontent.famm2-3.fna.fbcdn.net/v/t39.30808-6/206601023_4422900787743880_8677008674333766581_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEzoTfrnCd7UhwZaUJCsozd7f9jOPWNzWDt_2M49Y3NYBgb73BW3Ljq_r_7GBO1HlT05rh1FONxlazbzuoWW8is&_nc_ohc=ey-hWznJEu0AX_fc3TD&tn=QcftcUoCAqDvoMD0&_nc_ht=scontent.famm2-3.fna&oh=ef24c5d2c08baff5ddc05fa608b7966f&oe=61212587",
    github: "https://github.com/AymanNaif",
    Linkedin: "https://www.linkedin.com/in/ayman-naif96/",
  },
  {
    username: "Ebrahim Ayyad",
    img: "https://scontent.famm2-3.fna.fbcdn.net/v/t1.6435-9/75478511_2796151303768499_8238642435106799616_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGNlhCAERfJ2EZ5jktsOLJoH_BuXgFxTzgf8G5eAXFPOOTCa5g55Z-A9eTNSRnLgIqgzFqO3p_WrMvApb_hOgeM&_nc_ohc=Xtt_Y-cy3RkAX_nzPJM&_nc_ht=scontent.famm2-3.fna&oh=906ca549fc6197be062b8bd783401664&oe=61420195",
    github: "https://github.com/ebrahimayyad11",
    Linkedin: "https://www.linkedin.com/in/ebrahim-ayyad/",
  },

  {
    username: "Abdel Hadi Nofal",
    img: "https://avatars.githubusercontent.com/u/79086986?v=4",
    github: "https://github.com/abdelhadi-nofal",
    Linkedin: "https://www.linkedin.com/in/abdel-hadi-nofal-718240185/",
  },
];

export default function about_us() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <PageHeader title="About Us" />
      <Grid container spacing={1}>
        {users.map((item) => (
          <Grid item md={2.8} lg={2.8} spacing={1}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {item["username"].charAt(0)}
                  </Avatar>
                }
                title={item["username"]}
                subheader="Software Developer"
              />
              <CardMedia
                className={classes.media}
                image={item["img"]}
                title={item["username"]}
                style={{ padding: 150 }}
              />
              <CardContent>
                <Typography
                  align="center"
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  <a href={item["facebook"]}>
                    <FacebookIcon style={{ color: blue[500] }} />
                  </a>
                  <a href={item["Linkedin"]}>
                    <LinkedInIcon style={{ color: blue[500] }} />
                  </a>
                  <a href={item["github"]}>
                    <GitHubIcon style={{ color: blue[500] }} />
                  </a>
                </Typography>
              </CardContent>

              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography></Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
about_us.Layout = BeefyWalletAdmin;
