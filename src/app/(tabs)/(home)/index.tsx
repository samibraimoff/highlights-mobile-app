import { SafeAreaView } from "react-native-safe-area-context";
import FeedGameItem from "@/components/feed-game-item";
import { useGames } from "@/hooks/use-games";
import { Game } from "@/types";
import {
  ActivityIndicator,
  TouchableOpacity,
  Text,
  View,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const { data, isLoading, error } = useGames();
  const router = useRouter();

  return (
    <SafeAreaView className="items-center justify-center flex-1 bg-black">
      <Text className="mb-6 text-2xl font-bold text-center text-white">
        Latest Kazakhstan Soccer Highlights
      </Text>
      {isLoading && (
        <View className={"flex-1 justify-center items-center"}>
          <ActivityIndicator color="#0A84FF" />
        </View>
      )}
      {error && (
        <View className={"flex-1 justify-center items-center"}>
          <Text className="text-2xl text-center text-red-600">
            Something went wrong, please try again
          </Text>
        </View>
      )}

      <FlatList
        data={data?.data}
        keyExtractor={(item: Game) => item.id.toString()}
        renderItem={({ item }: { item: Game }) => (
          <TouchableOpacity onPress={() => router.push(`game/${item.id}`)}>
            <FeedGameItem {...item} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
