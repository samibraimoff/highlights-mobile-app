import { Text, View } from "react-native";

const SearchScreen = () => {
  return (
    <View className={"flex justify-center items-center"}>
      <Text className={"text-red-600 text-2xl"}>Search Leagues</Text>
      <Text className={"text-red-600 text-2xl"}>
        searching teams and leagues
      </Text>
    </View>
  );
};

export default SearchScreen;
