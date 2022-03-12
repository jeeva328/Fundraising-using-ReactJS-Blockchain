import React from "react";
import './App.css';
import Title from "./components/functional/Title";
import Menu from "./components/functional/Menu";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  var client = new QueryClient();

    return ( 
      <QueryClientProvider client={client}>

      <BrowserRouter >
      <Title/>
      <Menu/>

        <Routes>

          <Route>

          </Route>


        </Routes> 
        
        </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;