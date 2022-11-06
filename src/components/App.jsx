
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/index.css"
import Detail from './Detail';
function App() {
  
  return(
  <BrowserRouter>
     <Header/>
      <Routes>
      <Route path="/" element={  <Detail/> }/> 
      </Routes>
     <Footer/> 
  </BrowserRouter>
   
  )
}




export default App;

