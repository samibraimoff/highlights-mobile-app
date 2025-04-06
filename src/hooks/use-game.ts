import { fetchGameById } from "@/services/fetch-game-by-id";
import { useQuery } from "@tanstack/react-query";

export const useGame = (id: number | string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["game", id],
    queryFn: () => fetchGameById(id),
    enabled: !!id,
  });

  return { data, isLoading, error };
};
