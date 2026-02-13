import React from 'react'
import { useForm } from 'react-hook-form'

export const PasswordForm = () => {

    const{register,handleSubmit,formState:{errors}}=useForm({mode:onchange})
    console.log("errors...",errors)

    const submithandler=(data) => {
        console.log(data)
        alert("Password created Sucessfully")
      
    }

  return (
    <div style={{color:"skyblue",textAlign:"center"}}>
        <h1>Password Game </h1>
        <form onSubmit={handleSubmit(submithandler)}>
            <div>
                <label>Password : </label>{" "}
                <input type='password' placeholder='Enter Password'{...register("password")}></input>
            </div>
        </form>


    </div>
  )
}