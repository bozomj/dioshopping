import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button, makeStyles } from '@material-ui/core/';
import Cart from './Cart';

const useStyles = makeStyles((theme) => ({
  nav: {
    padding: "0 25px",
    borderRadius: "10px",
    background: "#089",
    textDecoration: "none" ,
    
  },

  button:{
    color: "#fff",
    fontWeight: "bold",
    fontSize: "16px"
  }
  

  
}));


const Header = () => {
  const classes = useStyles();
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
            <Typography variant='h3'>
                Dio Shopping
            </Typography>
            <Link className={classes.nav} to="/">
                <Button className={classes.button}  >Home</Button>
            </Link>
            <Link className={classes.nav} to="/contato">
                <Button className={classes.button} >Contato</Button>
            </Link>
            <Cart />   

            
        </Grid>
    )
}

export default Header;
