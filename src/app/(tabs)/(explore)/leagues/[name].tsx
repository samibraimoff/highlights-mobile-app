import React from "react";
import { Text, ActivityIndicator, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useLeagues } from "@/hooks/use-league";
import { SafeAreaView } from "react-native-safe-area-context";

const LeagueDetails: React.FC = () => {
  const { name } = useLocalSearchParams<{ name: string }>();

  // Fetch leagues by name using your custom hook
  const { data, isLoading, error } = useLeagues(name ?? "");

  if (!name) {
    return (
      <SafeAreaView className="items-center justify-center flex-1 bg-black">
        <Text className="text-white">No league name specified.</Text>
      </SafeAreaView>
    );
  }

  if (isLoading) {
    return (
      <SafeAreaView className="items-center justify-center flex-1 bg-black">
        <ActivityIndicator color="#fff" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView className="items-center justify-center flex-1 bg-black">
        <Text className="text-red-500">Error: {String(error)}</Text>
      </SafeAreaView>
    );
  }

  if (!data || data.length === 0) {
    return (
      <SafeAreaView className="items-center justify-center flex-1 bg-black">
        <Text className="text-white">No data found for {name}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 p-4 bg-black">
      <Text className="mb-4 text-2xl text-white">Results for {name}</Text>
      {/* Render the data as needed */}
      {/* {data.map((league: any) => (
        <View key={league.id} className="mb-2">
          <Text className="text-white">
            {league.name} - Season: {league.season}
          </Text>
        </View>
      ))} */}
    </SafeAreaView>
  );
};

export default LeagueDetails;
