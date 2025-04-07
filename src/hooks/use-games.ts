import { fetchAllGames, fetchGameById } from "@/services/fetch-games";
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

export const useGame = (id: number | string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["game", id],
    queryFn: () => fetchGameById(id),
    enabled: !!id,
  });

  return { data, isLoading, error };
};
