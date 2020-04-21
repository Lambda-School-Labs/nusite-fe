import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { useRoutes } from "../../util/routes";
const useStyles = makeStyles(theme => ({
   link: {
      fontFamily: "Arial",
      fontWeight: "bold",
      fontSize: "1rem",
      color: theme.palette.secondary.main,
      textDecoration: "none",
   },
}));

const FooterNav = (props: any) => {
   const classes = useStyles();
   const routes = useRoutes();

   return (
      <Grid container justify="center" alignContent="center" direction="column">
         {routes.map((route: any) => (
            <Grid
               item
               className={classes.link}
               component={Link}
               to={route.link}
            >
               {route.name}
            </Grid>
         ))}
      </Grid>
   );
};

export default FooterNav;
