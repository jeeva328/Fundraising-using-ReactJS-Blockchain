  import  React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button'
//import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RaiseFund1 from './RaiseFund1'
import RaiseFund2 from './RaiseFund2'
import RaiseFund3 from './RaiseFund3'
import axios from "axios"

const steps = ['Details', 'Purpose', 'Wallet Details'];

const theme = createTheme();

export default function ProfileStepper() {
   
const [data1, setdata1] = useState([]);
const [data2, setdata2] = useState([]);
const [data3, setdata3] = useState([]);
  const [activeStep, setActiveStep] = React.useState(0);

  // const handleNext = (event) => {
  //   setActiveStep(activeStep + 1);
  // };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  function getStepContent(step) {
    switch (step) {
      case 0:
        return <RaiseFund1 changedata={(val)=>setdata1({...data1,val})} hand={() => {
          setActiveStep(activeStep + 1)}} activeStep={activeStep} steps={steps} />;
      case 1:
        return <RaiseFund2 changedata={(val)=>setdata2({...data2,val})}  hand={() => {
          setActiveStep(activeStep + 1)}} activeStep={activeStep} steps={steps}/>;
      case 2:
          return <RaiseFund3 changedata={(val)=>setdata3({...data3,val})}  hand={() => {
            setActiveStep(activeStep + 1)}} activeStep={activeStep} steps={steps} />
      default:
        throw new Error('Unknown step');
    }
  }

  if(data1 !== 0)
  {
axios.post("http://localhost:2000/Raiserdet",data1)
  }
  // console.log('====================================');
  // console.log(data1);
  // console.log('====================================');
  // console.log(data2);
  // console.log('====================================');
  // console.log(data3);
  // console.log('-------------------------------------');
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        {/* <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar> */}
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Raise Fund
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Successful.
                </Typography>
                <Typography variant="subtitle1">
                  We have noted down your request for raising fund. We will post
                  your request and it will be ready for receiving donations. Thank You.
                </Typography>
                <br></br>
                <Typography variant = 'p' fontSize='12px'>Team WeUnite
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  {/* <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                      {console.log(activeStep)}
                    {activeStep === steps.length - 1 ? 'Raise Fund' : 'Next'}
                  </Button> */}
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
