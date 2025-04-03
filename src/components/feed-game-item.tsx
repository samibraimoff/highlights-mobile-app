import { Game } from "@/types";
import { Image, Text, View } from "react-native";
import { format } from "date-fns";

const FeedGameItem = ({ thumbnail, title, date }: Game) => {
  const formattedDate = format(new Date(date), "MMM dd, yyyy");
  return (
    <View className={"border border-1 my-2"}>
      <Image
        source={{ uri: thumbnail }}
        style={{ width: 350, height: 200, margin: 10 }}
      />
      <View className={"flex items-center justify-between"}>
        <Text className={"text-center text-white text-2xl"}>{title}</Text>
        <Text className={"text-center text-white text-2l"}>
          {formattedDate}
        </Text>
      </View>
    </View>
  );
};

export default FeedGameItem;
