import React from 'react'
import { useForm } from 'react-hook-form'

export const LoginForm = () => {
    const{register,handleSubmit,formState:{errors}}=useForm()
    console.log("errors",errors)

    const submithandler= (data) => {
      console.log(data)
      alert("logged in Sucessfully")
    }
    const validationScheme ={
        emailvalidator:{
            required:{
                value:true,
                message:"Email is required"
            },
            max:{
                value:60,
                message:'please enter another email'
            }
        },
        passwordValidator:{
            required:{
                value:true,
                message:"Please Enter The Password"
            }
        },
        min:{
            value : 10,
            message:"It would be more than 10"
        },
        max :{
            value:100,
            message:'it would be less than 100'
        },
        // minLength:{
        //     value:10,
        //     message:"Password length should be more than 10 word"
        // },
        // maxLength:{
        //     value:100,
        //     message:"password length should be less than 100 words"
        // }

    }
    
  return (
    <div style={{color:"skyblue", textAlign:"center"}}>
        <h1>
            Login Form
        </h1>
        <form onSubmit={handleSubmit(submithandler)}>
            <div>
                <label>Email : </label>{" "}
                <input type='text' placeholder='Enter Email' {...register("email",validationScheme.emailvalidator)}></input>
               <span style={{color:"red"}}> {errors.email?.message}</span>
            </div>
            <div>
                <label>Password :</label>{" "}
                <input type='text' placeholder='Enter Password' {...register("password",validationScheme.passwordValidator)}></input>
               <span style={{color:"red"}}> {errors.password?.message}</span>

            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>


    </div>
  )
}