import { useGame } from "@/hooks/use-games";
import { Game } from "@/types";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { VideoPlayer } from "@/components/video-player";

import { ActivityIndicator, Text, ScrollView } from "react-native";

const GameDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, isLoading, error } = useGame(id);

  if (isLoading) {
    return (
      <SafeAreaView className="items-center justify-center flex-1 bg-black">
        <ActivityIndicator color="#0A84FF" size="large" />
      </SafeAreaView>
    );
  }

  if (error || !data || data.length === 0) {
    return (
      <SafeAreaView className="items-center justify-center flex-1 bg-black">
        <Text className="text-xl text-white">
          Something went wrong, please try again.
        </Text>
      </SafeAreaView>
    );
  }
  if (!data) {
    return (
      <SafeAreaView className="items-center justify-center flex-1 bg-black">
        <Text className="text-xl text-white">Game not found</Text>
      </SafeAreaView>
    );
  }

  const game: Game = data[0];

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView>
        <Text className="mb-2 text-3xl font-bold text-white">{game.title}</Text>
        {game.url && <VideoPlayer url={game.url} />}
        {game.description && (
          <Text className="mt-4 text-white">{game.description}</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default GameDetails;
