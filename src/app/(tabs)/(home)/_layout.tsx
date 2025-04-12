import { Stack } from "expo-router";

const HomeLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTintColor: "#0A84FF",
        headerStyle: {
          backgroundColor: "#000",
        },
      }}
    >
      <Stack.Screen name={"index"} options={{ headerShown: false }} />
      <Stack.Screen
        name={"game/[id]"}
        options={{ title: "Game", headerBackTitle: "Highlights" }}
      />
    </Stack>
  );
};

export default HomeLayout;
