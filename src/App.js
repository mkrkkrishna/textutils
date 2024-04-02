import "./App.css";
import Navabar from "./component/Navabar";
import TextForm from "./component/TextForm";
import React, { useState } from "react";
import Alert from "./component/Alert";
import About from "./component/About";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether  dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const removeBodyClass=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }

  const toggleMode = (cls) => {
    removeBodyClass();
    console.log(cls);
    document.body.classList.add('bg-'+cls);
    if (mode === "primary") {
      setMode("primary");
      document.body.style.backgroundColor = "#0d6efd";
      showAlert("Dark Mode has been enables", "success");
      
    } 
    else if(mode === "danger") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enables", "success");
      
    }else if (mode === "success") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enables", "success");
      
    }else if (mode === "warning") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Warning Mode has been enables", "success");
      
    }else if (mode === "dark"){
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been enables", "success");
    }
    else if (mode ==="light"){
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enables", "success");
    }
  };

  return (
    <>
      <Router>
        <Navabar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}/>
            <Route exact path="/" element={<TextForm
                showAlert={showAlert}
                heading="Try TextUtils - Word counter, Character counter, Remove Extra Spaces"
                mode={mode}
              />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
