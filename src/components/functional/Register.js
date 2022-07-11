import React,{useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Redirect } from "react-router-dom";
// import DatePicker from '@mui/lab/DatePicker';
///import FormControlLabel from '@mui/material/FormControlLabel';
import axios from "axios"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import PhoneInput from 'react-phone-input-2'

const theme = createTheme();

export default function SignUp() {
    
  const [red, setred] = useState("");
   useEffect(() => {
    
   }, [red]);
   
  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
   const getdetails = {
        firstName : data.get("firstName"),
        lastName : data.get("lastName"),
        dob : data.get("dob"),
        mobile : data.get('mobile'),
        email: data.get('email'),
        password: data.get('password')
    }
    console.log(getdetails);
    
    await axios.post("http://localhost:2000/signup",getdetails)

    setred("--")
  
  };
  
   
    if(red === "--"){
      return  <Redirect to = {
        { pathname: '/login' }
    }
    />
    }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 11,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} Validate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  type="text"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  type="text"
                />
              </Grid>

               <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="dob"
                  label="DOB"
                  name="dob"
                  autoComplete="dob"
                  type = "date"
                />
                </Grid>
              {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
              </LocalizationProvider>
              </Grid> */}

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="mobile"
                  label="Contact Number"
                  name="mobile"
                  type="tel"
                  autoComplete="mobile"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  type = "email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>                               
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}