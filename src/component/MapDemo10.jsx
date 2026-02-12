import React from 'react'
var products = [
  { id: 1, name: "Laptop", price: 750 },
  { id: 2, name: "Mouse", price: 200 },
  { id: 3, name: "Phone", price: 900 },
  { id: 4, name: "Keyboard", price: 300 }
];
export const MapDemo10 = () => {
  return (
       <div style={{color:"white"}}>
      <h3>Map Demo 10  Filtered Products (Price {">"}500)</h3>

      <ul>
        {products
          .filter((p) => p.price > 500)
          .map((p) => (
            <li key={p.id}>
              {p.name}  ₹{p.price}
            </li>
          ))}
      </ul>
    </div>
  );
}
