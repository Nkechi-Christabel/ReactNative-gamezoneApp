import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        // initialRouteName="Home"
        screenOptions={{
          headerTintColor: "#444",
          headerStyle: {
            backgroundColor: "#eee",
            height: 60,
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeStack}
          // options={{
          //   title: "GameZone",
          // }}
        />
        <Drawer.Screen
          name="About"
          component={AboutStack}
          // options={{
          //   title: "About GameZone",
          // }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerStack;
