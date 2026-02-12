import React from 'react'
import { CardComponent } from './CardComponent'

export const FunctionDemo1 = () => {
    
    const test = ()=>{
        alert("test function is called for you")
    }

    const test2=(x)=>{
        alert("value of x"+x)
    }
  return (
    <div style={{textAlign:"center" ,color:"red"}}>
        <h1>Function Demo</h1>
        <button onClick={test}>Click</button>
        <button onClick={()=>{test2(100)}}>OK</button>
        <CardComponent title="Picture of something" description="this is something"/>
    </div>
  )
}
