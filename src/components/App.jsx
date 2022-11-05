
import {Route, Routes} from 'react-router-dom'
import React from "react";
import Header from "./Header";
import Post from "./Post";
import SinglePost from "./SinglePost"
import Footer from "./Footer";
import "../styles/index.css"
function App() {
  
  return(
  <div>

{/* <BrowserRouter> */}
{/* <Route exact  */}
{/* // </BrowserRouter> */}

     <Header/>
     <Routes>
     <Route path='/single-post/:id'  element={<SinglePost />} />
     </Routes>
     {/* <About/> */}
      <Post/> 
     <Footer/> 

  
  </div>
   
  )
}




export default App;

