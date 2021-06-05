import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";
import { List, Divider } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { CreditCardInput } from "../components/credit-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { CartContext } from "../../../services/cart/cart.context";
import {
  CartIconContainer,
  CartIcon,
  NameInput,
  PayButton,
  ClearButton,
} from "../components/checkout.styles";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

export const CheckoutScreen = () => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Your cart is empty!!</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="top" size="large">
            <Text>Your Order</Text>
          </Spacer>
          <List.Section>
            {cart.map(({ item, price }, i) => {
              return (
                <List.Item
                  key={`item-${i}`}
                  title={`${item} - €${price / 100}`}
                />
              );
            })}
          </List.Section>
          <Text>Total: €{sum / 100}</Text>
        </Spacer>
        <Spacer position="top" size="large" />
        <Divider />
        <NameInput
          label="Name"
          value={name}
          onChangeText={(t) => {
            setName(t);
          }}
        />
        <Spacer position="top" size="large">
          {name.length > 0 && <CreditCardInput name={name} />}
        </Spacer>

        <Spacer position="top" size="xxl">
          <PayButton icon="cash" mode="contained">
            Pay Now
          </PayButton>
          <Spacer position="top" size="large">
            <ClearButton icon="cart-off" mode="contained" onPress={clearCart}>
              Clear Cart
            </ClearButton>
          </Spacer>
        </Spacer>
      </ScrollView>
    </SafeArea>
  );
};
