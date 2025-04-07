import { useQuery } from "@tanstack/react-query";
import { fetchLeaguesByName } from "@/services/fetch-leagues";

export const useLeagues = (name?: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["league", name],
    queryFn: () => fetchLeaguesByName(name ?? ""),
    enabled: !!name,
  });

  return { data, isLoading, error };
};
