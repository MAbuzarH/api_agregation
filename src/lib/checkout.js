import { loadStripe } from "@stripe/stripe-js";

export async function checkout() {
    let stripePromise = null;

    let getStripe = async () => {
        if (!stripePromise) {
            stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY);
        }
        return stripePromise;
    };

    const stripe = await getStripe();
    
    await stripe.redirectToCheckout({
        mode: 'payment',
        lineItems: [],  // You need to provide the actual line items
        successUrl: `${window.location.origin}/session_id=${CHECKOUT_SESSION_ID}`, // Added a missing "/" before session_id
        cancelUrl: window.location.origin
    });
}
