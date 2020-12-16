import React, { useEffect, createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import store from "./store";
import { Provider } from "react-redux";
import { HomeStack, ProfileStack, LiveStack, DiskusiStack } from "./helpers";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = focused ? "ios-home" : "ios-home-outline";
              } else if (route.name === "Live") {
                iconName = focused ? "ios-radio" : "ios-radio-outline";
              } else if (route.name === "Diskusi") {
                iconName = focused ? "ios-chatbox" : "ios-chatbox-outline";
              } else if (route.name === "Profile") {
                iconName = focused ? "ios-person-sharp" : "ios-person-sharp";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Live" component={LiveStack} />
          <Tab.Screen name="Diskusi" component={DiskusiStack} />
          <Tab.Screen name="Profile" component={ProfileStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
