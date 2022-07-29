 import React from 'react'
 import Chip from '@mui/material/Chip';
 import Stack from '@mui/material/Stack';

 export default function Chips({time}) {
   return (
     <div className='mt-2 mb-7'>
             <Stack direction="row" spacing={1}>
            {
                <Chip label={time} color="primary" />
            }
            
             </Stack>
    </div>
  )
 }
