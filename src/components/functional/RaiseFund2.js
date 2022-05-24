import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import Button from '@mui/material/Button'
export default function RaiseFund1({changedata,hand,activeStep,steps}) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) =>{
    changedata(data)
    hand()
  };

  return (
    <React.Fragment>
       <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6" gutterBottom>
    Purpose of Fund Raise
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
           {...register("Needfirstname", { required: true })}
            required
            id="firstName"
            name="Needfirstname"
            label="Needer's first name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
           {...register("Needlastname", { required: true })}
            required
            id="lastName"
            name="Needlastname"
            label="Needer's last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
       
        <Grid item xs={12}>
          <TextField
           {...register("description", { required: true })}
           required 
           id="description"
            name="description"
            label="Short description"
            fullWidth
            autoComplete="Description"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
           {...register("Purpose", { required: true })}
            required
            id="Purpose"
            name="Purpose"
            label="Purpose (ex : Studies,Health Emergency..)"
            fullWidth
            autoComplete="Purpose of fund raise"
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