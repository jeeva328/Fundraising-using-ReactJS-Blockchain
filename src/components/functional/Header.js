import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HandshakeIcon from '@mui/icons-material/Handshake';

function Header(props) {


  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', position : 'relative' }}>
       
        <Typography
          variant="h3"
          color="#fafafa"
          align="center"
          noWrap
          sx={{ flex: 1,
          background : '#2196f3',
          padding : 1,
          position:'relative' 
          }}
        >
          WeUnite 
          <HandshakeIcon color='#e3f2fd' sx={{
   fontSize : 45,
   position : 'relative',
   left : 15,
   top : 5
}}>
  </HandshakeIcon>
      </Typography>
      </Toolbar>
    
    </React.Fragment>
  );
}


export default Header;