import React from 'react'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
export default function Profile() {
  return (
    <div>
      <Link href = "/Donate" underline = "none" color = "#424242">
        <Typography  sx={{ maxWidth: 345, 
    position:'absolute',
    bottom:16,
    left : 660,
    height:650,
    }} gutterBottom variant="h5" component="div">
         Donate
          </Typography>
      </Link>


      <Link href = "/RaiseFund" underline = "none" color = "#424242">
          <Typography  sx={{ maxWidth: 345, 
    position:'absolute',
    bottom:16,
    left : 760,
    height:650,
    }} gutterBottom variant="h5" component="div">
         Raise fund
          </Typography>
          </Link>
          
    </div>
  )
}
