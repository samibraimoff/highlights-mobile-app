import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "./src/global.css";

export default function App() {
  return (
    <View>
      <Text className={"text-red-600"}>
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
