import axios from "axios";
import React from "react";
import { useState } from "react";



export const ApiDemo1 = () => {

    const [message, setmessage] = useState("")
    const [userdata, setuserdata] = useState([])

  const getUser = async () => {
    const response = await axios.get("https://node5.onrender.com/user/user/");
    console.log(response);
    console.log(response.data)
    console.log(response.data.message)
    console.log(response.data.data)
    setmessage(response.data.message)
    setuserdata(response.data.data)
  };

  return (
    <div style={{ color: "skyblue", textAlign: "center" }}>
      <h1>API Demo 1</h1>
      <button
        onClick={() => {
          getUser();
        }}
      >
        Get
      </button>
      <h3>Message : {message}</h3>
      <table className="table table-dark">
        <thead>
            <tr>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>AGE</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {
            userdata.map((user) => {
                return <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>{user.isActive ? "Active" : "Inactive"}</td>

                </tr>
              
            })
        }
        </tbody>
      </table>
      

    </div>
  );
};