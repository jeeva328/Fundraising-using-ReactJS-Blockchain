import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
import axios from "axios"
import Cookie from 'cookie-universal'
// import axios from "axios"
import { Redirect } from "react-router-dom";
// import Cookies from 'universal-cookie';

import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// const validate = (values) => {
//   let error = {};

//   if (!values.email) {
//     error.email = "* Required Field";
//   }
//   if (!values.pass) {
//     error.pass = "* Required Field";
//   }
//   return error;
// };

// const cookies = new Cookies();
// cookies.set('login', "false");
// var login = false;

const theme = createTheme();

export default function SignIn() {
    const [loading, setloading] = useState(false);
    const cookies = Cookie()
    const [login, setlogin] = useState(cookies.get("login"));
    useEffect(() => {
        console.log("jeeva");
    }, [login]);

    const handleSubmit = async(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const init = {
            email: data.get('email'),
            password: data.get('password'),
        }
        var Data = await axios.post("http://localhost:2000/Login", init)
           // console.log("data", init)
            //console.log("dataaaaaaaa", Data.data.err)
        console.log("data login", Data.data);
        if (Data.data.err == null) {
            console.log("it is not err")
            setloading(true)
            cookies.set('login', "true");
            cookies.set('email', data.get('email'));
            setlogin(cookies.get("login"))
        }
        console.log(init)

    }

    console.log("login", loading);

    let a = cookies.get("login")
    if (a === true) {
        console.log("jeeva");
        return <Redirect to = {
            { pathname: '/Profile' }
        }
        />
    }

    return ( 
    < ThemeProvider theme = { theme } >
        <Container component = "main"
        maxWidth = "xs" >
        <CssBaseline />
        <Box sx = {
            {
                marginTop: 14,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }
        } >
        <Avatar sx = {
            { m: 1, bgcolor: 'secondary.main' }
        } >
        <LockOutlinedIcon />
        </Avatar> 
        <Typography component = "h1"
        variant = "h5" >
        Sign in
        </Typography> 
        
        <Box component = "form"
        onSubmit = { handleSubmit }
        noValidate sx = {
            { mt: 1 }
        } >

        <TextField margin = "normal"
        required fullWidth id = "email"
        label = "Email Address"
        name = "email"
        autoComplete = "email"
        autoFocus />

        <TextField margin = "normal"
        required fullWidth name = "password"
        label = "Password"
        type = "password"
        id = "password"
        autoComplete = "current-password" />

        {/* <FormControlLabel control = { < Checkbox value = "remember"
            color = "primary" 
            label = "Remember me"/>         
        }/> */}
        
        <Button
        type = "submit"
        fullWidth variant = "contained"
        sx = {
            { mt: 3, mb: 2 }
        }>
        Sign In 
        </Button>
 
        </Box > 
        </Box> 
        </Container > 
        </ThemeProvider>
    );
}