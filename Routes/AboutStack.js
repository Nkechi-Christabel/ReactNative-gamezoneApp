// import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ReviewDetails from "../screens/ReviewDetails";
import React from "react";

const Stack = createNativeStackNavigator();

const ReviewDetailsStack = ({ route }) => {
  // console.log(route);
  return (
    // <NavigationContainer>
    <Stack.Navigator
      // initialRouteName="Home"
      screenOptions={{
        headerTintColor: "#444",
        headerStyle: {
          backgroundColor: "#eee",
          height: 60,
        },
      }}
    >
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default ReviewDetailsStack;
