import Head from "next/head";
import styled from "@emotion/styled";
import GlobalStyles from "./GlobalStyles";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Learning
// To best leverage Stripe’s advanced fraud functionality,
// include this script on every page, not just the checkout page.
// This allows Stripe to detect anomalous behavior that may be indicative
// of fraud as customers browse your website.
// Note: This is why we are adding it to a Layout component.

const stripePromise = loadStripe(`pk_test_51IX6VIAfExOBYstVZkqhs76wY1xMrZ5Hwh0SgLZDOvYwDgFHRrnMKh8cNfRVtNVIounGjq9Wejc5oGj23B9IKw5m00hbsBcph6`);

// TIP
// call loadStripe outside of a component
// in that way there's no chance it will get
// called more times than it needs to

const Layout = ({ children, title }) => {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Elements stripe={stripePromise}>{children}</Elements>
    </>
  );
};

export default Layout;
