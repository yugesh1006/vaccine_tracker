import './app.css';
import Details from './components/details/Details';
import Homepage from './components/homepage/Homepage';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import React,{ useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [fname,setFname]=useState("");
  const[lname,setLname]=useState("");
  const[pincode,setPincode]=useState("");
  const[content,setContent]=useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=25-06-2021`
      );
      setContent(data.sessions);
    } catch (error) {
      alert("please enter vaild credentials");
    } 
  };
  useEffect(() => {
    localStorage.setItem("fname",fname);
    localStorage.setItem("lname",lname);
    localStorage.setItem("pincode",pincode);
    localStorage.setItem("content",JSON.stringify(content));
    return () => {
    }
  }, [fname,lname,pincode,content])

  return (
    <BrowserRouter>
      <div className="app">
      <Switch>
        <Route exact path="/">
          <Homepage
            fname={fname}
            setFname={setFname}
            lname={lname}
            setLname={setLname}
            fetchData={fetchData}
            pincode={pincode}
            setPincode={setPincode}
            content={content}
          />
        </Route>
        <Route exact path="/vaccine_information">
          <Details 
          content={content} 
          pincode={pincode}
          lname={lname}
          fname={fname}
          fetchData={fetchData}
          />
        </Route>
      </Switch>
      </div>
    </BrowserRouter> 
  );
}

export default App;
