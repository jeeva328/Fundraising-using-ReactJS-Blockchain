import {React} from 'react';
import './App.css';
import Header from "./components/functional/Header";
import Navbar from "./components/functional/Navbar";
import About from './components/functional/About' ;
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
      </Route>   
    
      <Route exact path = "/About" >
      <Navbar/>
      <About/>
      </Route>   

      <Route path="/Login">
      </Route> 

      <Route path="/Register">
      </Route> 
         

      </Switch>
       </BrowserRouter>
       </QueryClientProvider>
    );
}

export default App;