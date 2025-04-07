import { Games } from "@/types";

export async function fetchLeaguesByName(name?: string) {
  const baseUrl = process.env.EXPO_PUBLIC_FOOTBALL_HIGHLIGHT_URI;
  if (!baseUrl) {
    throw new Error("Base URL is not defined");
  }

  const url = new URL(`${baseUrl}/leagues`);
  // url.searchParams.append("leagueName", `${name}`);
  // url.searchParams.append("limit", "10");
  url.searchParams.append("season", "2025");
  url.searchParams.append("leagueName", "Bundesliga");
  // url.searchParams.append("countryName", "Spain");
  // url.searchParams.append("countryName", "England");
  // url.searchParams.append("countryCode", "GB");

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env
        .EXPO_PUBLIC_FOOTBALL_HIGHLIGHT_API_KEY as string,
      "x-rapidapi-host": process.env
        .EXPO_PUBLIC_FOOTBALL_HIGHLIGHT_HOST as string,
    },
  };

  try {
    const response = await fetch(url.toString(), options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("data in fetch function", data);
    return data;
  } catch (error) {
    console.error("Error retrieving leagues:", error);
    throw error;
  }
}
