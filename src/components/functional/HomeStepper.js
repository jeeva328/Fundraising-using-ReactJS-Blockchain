import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const steps = [
  {
    label: 'REGISTER OR LOGIN', 
    description: `Kindly do register in the website inorder to become a donour or 
    to raise fund. If you have already registered , do login to donate or raise funds.`,
  },
  {
    label: 'DONATE FUND',
    description:
      'Your donation is someone’s problem solution . Donation is more than just help. Start contributing for needy ones. ',
  },
  {
    label: 'RAISE FUND',
    description: `Raise funds by filling the form with all required data. 
    Donours will directly send the funds to your ethereum wallet`,
  },
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 415, flexGrow: 1 ,
    position:'absolute',
    bottom: 13,
    left : 1100,
    boxShadow:4,
    }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
      
          bgcolor: 'background.default',
        }}
      >
        <Typography color = '#fafafa' sx={{background :'#2196f3',
         paddingTop:.5,
         paddingBottom:.5,
         paddingLeft :.5,
         paddingRight : .5

    }}>{steps[activeStep].label}</Typography>

      </Paper>
      <Box sx={{ height: 155, maxWidth: 400, width: '100%', p: 2 }}>
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
