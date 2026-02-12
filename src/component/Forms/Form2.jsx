import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const Form2 = () => {
  const { register, handleSubmit } = useForm();
  const [playerData, setplayerData] = useState({});
  const [isSubmited, setisSubmited] = useState();
  const submithandler = (data) => {
    console.log(data);
    setplayerData(data);
    setisSubmited(true);
  };

  return (
    <div style={{ color: "skyblue" }}>
      <h1 style={{ textAlign: "center" }}> Player Registration Form</h1>
      <form onSubmit={handleSubmit(submithandler)}>
        <div>
          <label>Name : </label>{" "}
          <input
            type="text"
            placeholder="Enter Name"
            {...register("Name")}
          ></input>
        </div>
        <div>
          <label>Age :</label>{" "}
          <input
            type="text"
            placeholder="Enter Age"
            {...register("age")}
          ></input>
        </div>
        <div>
          <label>Gender : </label>{" "}
          <input type="radio" value="male" {...register("gender")}></input>Male
          <input type="radio" value="Female" {...register("gender")}></input>
          Female
        </div>
        <div>
          <lable>Email :</lable>{" "}
          <input
            type="text"
            placeholder="Enter your Email"
            {...register("email")}
          ></input>
        </div>
        <div>
          <lable>Mobile No :</lable>{" "}
          <input
            type="number"
            placeholder="Enter your Mobile No"
            {...register("mobileNo")}
          ></input>
        </div>
        <div>
          <lable>Address :</lable>{" "}
          <input
            type="textarea"
            placeholder="Enter your Address"
            {...register("address")}
          ></input>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
      <br />
      {isSubmited == true && (
        <div>
          <h3>OUTPUT</h3>
          <h6>NAME : {playerData.Name}</h6>
          <h6>AGE : {playerData.age}</h6>
          <h6>GENDER : {playerData.gender}</h6>
          <h6>EMAIL : {playerData.email}</h6>
          <h6>MOBILE NO : {playerData.mobileNo}</h6>
          <h6>ADDRESS : {playerData.address}</h6>
        </div>
      )}
    </div>
  );
};
