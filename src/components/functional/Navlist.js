import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import HomeIcon from '@mui/icons-material/Home';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import LinkIcon from '@mui/icons-material/Link';
import InfoIcon from '@mui/icons-material/Info';
import Link from '@mui/material/Link';


export const mainListItems = ( 
    <React.Fragment >
    <Link href = "/"
    underline = 'none'
    color = "#424242" >
    <ListItemButton >
    <ListItemIcon >
    <HomeIcon />
    </ListItemIcon> 
    <ListItemText primary = "Home" />
    </ListItemButton> 
    </Link>

    <Link href = "/Register"
    underline = "none"
    color = "#424242" >
    <ListItemButton >
    <ListItemIcon >
    <AppRegistrationIcon />
    </ListItemIcon> 
    <ListItemText primary = "Register" />
    </ListItemButton> 
    </Link>

    <Link href = "/Login"
    underline = "none"
    color = "#424242" >
    <ListItemButton >
    <ListItemIcon >
    <LoginIcon />
    </ListItemIcon> 
    <ListItemText primary = "Login" />
    </ListItemButton> 
    </Link>

    {/* <
    Link href = "/Login"
    underline = "none"
    color = "#424242" >
    <
    ListItemButton >
    <
    ListItemIcon >
    <
    LoginIcon / >
    <
    /ListItemIcon> <
    ListItemText primary = "Login" / >
    <
    /ListItemButton> <
    /Link> */}


    <Link href = "/Profile"
    underline = "none"
    color = "#424242" >
    <ListItemButton >
    <ListItemIcon >
    <PersonIcon />
    </ListItemIcon>
     <ListItemText primary = "Profile" />
    </ListItemButton> 
    </Link>

    </React.Fragment>
);


export const secondaryListItems = ( 
    <React.Fragment >
    
    <ListSubheader component = "div"inset >
    Some Useful Links 
    </ListSubheader>

    <Link href = 'https://rinkeby.etherscan.io/'
    underline = 'none'
    color = "#424242" >
    <ListItemButton >
    <ListItemIcon >
    <LinkIcon />
    </ListItemIcon> 
    <ListItemText primary = "Etherscan" />
    </ListItemButton> 
    </Link>

    <Link href = 'https://www.blockchain.com/'
    underline = 'none'
    color = "#424242" >
    <ListItemButton >
    <ListItemIcon >
    <LinkIcon />
    </ListItemIcon> 
    <ListItemText primary = "BlockChain" />
    </ListItemButton> 
    </Link>

    <Link href = 'https://ethereum.org/en/'
    underline = 'none'
    color = "#424242" >
    <ListItemButton >
    <ListItemIcon >
    <LinkIcon />
    </ListItemIcon> 
    <ListItemText primary = "Ethereum" />
    </ListItemButton>   
    </Link>

    
    </React.Fragment>
);