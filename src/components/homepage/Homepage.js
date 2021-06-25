import React from 'react';
import { useHistory } from 'react-router';
import "./homepage.css";
import img from "../../assets/Covid Background.png";
import logo from "../../assets/Mapsense Logo.png";


const Homepage = ({fname,lname,pincode,setFname,setLname,fetchData,setPincode,content}) => {
    let history =useHistory();
    const handleSubmit=(e)=>{
        e.preventDefault();
        fetchData();
        history.push("/vaccine_tracker/vaccine_information");

        
    }
    const handleReset=()=>{
        document.getElementById("form").reset();
    }
    return ( 
        <div className="homepage">
            <img src={img} alt="Covid Background"/>
            <div className="right_content">
                <img src={logo} alt="Covid Background"/>
                <div className="form">
                    <form onSubmit={handleSubmit} id="form">
                        <label>First Name</label><br/>
                        <input type="text" placeholder="Enter First Name"  onChange={(e)=>setFname(e.target.value)} required/><br/>
                        <label>Last Name</label><br/>
                        <input type="text" placeholder="Enter Last Name"   onChange={(e)=>setLname(e.target.value)} required/><br/>
                        <label>Pincode</label><br/>
                        <input  type="number" placeholder="Enter Pincode"  onChange={(e)=>setPincode(e.target.value)} required/><br/>
                        <input className="stats"  type="submit" value="Show Statistics" />
                    </form>
                    <button className="reset" onClick={handleReset}> Reset Form</button>
                </div>
            </div>
        </div>
     );
}
 
export default Homepage;