import { useLeagues } from "@/hooks/use-league";
import { ScrollView, TouchableOpacity, Image, Text } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const leaguesData = [
  {
    id: "champions-league",
    label: "Champions League",
    queryName: "Champions League",
  },
  {
    id: "premier-league",
    label: "Premier League",
    queryName: "Premier League",
  },
  {
    id: "la-liga",
    label: "LaLiga",
    queryName: "LaLiga",
  },
  {
    id: "bundesliga",
    label: "Bundesliga",
    queryName: "Bundesliga",
  },
];

const ExploreScreen = () => {
  const { data, isLoading, error } = useLeagues();
  const router = useRouter();

  const handlePress = (league: (typeof leaguesData)[0]) => {
    router.push(`leagues/${1}`);
  };
  console.log("data on explore screen", data);
  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView>
        <Text className="mt-4 mb-6 ml-4 text-3xl font-bold text-white">
          Explore
        </Text>
        {leaguesData.map((league) => (
          <TouchableOpacity
            key={league.id}
            className="flex-row items-center p-4 mx-4 mb-4 bg-gray-800 rounded-lg"
            onPress={() => handlePress(league)}
          >
            {/* <Image
              source={league.icon}
              className="w-8 h-8 mr-4"
              resizeMode="contain"
            /> */}
            <Text className="text-lg font-semibold text-white">
              {league.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExploreScreen;
