import React from "react";
import  {useEffect,useState} from 'react'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import axios from "axios"
import { Button, TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import web3 from "./web3";
import fund from "./fundraise";


function createData(id,nameN, purpose , amt ,raisedby , des , walladd , mob , zip,raised) {
  return {
    id,
    nameN,
    purpose,
    amt,
    raisedby,
    des,
    walladd,
    mob,
    zip,
    raised
  };
}

function Row(props) {
  const {row} = props;
  const [open, setOpen] = React.useState(false);

  ////////////////////
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const theme = createTheme();

   var init = {
    w_add : "",
    d_amt : 0,
  }
  //function
  const Donatepage = (props) => {

    console.log("Get details",props)
    
    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const close = () =>{
    setOpen(false)
  }
  const onSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    init = {
      w_add: data.get('wallet_address'),
      d_amt: data.get('fund'),
    }
    if(init.d_amt == 0 || init.w_add == "")
    {
      await alert ("Check the entered fields and try again")
    }
    if(init.d_amt != 0 && init.w_add != "")
    {
      const accounts  = await web3.eth.getAccounts();
      await fund.methods.donate(init.w_add).send({
        from: accounts[0],
        value: init.d_amt,
      });
   await alert("Transaction successful")

   let d = {
     _id:props.data.id,
     raised:parseInt(init.d_amt) + parseInt(props.data.raised)
  };
   await axios.put("http://localhost:2000/Raiserdet",d)
   await setOpen(false);
    }
    console.log("props.data.raised",props.data.raised);
    console.log('====================================');
    console.log(" props.data.amt", props.data.amt);
    console.log('====================================');
    if(props.data.raised + init.d_amt >= props.data.amt)
    {console.log("hey, iam inside");
      let dat = {
        data: {
          _id: props.data.id,
        },
      };
     
     await axios.delete("http://localhost:2000/Raiserdet",dat)
    }
    console.log("donate data info :",init)
    console.log("id:",props.data.id)
  };


    return(
      <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        DONATE
      </Button>
      <Dialog
        fullScreen
        open={open}
        //onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={close}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Donate Fund
            </Typography>
            {/* <Button autoFocus color="inherit" >
              save
            </Button> */}
          </Toolbar>
        </AppBar>
       
       {/*Form*/}
       {/* <form onSubmit={handleSubmit(onSubmit)}> */}
       <ThemeProvider theme={theme}>
      <Container component="main"  sx={{ width : 1500}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 14,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Typography component="h8" variant="h9">
            Needer's Name : {props.data.nameN}
          </Typography>
          <Typography component="h8" variant="h9">
            Wallet Address : {props.data.walladd}
          </Typography>
          <Typography component="h8" variant="h9">
            Fund Needed : {props.data.amt}
          </Typography>
          <Typography component="h8" variant="h9">
            Fund Raiser's Name : {props.data.raisedby}
          </Typography>
        
          <Box component="form" onSubmit={onSubmit} Validate sx={{ mt: 1 ,
          position : "absolute",
          top : 300,
          }}>
            <TextField
              margin="normal"
              required 
              fullWidth
              id="wallet_address"
              label="Wallet Address"
              name="wallet_address"
              autoComplete="wallet_address"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="fund"
              label="Amount (in Wei)"
              type="number"
              id="fund"
              autoComplete="fund"
            />
    
            <Button
            //onClick={handleClose}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              
            >
              Donate
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    {/* </form> */}
       {/*Form*/}
       
       </Dialog>
    </div>
    );
  }
  /////////////////////////

  return (
    <React.Fragment>
       <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
         <TableCell>{row.nameN}</TableCell>
         <TableCell>{row.purpose}</TableCell>
         <TableCell>{row.amt}</TableCell>
         <TableCell>{row.raisedby}</TableCell>
        
  </TableRow>
    <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div" sx={{fontWeight : "bold"}}>
                Other Details :
              </Typography>
              <Typography varia nt = "h7" gutterBottom component = 'div' >
                Description: {row.des} <br></br>
                Wallet address: {row.walladd}<br></br>
                Contact Info: {row.mob}<br></br>
                ZIP Code: {row.zip} <br></br>
                Amount Raised :{row.raised}/{row.amt}
              </Typography>

              
              <Donatepage data = {row}/>

            </Box>
          </Collapse> 
        </TableCell>

      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    purpose: PropTypes.string.isRequired,
    amt: PropTypes.number.isRequired,
    raisedby: PropTypes.string.isRequired,
    nameN: PropTypes.string.isRequired,
    des:PropTypes.string.isRequired,
    walladd:PropTypes.string.isRequired,
    mob:PropTypes.number.isRequired,
    zip:PropTypes.number.isRequired, 
  }).isRequired,
};


export default function CollapsibleTable() {

  const [details, setdetails] = useState(null);
  const [load , setload] = useState(true)
  const [change , setchange] = useState(null)
  //const [inc, setinc] = useState(0);

  useEffect(()=> {
    async function fetchdata() {
    await axios.get("http://localhost:2000/Raiserdet").then((data)=>{
   setload(false)
   setdetails(data.data)
   console.log(details)
  })
  }
  fetchdata();
  },[load]);

  //console.log("details outside",details[0])
  if(!details)
  {
   return <h1>Loading....</h1>
  }
 
 
 console.log(details);
  
  const filterRows = details.filter((val)=>
     {
       let se = change
       return (val.Purpose.includes(se) || val.Needfirstname.includes(se)) }
  );

  //console.log(filterRows);
  var detailsarr = filterRows.length ===0?details:filterRows


  const rows = detailsarr.map(
    (val)=>createData (val._id,val.Needfirstname , val.Purpose, val.amount , val.firstName ,
      val.description , val.wallet_address , val.mobile , val.zip,val.raised)
    );
 
 return (
    <TableContainer component={Paper} sx = {
{
  position : 'absolute',
  top : 80,
}
    }>
      
      <TextField
              margin="normal"
              fullWidth
              id="filter"
              label="Search"
              name="search"
              autoComplete="search"
              autoFocus
              onChange={(e)=>setchange(e.target.value)}
            />

      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell sx={{fontWeight : "bold"}}>Needer's Name</TableCell>
            <TableCell sx={{fontWeight : "bold"}}>Purpose</TableCell>
            <TableCell sx={{fontWeight : "bold"}}>Amount&nbsp;(in wei)</TableCell>
            <TableCell sx={{fontWeight : "bold"}}>Fund Raised By</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell>
           */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((r) => (
          <Row row={r} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
