
import './App.css';
// import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React,{useState} from 'react';
// import {
//   Route,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode, setMode]=useState(`light`);
  const [alert, setAlert]=useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type 
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);

  }
  

  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor="#042743";
    showAlert("dark mode enabled","success");
  }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("light mode enabled","success");
    }
  }
  return (
<>
  
     <NavBar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>


  <div className="container my-3">
  
    {/* <Routes> */}
        {/* <Route exact */}
          {/* path="/" */}
          {/* element={ */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
            {/* // } */}
        {/* /> */}
        {/* <Route exact path="/about" element={<About />} /> */}
      {/* </Routes> */}
   </div>
  

  </>  
  );
}

export default App;
