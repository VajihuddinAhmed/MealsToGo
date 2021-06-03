import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51ILZJyGRdJjKw7QHvTpyBpni1e8wVZ93ZXuTMeByiMgts4o31wBgUmYohI0JfDXVG8tDKVhGMSk2JRWrK0yCo6eu00tvMq2ryn"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });
