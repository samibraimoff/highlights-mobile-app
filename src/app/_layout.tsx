import { Slot } from "expo-router";
import { ThemeProvider, DefaultTheme } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useReactQueryDevTools } from "@dev-plugins/react-query";

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
  const queryClient = new QueryClient();
  useReactQueryDevTools(queryClient);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={CustomTheme}>
        <Slot />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default MainLayout;
