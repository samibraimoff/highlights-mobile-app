import { Stack } from "expo-router";

const ExploreLayout = () => {
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
      <Stack.Screen name={"leagues/[name]"} options={{ title: "Leagues" }} />
    </Stack>
  );
};

export default ExploreLayout;
