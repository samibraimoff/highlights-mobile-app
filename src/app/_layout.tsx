import { Slot } from "expo-router";
import { ThemeProvider, DefaultTheme } from "@react-navigation/native";
import "../global.css";

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
      <Slot />
    </ThemeProvider>
  );
};

export default MainLayout;
