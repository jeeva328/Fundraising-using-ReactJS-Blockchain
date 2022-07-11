import {React} from 'react';
import './App.css';
import Header from "./components/functional/Header";
import Navbar from "./components/functional/Navbar";
//import About from './components/functional/About' ;
import HomeStepper2 from './components/functional/HomeStepper2'
import HomeStepper from './components/functional/HomeStepper'
import Home3 from './components/functional/Home3'
import Register from './components/functional/Register'
import Login from './components/functional/Login'
import Profile from './components/functional/Profile';
import ProfileStepper from './components/functional/ProfileStepper'
import Donate from './components/functional/Donate'
import { QueryClientProvider, QueryClient } from "react-query";
import {BrowserRouter , Route , Switch} from  'react-router-dom';

function App() {
  var client = new QueryClient();

    return ( 
      <QueryClientProvider client={client}>

      <BrowserRouter >
      
      <Header title="FUND RAISING" />

      <Switch>
  
      <Route exact path = "/" >
      <Navbar/>
      <Home3/>
      <HomeStepper/>
      <HomeStepper2/>
      </Route>   
    
      {/* <Route exact path = "/About" >
      <Navbar/>
      <About/>
      </Route>    */}

      <Route path="/Login">
        <Login/>
      </Route> 

      <Route path="/Register">
        <Register/>
      </Route> 

       <Route path="/Profile">
      <Navbar/>
      <Profile/>
      </Route>  

      <Route path="/RaiseFund">
      <ProfileStepper/>
      </Route>   

      <Route path = "/Donate">
        <Donate/>
        </Route>  

      </Switch>
       </BrowserRouter>
       </QueryClientProvider>
    );
}

export default App;