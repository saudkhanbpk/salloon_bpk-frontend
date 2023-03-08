import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51LkMoWArkpbHU2Aqsysx3PvF62kq6xYcv04OObH2ouLMtHIo0oDXRuLi69U9A5m7k9SJmeIxCprtljxhWF39rinZ00rkIH2kk7";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;