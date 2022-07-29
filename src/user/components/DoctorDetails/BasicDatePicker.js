import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function BasicDatePicker({toggleDisplayTime,updateStep}) {
  const [value, setValue] = React.useState(null);


  return (
  
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Choose Your  Date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          toggleDisplayTime();
          updateStep();
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      
    </LocalizationProvider>
 
  );}
