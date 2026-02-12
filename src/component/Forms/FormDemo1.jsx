import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const FormDemo1 = () => {
  const { register, handleSubmit } = useForm();
  const [userData, setuserData] = useState({});
  const [isSubmited, setisSubmited] = useState();

  const submithandler = (data) => {
    console.log(data);
    setuserData(data);
    setisSubmited(true);
  };
  return (
    <div style={{ textAlign: "center", color: "skyblue" }}>
      <h1>Form 1</h1>
      <form onSubmit={handleSubmit(submithandler)}>
        <div>
          <label>Name : </label>
          <input
            type="text"
            placeholder="Enter Name"
            {...register("Name")}
          ></input>
        </div>
        <div>
          <label>Age :</label>
          <input
            type="text"
            placeholder="Enter Age"
            {...register("age")}
          ></input>
        </div>
        <div>
          <label>Gender : </label>
          <input type="radio" value="male" {...register("gender")}></input>Male
          <input type="radio" value="Female" {...register("gender")}></input>
          Female
        </div>
        <div>
          <label>Hobby :</label>
          <input type="checkbox" value="cricket" {...register("hobby")}></input>
          Cricket
          <input type="checkbox" value="music" {...register("hobby")}></input>
          Music
          <input type="checkbox" value="games" {...register("hobby")}></input>
          Games
          <input type="checkbox" value="coding" {...register("hobby")}></input>
          coding
          <input
            type="checkbox"
            value="sleeping"
            {...register("hobby")}
          ></input>
          sleeping
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
      <br />
      {isSubmited == true && (
        <div>
          <h3>OUTPUT</h3>
          <h4>{userData.Name}</h4>
          <h4>{userData.age}</h4>
          <h4>{userData.gender}</h4>
          {userData.hobby.map((hby) => {
            return <div>{hby}</div>;
          })}
        </div>
      )}
    </div>
  );
};
