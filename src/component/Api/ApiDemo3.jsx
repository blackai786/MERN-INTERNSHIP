import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export const ApiDemo3 = () => {
    const [comments, setcomments] = useState([])

    const getUser = async() => {
        const response = await axios.get("https://dummyjson.com/comments")
        console.log(response.data)
        setcomments(response.data.comments)
    }

  return (
    <div style={{textAlign:"center", color:"skyblue"}}>
        <h1>Api demo 3</h1>
        <button onClick={() => {getUser()}}>GET COMMENTS</button>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>body</th>
                    <th>postId</th>
                    <th>likes</th>
                </tr>
            </thead>
            <tbody>
                {
                    comments.map((user) => {
                        return <tr>
                            <td>{user.id}</td>
                            <td>{user.body}</td>
                            <td>{user.postId}</td>
                            <td>{user.likes}</td>
                        </tr>
                      
                    })
                }
            </tbody>

        </table>
    </div>
  )
}