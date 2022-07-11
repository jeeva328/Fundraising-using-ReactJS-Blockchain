import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://media.istockphoto.com/photos/modern-white-keyboard-wih-donate-button-picture-id1320051999?b=1&k=20&m=1320051999&s=170667a&w=0&h=vkNQUK7OTajeokYGmERzmUJ09TX06oNX4n-1qRlQ9Lo=',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1626162987518-4fee900a9323?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZXRoZXJldW18ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1639815188546-c43c240ff4df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsb2NrY2hhaW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVscGluZyUyMGhhbmR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1 ,
    position : 'absolute',
    bottom :300,
    width : 1250,
    left : 250
    }}>
      {/* <Paper
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
        <Typography>{images[activeStep].label}</Typography>
      </Paper> */}
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  maxHeight: 328,
                  display: 'block',
                  maxWidth: 1370,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
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

export default SwipeableTextMobileStepper;
