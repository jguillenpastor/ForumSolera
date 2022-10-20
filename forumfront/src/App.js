import React from 'react';
import './App.css';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import PageThread1 from './Pages/PageThread1';
import PageThread2 from './Pages/PageThread2';





function App() {



  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageThread1 text="Thread1"/>}/>
        <Route path="/thread2" element={<PageThread1 text="Thread2"/>}/> 
        <Route path="/thread3" element={<PageThread1 text="Thread3"/>}/>       
      </Routes>
    </Router>
    
  );
}

export default App;
