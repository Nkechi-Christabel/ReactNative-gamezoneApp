import React, { useState } from "react";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./Routes/HomeStack";
import About from "./screens/About";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

const Drawer = createDrawerNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name="GameZone"
            component={HomeStack}
            options={{ drawerLabel: "Home" }}
          />

          <Drawer.Screen
            name="About GameZone"
            component={About}
            options={{ drawerLabel: "About" }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
}
