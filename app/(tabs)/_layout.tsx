import { Tabs } from "expo-router";

import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarActiveTintColor: "#60A5FA",
        tabBarStyle: {
          backgroundColor: "#374151",
          overflow: "hidden",
          height: 52,
          borderWidth: 0,
          borderTopWidth: 1,
          borderColor: "#D1D5DB",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={20}
              color={focused ? "#60A5FA" : "#D1D5DB"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="challenges"
        options={{
          title: "Challenges",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="Trophy"
              size={20}
              color={focused ? "#60A5FA" : "#D1D5DB"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: "Progress",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="barschart"
              size={20}
              color={focused ? "#60A5FA" : "#D1D5DB"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={20}
              color={focused ? "#60A5FA" : "#D1D5DB"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
