import  React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import Button from '@mui/material/Button'
//import axios from "axios"

export default function RaiseFund1({changedata,hand,activeStep,steps}) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) =>{
    changedata(data)
    hand()
   console.log(data)
  };

  return (
    <React.Fragment>
       <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6" gutterBottom>
        Fund Raiser's Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
           {...register("firstName", { required: true })}
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
           {...register("lastName", { required: true })}
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
           {...register("address1", { required: true })}
            required
            id="address1"
            name="address1"
            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
           {...register("Mobile", { required: true })}
          required
        id="Mobile"
            name="Mobile"
            label="Contact Number"
            fullWidth
            autoComplete="Contact info"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
           {...register("city", { required: true })}
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
           {...register("state", { required: true })}
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
           {...register("zip", { required: true })}
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
           {...register("country", { required: true })}
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          {/* <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          /> */}
        </Grid>
      </Grid>
      <Button
      type="submit"
                    variant="contained"
                    // onClick={hand}
                    sx={{ mt: 3, ml: 1 }}
                  >
                      {console.log(activeStep)}
                    {activeStep === steps.length - 1 ? 'Raise Fund' : 'Next'}
                  </Button>
      </form>
    </React.Fragment>
  );
}