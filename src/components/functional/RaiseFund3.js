import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import Button from '@mui/material/Button'
export default function RaiseFund3({changedata,hand,activeStep,steps}) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) =>{
    changedata(data)
    hand()
  };

  return (
    <React.Fragment>
       <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6" gutterBottom>
        Wallet Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
           {...register("Name", { required: true })}
            required
            id="Name"
            label="Wallet Holder's Name"
            fullWidth
            autoComplete="Name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
           {...register("wallet_address", { required: true })}
            required
            id="wallet_address"
            label="Wallet Address"
            fullWidth
            autoComplete="Wallet Address"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
           {...register("amount", { required: true })}
            required
            id="amount"
            label="Amount (in ETH)"
            helperText=""
            fullWidth
            autoComplete="Amount"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
           {...register("expDate", { required: true })}
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        
        <Grid item xs={12}>
          {/* <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
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