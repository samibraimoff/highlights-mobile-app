import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={() => ({
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "black" },
        tabBarActiveTintColor: "#0A84FF",
        tabBarInactiveTintColor: "#8E8E93",
      })}
    >
      <Tabs.Screen
        name={"(home)"}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="soccer"
              size={size * 1.2}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={"search"}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="magnify"
              size={size * 1.2}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={"explore"}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="soccer-field"
              size={size * 1.2}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={"notifications"}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="trophy"
              size={size * 1.2}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
