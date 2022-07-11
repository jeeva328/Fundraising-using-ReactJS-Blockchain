import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Cookies from "cookie-universal"
import { Redirect } from "react-router-dom";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';

const card1 = (
    <React.Fragment>
      <CardContent
      sx={{backgroundColor : '#e3f2fd'}}>   
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        TOGETHER WE CAN!
        </Typography>
        <Typography gutterBottom>
        Raise fund through WeUnite 
        </Typography>

        <Link href = "/RaiseFund"
        underline = "none"
        color = "#424242" >
        
        < Typography 
        gutterBottom variant = "h5"
        component = "div"
        color = "primary" >
        Raise fund 
        </Typography> 
        </Link >
        </CardContent>  
    </React.Fragment>
  );

  const card2 = (
      <React.Fragment>
              <CardContent
                sx={{backgroundColor : '#e3f2fd'}}>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    GIVING IS THE GREATEST ACT OF GRACE
    </Typography>

    <Typography gutterBottom>
        Donate via ethereum for secure payments 
    </Typography>

  <Link href = "/Donate"
    underline = "none"
    color = "#424242" >
    
    <Typography 
    gutterBottom variant = "h5"
    component = "div" 
    color = "primary">
    Donate 
    </Typography> 
    </Link>
    </CardContent>
  </React.Fragment>

  )

 const card3 = (

        <React.Fragment>
                <CardContent
                  sx={{backgroundColor : '#e3f2fd'}}>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       REPORT BY ETHERSCAN
      </Typography>
      <Typography gutterBottom>
          Track all the transactions of this smart contract
      </Typography>
  
    <Link href = "https://rinkeby.etherscan.io/address/0x1783de8605538b0A1882eD523b6E8fB051ee9356"
      underline = "none"
      color = "#424242" >
      
      <Typography 
      gutterBottom variant = "h5"
      component = "div" 
      color = "primary">
      Report
      </Typography> 
      </Link>
      </CardContent>
    </React.Fragment>
  
 )


export default function Profile() {
    const [log, setlog] = useState("");

    useEffect(() => {
     
    }, [log]);
    const cookies = Cookies()

    let login = cookies.get("login")

    if (login !== true) {
        return <Redirect to = {
            { pathname: '/login' }
        }
        />
    }

    const logout = ()=>{
        console.log('====================================');
        console.log("logged out");
        console.log('====================================');
        cookies.set("login","false")
        setlog("--")
        return  <Redirect to = {
            { pathname: '/login' }
        }
        />
    }

    return (
        <div>
        <Button onClick={logout}>Logout</Button> 

        <Box
        sx={{
            height : 100,
            width : 1000,
            position:'absolute',
            bottom: 520,
            left: 350,
            backgroundColor : 'primary'
           }}>

      <Card 
  
      variant="outlined"> 
      {card1}</Card>
<br></br>
      <Card 
      variant="outlined"> 
      {card2}</Card>
<br></br>
      <Card 
      variant="outlined"> 
      {card3}</Card>

    </Box>
    </div>
    )
}

