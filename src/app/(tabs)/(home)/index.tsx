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
    <View className="flex-1 justify-center items-center bg-black p-4">
      <Text className="text-white text-2xl font-bold">Latest Highlights</Text>
      {isLoading && <ActivityIndicator color="#fff" />}
      {error && (
        <Text className="text-red-600 text-2xl">
          Something went wrong, please try again
        </Text>
      )}

      <FlatList
        data={data?.response}
        keyExtractor={(item) => item.title}
        renderItem={({ item }: { item: Game }) => (
          <TouchableOpacity onPress={() => router.push(`/game/${item.title}`)}>
            <FeedGameItem {...item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;
