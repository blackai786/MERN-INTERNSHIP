import axios from "axios";
import React from "react";
import { useState } from "react";

export const ApiDemo2 = () => {
  const [userData, setuserData] = useState([]);
  const getUser = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    console.log(response);
    setuserData(response.data.products);
  };
  return (
    <div style={{ color: "skyblue", textAlign: "center" }}>
      <h1>Api Demo 2</h1>
      <button
        onClick={() => {
          getUser();
        }}
      >
        GET Detail
      </button>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>price</th>
            <th>rating</th>
            <th>tags</th>
            <th>brand</th>
            <th>sku</th>
            <th>Weight</th>
            <th>Dimentions (width x height x depth)</th>
            <th colSpan={"2"}>Reviews
              <tr>
              <th>rating </th>
              <th>comment</th>
              </tr>
              </th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td>{user.price}</td>
                <td>{user.rating}</td>
                {/* printing multiple tags */}
                <td>{user.tags.join(" ,")}</td>
                <td>{user.brand}</td>
                <td>{user.sku}</td>
                <td>{user.weight}</td>
                {/* printing dimentions width height and depth */}
                <td>
                  {user.dimensions.width}x {user.dimensions.height}x{" "}
                  {user.dimensions.depth}x{" "}
                </td>
                {/* printing review (array inside array) */}
                <td>
                  {
                    user.reviews.map((review) => {
                      return <tr>
                        <td>{review.rating}</td>
                        <td>{review.comment}</td>
                      </tr>
                      
                    })
                  }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};