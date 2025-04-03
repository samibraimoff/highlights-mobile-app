import { useLocalSearchParams } from "expo-router";
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import WebView from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGames } from "@/hooks/use-games";

const { width } = Dimensions.get("window");
const videoHeight = (width * 9) / 16;

const GameDetails = () => {
  const { id } = useLocalSearchParams();
  const { data } = useGames();

  const game = data?.response.find((g) => g.title === id);
  const firstVideoEmbed = game?.videos[0].embed;
  if (!game) {
    return (
      <View className="flex-1 justify-center items-center bg-black p-4">
        <Text className="text-white text-xl font-semibold">Game not found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className={"flex-1 bg-black"}>
      <ScrollView>
        <Text className="text-white text-3xl font-bold">{game.title}</Text>
        <Text className="text-white text-lg mb-6">{game.competition}</Text>
        {firstVideoEmbed && (
          <WebView
            source={{ html: firstVideoEmbed }}
            style={{ width, height: videoHeight }}
            allowsFullscreenVideo
            javaScriptEnabled
            domStorageEnabled
            allowsInlineMediaPlayback
            startInLoadingState
            renderLoading={() => (
              <ActivityIndicator
                style={{ flex: 1 }}
                color="white"
                size="large"
              />
            )}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default GameDetails;
