import React from 'react';
import "./details.css";
import { useHistory } from 'react-router';
import logo from "../../assets/Mapsense Logo.png";
import uuid from 'react-uuid';

const Details = (content,{fetchData}) => {
    const name= localStorage.getItem("fname")+localStorage.getItem("lname");
    let history =useHistory();
    const handleBack=()=>{
        history.push("/")
    }

    return (

        <div className="details">
            <div className="heading">        
                <h2>{name},<span>{localStorage.getItem("pincode")}</span></h2>
                <img src={logo} alt="Covid Background"/>
            </div>
            {content.content.length?<table>
            <tbody>
                <tr>
                    <th>Pincode</th>
                    <th>District Name</th>
                    <th>Name</th>
                    <th>Fee Type</th>
                    <th>State Name</th>
                    <th>Vaccine</th>
                    <th>Age Limit</th>
                    <th>Slots</th>
                </tr>                
                {content&&content.content.map((c)=>{
                    return(
                    <tr key={uuid()}>
                        <td>{c.pincode}</td>
                        <td>{c.district_name}</td>
                        <td>{c.name}</td>
                        <td>{c.fee_type}</td>
                        <td>{c.state_name}</td>
                        <td>{c.vaccine}</td>
                        <td>{c.min_age_limit}</td>
                        <td>{c.slots.map(s=><h6  key={uuid()} className="timing" >{s}</h6>)}</td>
                    </tr> 
                )})}
                </tbody>
            </table>
            :
            <div className="nodata">
                <h4>
                    Sorry,For the inconvience caused.Do check the credentials OR 
                </h4>
                <h2>
                    NO SLOTS AVAILABLE
                </h2>
            </div>
            }
            <div className="buttons">
                <button className="back" onClick={handleBack}>Back</button>
                {content.content.length?<button className="update" onClick={fetchData}>Update</button>:""}
            </div>               
        </div>
     );
}
 
export default Details;