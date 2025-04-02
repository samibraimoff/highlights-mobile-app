import { Game } from "@/types";
import { Image, Text, View } from "react-native";

const FeedGameItem = ({ thumbnail, title, date }: Game) => {
  return (
    <View className={"border border-1 my-2"}>
      <Image
        source={{ uri: thumbnail }}
        style={{ width: 350, height: 200, margin: 10 }}
      />
      <View className={"flex items-center justify-between"}>
        <Text className={"text-center text-2l"}>{title}</Text>
        <Text className={"text-center text-2l"}>{date}</Text>
      </View>
    </View>
  );
};

export default FeedGameItem;
