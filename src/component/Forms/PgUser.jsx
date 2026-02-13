import React from "react";
import { useForm } from "react-hook-form";

export const PgUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({mode :onchange});
  console.log("errors", errors);

  const submithandler = (data) => {
    alert("Form submitted Sucessfully");
    console.log(data);
  };
  const validationSchema = {
    nameValidator: {
      required: {
        value: true,
        message: "**Name is required",
      },
    },
    numberValidator: {
      required: {
        value: true,
        message: "**Please Enter your Mobile No",
      },
      minLength: {
        value: 10,
        message: "**Number Can't be less than 10 digit",
      },
      maxLength: {
        value: 10,
        message: "**Number can't be above 10 digit",
      },
    },
    ageValidator: {
      required: {
        value: true,
        message: "**Age is Required",
      },
      min: {
        value: 13,
        message: "**Min age should be 13 years",
      },
      max: {
        value: 50,
        message: "**Max age should be 50 years",
      },
    },
    addressValidator: {
      required: {
        value: true,
        message: "**Enter Address please",
      },
      max: {
        value: 255,
        message: "**max value is 255 characters",
      },
    },
    genderValidator: {
      required: {
        value: true,
        message: "**Please select your gender",
      },
    },
  };

  return (
    <div style={{ color: "skyblue" }}>
      <h1>PG USER FORM</h1>
      <form onSubmit={handleSubmit(submithandler)}>
        <div>
          <label>Name :</label>{" "}
          <input
            type="text"
            placeholder="Enter Name"
            {...register("name", validationSchema.nameValidator)}
          ></input>
         <span style={{color:"red"}}> {errors.name?.message}</span>
        </div>
        <div>
          <label>Mobile No :</label>{" "}
          <input
            type="number"
            placeholder="Enter Mobile No"
            {...register("mobileno", validationSchema.numberValidator)}
          ></input>
          <span style={{color:"red"}}> {errors.mobileno?.message}</span>
        </div>
        <div>
          <label>Gender :</label>
          {"  "}
          <input
            type="radio"
            value="male"
            {...register("gender", validationSchema.genderValidator)}
          ></input>
          Male{" "}
          <input
            type="radio"
            value="female"
            {...register("gender", validationSchema.genderValidator)}
          ></input>
          Female{"      "}
          <span style={{color:"red"}}> {errors.gender?.message}</span>
        </div>
        <div>
          <label>Age :</label>{" "}
          <input
            type="number"
            placeholder="Enter age"
            {...register("age", validationSchema.ageValidator)}
          ></input>
          <span style={{color:"red"}}> {errors.age?.message}</span>
        </div>
        <div>
          <label>Address :</label>{" "}
          <input
            type="textbox"
            placeholder="Enter Address"
            {...register("address", validationSchema.addressValidator)}
          ></input>
          <span style={{color:"red"}}> {errors.address?.message}</span>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};