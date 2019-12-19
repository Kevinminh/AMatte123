import React from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import InjectedCheckoutForm from "./checkOutForm";

const App = () => {
  return (
    <StripeProvider apiKey="pk_test_gHnnqNoYERzI5ptC0L9TvaXK00XidMgmH6">
      <div className="example">
        <h1>React Stripe Elements Example</h1>
        <Elements>
          <InjectedCheckoutForm />
        </Elements>
      </div>
    </StripeProvider>
  );
};

export default App;
