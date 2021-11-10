import React, { useState } from "react";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image, View, Text, StyleSheet, ImageBackground } from "react-native";
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
      <ImageBackground
        source={require("./assets/game_bg.png")}
        style={styles.header}
      >
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={({ route }) => {
              return {
                headerTintColor: "#444",
                headerStyle: {
                  backgroundColor: "#eee",
                  height: 80,
                },
                headerTitle: () => (
                  <View style={styles.headerTitleWrapper}>
                    <Image
                      style={styles.headerImage}
                      source={require("./assets/heart_logo.png")}
                    />
                    <Text style={styles.headerTitle}>{route.name}</Text>
                  </View>
                ),
              };
            }}
          >
            <Drawer.Screen
              name="GameZone"
              component={HomeStack}
              options={({ navigation }) => {
                const routeName = navigation.getState().routes[0].state;
                // console.log(routeName);
                if (routeName && routeName.index === 1) {
                  return {
                    headerShown: false,
                  };
                }
                return {
                  drawerLabel: "Home",
                };
              }}
            />

            <Drawer.Screen
              name="About GameZone"
              component={About}
              options={{
                drawerLabel: "About",
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </ImageBackground>
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

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitleWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
