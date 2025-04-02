import { fetchGames } from "@/services/fetch-games";
import { Games } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useGames = () => {
  const { data, isLoading, error } = useQuery<Games>({
    queryKey: ["games"],
    queryFn: () => fetchGames(),
  });
  return {
    data,
    isLoading,
    error,
  };
};
