import { Text, View, Dimensions } from "react-native";
import { Video } from "expo-av";
import YoutubeIframe from "react-native-youtube-iframe";
import { WebView } from "react-native-webview";

interface VideoPlayerProps {
  url: string;
}

const { width: windowWidth } = Dimensions.get("window");
const calculatedHeight = (windowWidth / 16) * 9;

const isYouTubeUrl = (url: string): boolean => {
  return url.includes("youtube.com") || url.includes("youtu.be");
};

const isDirectMediaUrl = (url: string): boolean => {
  return url.endsWith(".mp4") || url.endsWith(".m3u8");
};

const extractYouTubeId = (url: string): string | null => {
  const regex =
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&\n?#]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

export const VideoPlayer = ({ url }: VideoPlayerProps) => {
  if (isYouTubeUrl(url)) {
    const videoId = extractYouTubeId(url);
    if (!videoId) {
      return (
        <View
          className="w-full bg-black"
          style={{
            aspectRatio: 16 / 9,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text className="text-white">Invalid YouTube URL</Text>
        </View>
      );
    }
    return (
      <View
        className="w-full bg-black"
        style={{
          width: windowWidth,
          height: calculatedHeight,
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <YoutubeIframe
          videoId={videoId}
          height={calculatedHeight}
          width={windowWidth}
          play={true}
        />
      </View>
    );
  } else if (isDirectMediaUrl(url)) {
    return (
      <View
        className="w-full bg-black"
        style={{
          width: windowWidth,
          height: calculatedHeight,
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Video
          source={{ uri: url }}
          useNativeControls
          shouldPlay
          style={{ width: windowWidth, height: calculatedHeight }}
        />
      </View>
    );
  } else {
    // Fallback using WebView for other embed types or unknown domains.
    return (
      <View
        className="w-full bg-black"
        style={{
          width: windowWidth,
          height: calculatedHeight,
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <WebView
          source={{ uri: url }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    );
  }
};
