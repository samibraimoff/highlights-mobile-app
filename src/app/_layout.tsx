import { Stack } from "expo-router";
import { ThemeProvider, DefaultTheme } from "@react-navigation/native";

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
    primary: "#0A0A0A",
  },
};

const MainLayout = () => {
  return (
    <ThemeProvider value={CustomTheme}>
      <Stack>
        <Stack.Screen name={"index"} options={{ title: "Home" }} />
      </Stack>
    </ThemeProvider>
  );
};

export default MainLayout;
