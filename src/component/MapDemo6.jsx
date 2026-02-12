import React from 'react'
import Onepiece from "../assets/images/Onepiece.webp"
import Naruto from "../assets/images/Naruto.jpg"
import Berserk from "../assets/images/Berserk.png"
import Frieren from "../assets/images/Frieren.jpg"
import Flower from "../assets/images/Flower.jpg"
import rezero from "../assets/images/rezero.jpg"
import "../assets/css/demo6.css"
var products = [
  {
    id: 1,
    name: "One Piece",
    category: "Shonen",
    price: 2000,
    rating: 4.5,
    stock: 10,
    image: Onepiece
  },
  {
    id: 2,
    name: "Naruto",
    category: "Shonen",
    price: 2000,
    rating: 4.5,
    stock: 0,
    image: Naruto
  },
  {
    id: 3,
    name: "berserk",
    category: "Seinen",
    price: 1000,
    rating: 4.2,
    stock: 15,
    image: Berserk
  },
  {
    id: 4,
    name: "Re:ZERO -Starting Life in Another World",
    category: "Light Novel(Isekai)",
    price: 700,
    rating: 3.5,
    stock: 0,
    image: rezero
  },
  {
    id: 5,
    name: "Flower blooms with dignity",
    category: "Shonen",
    price: 500,
    rating: 3.5,
    stock: 0,
    image: Flower
  },
  {
    id: 6,
    name: "Frieren: Beyond Journey's End",
    category: "Shonen",
    price: 1500,
    rating: 3.9,
    stock: 8,
    image: Frieren
  }

];

export const MapDemo6 = () => {
  return (
    <div className="container">
      <h2>Manga Store</h2>

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price (₹)</th>
            <th>Rating</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.name} />
              </td>

              <td>{item.name}</td>

              <td className={item.category === "Shonen" ? "shonen" : ""}>
                {item.category}
              </td>

              <td className={item.price > 1000 ? "high-price" : "low-price"}>
                ₹{item.price}
              </td>

              <td className={item.rating >= 4 ? "good-rating" : "bad-rating"}>
                {item.rating}
              </td>

              <td className={item.stock === 0 ? "out-stock" : "in-stock"}>
                {item.stock === 0 ? "Out of Stock" : item.stock}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
