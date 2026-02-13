/* eslint-disable react-hooks/incompatible-library */
import React from 'react'
import { useForm } from 'react-hook-form'

export const Form5 = () => {

    const{register,handleSubmit,formState:{errors},watch}= useForm({mode : onchange})
    console.log("errors",errors)
    
    const password = watch ("password")
    console.log("watching....",password)

 
    const validationSchema = {
        passwordValidator :{
            required:{
                value :true,
                message:"**Please Enter Your Password"
            }
        },
        confirmpasswordValidator: {
            required :{
                value :true,
                message:"**Please Enter confirm password"
            },
            validate: (params) => {
                return params == password || "Confirm password does not match"              
            }

        }
      
    }
       const submithandler= (data) => {
        console.log(data)
        alert("Both passwords are matching")
      
    }

  return (
    <div style={{color:"skyblue", textAlign:"center"}}>
        <h1>Password Maker</h1>
        <form onSubmit={handleSubmit(submithandler)}>
            <div>
                <label>Password : </label>{" "}
                <input type='password' placeholder='enter password' {...register("password",validationSchema.passwordValidator)}></input>
                <span style={{color:"red"}}>{errors.password?.message}</span>
            </div>
            <div>
                <label> Confirm Password : </label>{" "}
                <input type='password' placeholder='enter confirm password' {...register("confirmpassword",validationSchema.confirmpasswordValidator)}></input>
                <span style={{color:"red"}}>{errors.confirmpassword?.message}</span>
            </div>
            <input type='submit'></input>
        </form>


    </div>
  )
}