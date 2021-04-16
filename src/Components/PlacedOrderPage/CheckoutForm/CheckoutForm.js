import React, { useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";


const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: '21px',
          fontWeight: '500',
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    []
  );

  return options;
};

const CheckoutForm = ({successfulPayments}) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [paymentError, setPaymentError] = useState(null);
  const [successPayment, setSuccessPayment] = useState(null);

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
     if (error) {
      console.log('[error]', error);
      setPaymentError(error.message);
      setSuccessPayment(null);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setSuccessPayment(paymentMethod.id)
      setPaymentError(null);
      successfulPayments(paymentMethod.id);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Card number
          <CardNumberElement
            options={options}
            onReady={() => {
              console.log("CardNumberElement [ready]");
            }}
            onChange={event => {
              console.log("CardNumberElement [change]", event);
            }}
            onBlur={() => {
              console.log("CardNumberElement [blur]");
            }}
            onFocus={() => {
              console.log("CardNumberElement [focus]");
            }}
          />
        </label>
        <br/>
        <label>
          Expiration date
          <CardExpiryElement
            options={options}
            onReady={() => {
              console.log("CardNumberElement [ready]");
            }}
            onChange={event => {
              console.log("CardNumberElement [change]", event);
            }}
            onBlur={() => {
              console.log("CardNumberElement [blur]");
            }}
            onFocus={() => {
              console.log("CardNumberElement [focus]");
            }}
          />
        </label>
        <br/>
        <label>
          CVC
          <CardCvcElement
            options={options}
            onReady={() => {
              console.log("CardNumberElement [ready]");
            }}
            onChange={event => {
              console.log("CardNumberElement [change]", event);
            }}
            onBlur={() => {
              console.log("CardNumberElement [blur]");
            }}
            onFocus={() => {
              console.log("CardNumberElement [focus]");
            }}
          />
        </label>
        <br/>
        <button type="submit" disabled={!stripe} className="btn primary-button mb-3">
          Pay
        </button>
      </form>
      {
        paymentError && <p style={{color: 'red'}}>{paymentError}</p>
      }
      {
        successPayment && <p style={{color: 'green'}}> <FontAwesomeIcon icon={faHandshake}/> Thank You!! Your Payment Successfully Done</p>
      }
    </>
  );
};

export default CheckoutForm;