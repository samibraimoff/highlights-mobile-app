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

const VideoContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <View
    className="w-full bg-black"
    style={{
      width: windowWidth,
      height: calculatedHeight,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {children}
  </View>
);

export const VideoPlayer = ({ url }: VideoPlayerProps) => {
  if (isYouTubeUrl(url)) {
    const videoId = extractYouTubeId(url);
    if (!videoId) {
      return (
        <VideoContainer>
          <Text className="text-white">Invalid YouTube URL</Text>
        </VideoContainer>
      );
    }
    return (
      <VideoContainer>
        <YoutubeIframe
          videoId={videoId}
          height={calculatedHeight}
          width={windowWidth}
          play={true}
        />
      </VideoContainer>
    );
  } else if (isDirectMediaUrl(url)) {
    return (
      <VideoContainer>
        <Video
          source={{ uri: url }}
          useNativeControls
          shouldPlay
          style={{ width: windowWidth, height: calculatedHeight }}
        />
      </VideoContainer>
    );
  } else {
    // Fallback using WebView for other embed types or unknown domains.
    return (
      <VideoContainer>
        <WebView
          source={{ uri: url }}
          style={{ width: "100%", height: "100%" }}
        />
      </VideoContainer>
    );
  }
};
