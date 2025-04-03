import { useLocalSearchParams } from "expo-router";
import {
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import WebView from "react-native-webview";
import { useState } from "react";
import { useGames } from "@/hooks/use-games";

const GameDetails = () => {
  const { id } = useLocalSearchParams();
  const { data } = useGames();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const game = data?.response.find((g) => g.title === id);

  if (!game) {
    return (
      <View className="flex-1 justify-center items-center bg-neutral-900 p-4">
        <Text className="text-white text-xl font-semibold">Game not found</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-neutral-900 p-4">
      <Text className="text-white text-3xl font-bold">{game.title}</Text>
      <Text className="text-gray-400 text-lg mb-4">{game.competition}</Text>
      {selectedVideo ? (
        <View className="mt-6">
          <TouchableOpacity
            onPress={() => setSelectedVideo(null)}
            className="mb-3 p-2 bg-red-600 rounded-lg self-start"
          >
            <Text className="text-white text-lg">Close Fullscreen</Text>
          </TouchableOpacity>
          <WebView
            source={{ html: selectedVideo }}
            style={{ height: 400, borderRadius: 12 }}
          />
        </View>
      ) : (
        <FlatList
          data={game.videos}
          keyExtractor={(video) => video.id}
          renderItem={({ item }) => (
            <View className="mt-4 bg-neutral-800 p-3 rounded-xl shadow-md">
              <Text className="text-white text-lg font-medium mb-2">
                {item.title}
              </Text>
              <TouchableOpacity
                onPress={() => setSelectedVideo(item.embed)}
                className="rounded-lg overflow-hidden"
              >
                <WebView
                  source={{ html: item.embed }}
                  style={{ height: 200, borderRadius: 12 }}
                />
              </TouchableOpacity>
            </View>
          )}
          scrollEnabled={false}
        />
      )}
    </ScrollView>
  );
};

export default GameDetails;
