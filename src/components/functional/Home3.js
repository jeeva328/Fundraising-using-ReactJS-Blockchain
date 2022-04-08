import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import HandshakeIcon from '@mui/icons-material/Handshake';

export default function BoxSx() {
  return (
    <Box
      sx={{
        width: 850,
        height: 275,
        boxShadow:2,
        backgroundColor: '#fafafa',
        position :'absolute',
        bottom:15,
        left :245,
      }}>

      <Paper
       rectangle
       elevation={6}
       sx={{
         display: 'flex',
         position:'relative',
         alignItems:'center',
         bottom:10,
         height: 20,
         p: 4,
         bgcolor: 'background.default',
         background : '#2196f3'
       }}
      >
<Typography color='#fafafa' variant='h4'> Welcome to WeUnite 

 <HandshakeIcon color='#e3f2fd' sx={{
   fontSize : 40,
   position : 'relative',
   left : 15,
   top : 5
}}>
  </HandshakeIcon>
  </Typography>
      </Paper>
<br></br>
<Typography variant ='h6' align='justify'>
 &nbsp;&nbsp; WeUnite is a Blockchain based Decentralized Web Application where we make secure
 transactions . Trusted application for donating funds to needy . All transactions are transparent which 
 can be viewed through EtherScan . ClickHere for more info.<br></br><br></br>
 Let's unite to help ! 
</Typography>

      
      </Box>

    
  );
}
