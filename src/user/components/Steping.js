import React from 'react'
import  Stepper  from '@material-ui/core/Stepper';
import Step  from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';


export default function Steping() {

  const [activeStep,setActiveStep]=React.useState(0);

  return (
    <div>
        <div className='bookingStatus'>
            <p>
                BOOKING PROGRESS
            </p>
        </div>
        
        <Stepper activeStep={activeStep} orientation="vertical">
            <Step>
                <StepLabel> Select Doctor</StepLabel>
            </Step>
            <Step>
                <StepLabel> Choose Date</StepLabel>
            </Step>
            <Step>
                <StepLabel> Confirm Appointment</StepLabel>
            </Step>
            <Step>
                <StepLabel> login</StepLabel>
            </Step>
            <Step>
                <StepLabel> Booking Confirmed</StepLabel>
            </Step>
        </Stepper>

    </div>
  )
}
