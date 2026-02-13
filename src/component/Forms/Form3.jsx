import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "../../assets/css/checkout.css";

export const Form3 = () => {
  const { register, handleSubmit } = useForm();

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(10);

  const subtotal = 5000;
  const shipping = 200;
  const total = subtotal + shipping - discount;

  const onSubmit = (data) => {
    const finalData = {
      ...data,
      paymentMethod,
      coupon,
      total,
    };

    console.log("Order Data:", finalData);
    alert("Order Placed Successfully!");
  };

  return (
    <div className="checkout-container">
      <div className="left-section">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card">
            <h2>Shipping Information</h2>

            <input {...register("fullName")} placeholder="Full Name" />
            <input {...register("email")} placeholder="Email Address" />
            <input {...register("address")} placeholder="Shipping Address" />
            <input {...register("city")} placeholder="City" />
            <input {...register("postalCode")} placeholder="Postal Code" />
          </div>

          <div className="card">
            <h2>Payment Details</h2>

            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                />
                Credit Card
              </label>

              <label>
                <input
                  type="radio"
                  value="UPI"
                  checked={paymentMethod === "upi"}
                  onChange={() => setPaymentMethod("upi")}
                />
                PayPal
              </label>

              <label>
                <input
                  type="radio"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                Cash on Delivery
              </label>
            </div>

            {paymentMethod === "card" && (
              <>
                <input {...register("cardNumber")} placeholder="Card Number" />
                <div className="row">
                  <input {...register("expiry")} placeholder="MM/YY" />
                  <input {...register("cvv")} placeholder="CVV" />
                </div>
              </>
            )}

            <div className="coupon-row">
              <input
                placeholder="Enter coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button
                type="button"
                className="apply-btn"
                onClick={() =>
                  coupon === "SAVE100" ? setDiscount(100) : setDiscount(0)
                }
              >
                Apply
              </button>
            </div>

            <div className="product-box">1x Wireless Headphones - 5000</div>
          </div>

          <div className="button-row">
            <button type="button" className="cancel-btn">
              Cancel
            </button>

            <button type="submit" className="place-btn">
              Place Order
            </button>
          </div>
        </form>
      </div>

      <div className="right-section">
        <div className="summary-card">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal:</span>
            <span>5000.00</span>
          </div>

          <div className="summary-row">
            <span>Shipping:</span>
            <span>200.00</span>
          </div>

          <div className="summary-row discount">
            <span>Discount:</span>
            <span>- ₹{discount}.00</span>
          </div>

          <hr />

          <div className="summary-row total">
            <span>Total:</span>
            <span>₹{total}.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};