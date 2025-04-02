import { fetchGames } from "@/services/fetch-games";
import { useQuery } from "@tanstack/react-query";

export const useGames = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["games"],
    queryFn: () => fetchGames(),
  });

  console.log("data in hoooks", data?.response);

  return {
    data,
    isLoading,
    error,
  };
};
