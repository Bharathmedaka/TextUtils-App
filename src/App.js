
import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link, 
// } from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    },1500);

  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} aboutText = "About" />
        <Alert alert = {alert}/>
        <div className='container my-3' >
          <TextForm heading = "Enter the text to analyze below" showAlert = {showAlert}/>
        
          {/* <Routes>
            {/* <Route path='/about' element={<About title="About Us" mode={mode}/>}/> */}
            {/* <Route path='/' element={<TextForm heading = "Enter the text to analyze below" showAlert = {showAlert}/>}/> */}
          {/* </Routes> */} 

        </div>
      {/* </Router> */}
    </>
    
  );
}

export default App;