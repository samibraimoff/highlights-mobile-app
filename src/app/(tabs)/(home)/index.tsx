import { useGames } from "@/hooks/use-games";
import { ActivityIndicator, Text, View, FlatList } from "react-native";

const HomeScreen = () => {
  const { data, isLoading, error } = useGames();

  return (
    <View className={"flex justify-center items-center"}>
      <Text className={"text-red-600 text-2xl"}>Latest highlights</Text>
      {isLoading && <ActivityIndicator />}
      <FlatList
        data={data?.response}
        renderItem={({ item }) => <Text>{item?.competition}</Text>}
      />
    </View>
  );
};

export default HomeScreen;
