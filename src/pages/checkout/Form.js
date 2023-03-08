import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import Checkout from "./../../api/checkout";
import { toast } from "react-toastify";
function Form({ bookingDetail }) {
  const stripeKey =
    "pk_test_51LkMoWArkpbHU2Aqsysx3PvF62kq6xYcv04OObH2ouLMtHIo0oDXRuLi69U9A5m7k9SJmeIxCprtljxhWF39rinZ00rkIH2kk7";
  //   useEffect(() => {
  //     // console.log(bookingDetail)
  //     console.log("booking details in form", bookingDetail.Services.Price);
  //   }, [bookingDetail]);
  const tokenHandler = (token) => {
    console.log(token);
    const data = {
      stripeToken: token.id,
      amount: bookingDetail.Services.Price,
    };
    Checkout.submitStripeToken(data).then((res) => {
      console.log(res);
      if (res.data.success == true) {
        toast.success(res.data.msg, {
          theme: "colored",
        });
      } else if (res.data.success == false) {
        toast.error(res.data.msg, {
          theme: "colored",
        });
      }
    });
  };
  return (
    <StripeCheckout
      amount={bookingDetail.Services.Price * 100}
      shippingAddress
      token={tokenHandler}
      stripeKey="pk_test_51LkMoWArkpbHU2Aqsysx3PvF62kq6xYcv04OObH2ouLMtHIo0oDXRuLi69U9A5m7k9SJmeIxCprtljxhWF39rinZ00rkIH2kk7"
    >
      <Button
        className="btn btn-primary mb-2 p-2 rounded"
        style={{ width: "100%" }}
      >
        Buy Now
      </Button>
    </StripeCheckout>
  );
}

export default Form;
