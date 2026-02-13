import React from 'react'
import { useForm } from 'react-hook-form'

export const Form4 = () => {
    const{register,handleSubmit,formState:{errors}}= useForm({mode : onchange})
    console.log("errors",errors)

    const submithandler= (data) => {
        console.log(data)
        alert("Form Submited Sucessfully")
      
    }
    const validationScheme  ={
        nameValidator :{
            required:{
                value : true,
                message :"***Please Enter Your Name"
            }
        },
        contactValidator :{
            required :{
                value :true,
                message:"**please enter your contact no"
            },
            pattern:{
                value:/[6-9]{1}[0-9]{9}$/,
                message:"**Enter Valid Contact No"
            }
        },
        promoValidator :{
            required:{
                value : true,
                message:"**please enter Promo code"
            },
            validate : (params) => {
                return params == 2026 || "**invalid promo code"
            }
        },
        hobbyValidator :{
            required :{
                value : true,
                message:"**Please select your hobby"
            },
            validate: (params) => {
               return params?.length>=2 || "**Please select atleast 2 Hobbies"
              
            }
        }

    }



  return (
    <div style={{textAlign:"center", color:"skyblue"}}>
        <h1>Registration form</h1>

        <form onSubmit={handleSubmit(submithandler)}>
            <div>
                <label>Name :</label>{" "}
                <input type='text' placeholder='Enter Name' {...register("name",validationScheme.nameValidator)}></input>
                <span style={{color:"red"}}>{errors.name?.message}</span>
            </div>
            <div>
                <label>Contact No :</label>{" "}
                <input type='number' placeholder='Enter Contact no' {...register("contactno",validationScheme.contactValidator)}></input>
                <span style={{color:"red"}}>{errors.contactno?.message}</span>
            </div>
            <div>
                <label>PROMO CODE :</label>{" "}
                <input type='number' placeholder='Enter promo code' {...register("promocode",validationScheme.promoValidator)}></input>
                <span style={{color:"red"}}>{errors.promocode?.message}</span>
            </div>
            <div>
                <label>Hobbies :</label>{" "}
                <input type='checkbox'  {...register("hobby",validationScheme.hobbyValidator)}></input>Cricket
                <input type='checkbox'  {...register("hobby",validationScheme.hobbyValidator)}></input>BGMI
                <input type='checkbox'  {...register("hobby",validationScheme.hobbyValidator)}></input>Valorant
                <input type='checkbox'  {...register("hobby",validationScheme.hobbyValidator)}></input>Music
                <span style={{color:"red"}}>{errors.hobby?.message}</span>
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>

    </div>
  )
}