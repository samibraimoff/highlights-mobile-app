import { Games } from "@/types";

export async function fetchAllGames(): Promise<Games> {
  const baseUrl = process.env.EXPO_PUBLIC_FOOTBALL_HIGHLIGHT_URI;
  if (!baseUrl) {
    throw new Error("Base URL is not defined");
  }

  const url = new URL(`${baseUrl}/highlights`);
  url.searchParams.append("countryCode", "GB-ENG");
  url.searchParams.append("limit", "10");

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
    const data: Games = await response.json();
    return data;
  } catch (error) {
    console.error("Error retrieving highlights:", error);
    throw error;
  }
}
