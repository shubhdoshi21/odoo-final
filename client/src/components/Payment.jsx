import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Payment = () => {
  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51PWtVZDuAWgKsNtLWlTBbBMPiEHIo9hs4ChscB7WaDf8MwCaKradFm0r7TE5gfT4r1AlVEvbI13RsmeM0ECu6RBA004zi06fDH"
    );

    // Hardcoded dummy data
    const dummyProducts = [
      {
        name: "Test Product 1",
        image: "https://via.placeholder.com/150",
        price: 1000, // Price in cents
        quantity: 1,
      },
      {
        name: "Test Product 2",
        image: "https://via.placeholder.com/150",
        price: 2000, // Price in cents
        quantity: 2,
      },
      {
        name: "Test Product 3",
        image: "https://via.placeholder.com/150",
        price: 200, // Price in cents
        quantity: 3,
      },
    ];

    const body = {
      products: dummyProducts,
    };

    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const response = await fetch("/payment/api/v1/create-checkout-session", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const session = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        toast.error(`user must be logged in to checkout`);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(`user must be logged in to checkout`);
    }
  };

  return (
    <>
      <button className="btn btn-success" onClick={makePayment} type="button">
        Checkout
      </button>
      <ToastContainer position="bottom-center"/>
    </>
  );
};

export default Payment;
