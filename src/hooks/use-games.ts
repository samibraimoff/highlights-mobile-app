import { fetchAllGames } from "@/services/fetch-all-games";
import { useQuery } from "@tanstack/react-query";

export const useGames = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["games"],
    queryFn: () => fetchAllGames(),
  });
  return {
    data,
    isLoading,
    error,
  };
};
