import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React from 'react';
import About from './Components/About';
import { BrowserRouter,Routes,Route, createBrowserRouter,RouterProvider } from 'react-router-dom';
import Contact from './Components/Contect';


function App() {
return (
    <div>
    <BrowserRouter>
       <Navbar title="Text Converter-App" dis="About"/> 
       <Routes>
        <Route path="/" element={<Textform heading={"Enter the Text"}/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/contact" element={<Contact/>}/>

       
       </Routes>
    </BrowserRouter>
</div> 
    
  );
}

export default App;