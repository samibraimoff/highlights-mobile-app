import { Game, Match } from "@/types";
import { Image, Text, View } from "react-native";

const FeedGameItem = ({
  id,
  channel,
  description,
  title,
  url,
  imgUrl,
  match,
}: Game) => {
  const { league } = match;
  return (
    <View className={"border border-1 my-2"}>
      {imgUrl && <Image source={{ uri: imgUrl }} className={"w-full h-40"} />}
      <View className={"flex items-center justify-between"}>
        <Text className={"text-center text-white text-2xl"}>{title}</Text>
      </View>
    </View>
  );
};

export default FeedGameItem;
