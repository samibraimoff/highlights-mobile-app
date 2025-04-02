import { useGames } from "@/hooks/use-games";
import { ActivityIndicator, Text, View, FlatList, Image } from "react-native";

const HomeScreen = () => {
  const { data, isLoading, error } = useGames();

  return (
    <View className={"flex justify-center items-center"}>
      <Text className={"text-black text-2xl"}>Latest highlights</Text>
      {isLoading && <ActivityIndicator />}
      {error && (
        <Text className={"text-red-600 text-2xl"}>
          Something went wrong, please try again
        </Text>
      )}
      <FlatList
        data={data?.response}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item?.thumbnail }}
            style={{ width: 200, height: 200 }}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;
