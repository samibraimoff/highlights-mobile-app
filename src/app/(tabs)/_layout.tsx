import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: "black" },
        tabBarIcon: ({ color, size }) => {
          let iconName = "";
          if (route.name === "(home)") {
            iconName = "soccer";
          } else if (route.name === "explore") {
            iconName = "soccer-field";
          } else if (route.name === "notifications") {
            iconName = "trophy";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "#0A84FF",
        tabBarInactiveTintColor: "#8E8E93",
      })}
    >
      <Tabs.Screen name={"(home)"} options={{ headerShown: false }} />
      <Tabs.Screen name={"explore"} options={{ title: "Explore" }} />
      <Tabs.Screen
        name={"notifications"}
        options={{ title: "Notifications" }}
      />
    </Tabs>
  );
};

export default TabsLayout;
