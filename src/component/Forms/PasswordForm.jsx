/* eslint-disable react-hooks/incompatible-library */
import React from "react";
import { useForm } from "react-hook-form";

export const PasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" });
  console.log("errors...", errors);

  const password = watch("password") || "";
  console.log("watching...", password);

  const submithandler = (data) => {
    console.log(data);
    alert("Password Created sucessfully");
  };
  const validationScheme = {
    passwordValidator: {
      required: {
        value: true,
        message: "**Password is required",
      },
      validate: {
        capital: (value) => {
          return (
            /[A-Z]/.test(value) || "**Password Must contain one capital letter"
          );
        },
        small: (value) => {
          return (
            /[a-z]/.test(value) || "**Password must contain one small letter"
          );
        },

        specialchar: (value) => {
          return (
            /[!@#$%^&*]/.test(value) ||
            "Password must include alteast one special character"
          );
        },
        digit: (value) => {
          return (
            /[0-9]/.test(value) || "Password must include atleast one digit"
          );
        },
        length: (value) => {
          return (
            value.length >= 8 || "**Password must be atleast 8 characters long"
          );
        },
      },
    },
  };

  return (
    <div style={{ color: "skyblue", textAlign: "center" }}>
      <h1>Password Game </h1>
      <form onSubmit={handleSubmit(submithandler)}>
        <div>
          <label>Password : </label>{" "}
          <input
            type="password"
            placeholder="Enter Password"
            {...register("password", validationScheme.passwordValidator)}
          ></input>
          <span style={{ color: "red" }}>{errors.password?.message}</span>
        </div>
        <div>
          <input type="submit" />
        </div>
        <div>
          <h5 style={{ color: /[A-Z]/.test(password) ? "green" : "red" }}>
            **1.....Min 1 letter must be capital
          </h5>
          <h5 style={{ color: /[a-z]/.test(password) ? "green" : "red" }}>
            **2.....Min 1 letter must be small
          </h5>
          <h5 style={{ color: /[!@#$%^&*]/.test(password) ? "green" : "red" }}>
            **4.....Atleast 1 special character added
          </h5>
          <h5 style={{ color: /[0-9]/.test(password) ? "green" : "red" }}>
            **5.....Password must include 1 digit
          </h5>
          <h5 style={{ color: password.length >= 8 ? "green" : "red" }}>
            **3.....Password length must be 8{" "}
          </h5>
        </div>
      </form>
      <h5>{password}</h5>
    </div>
  );
};