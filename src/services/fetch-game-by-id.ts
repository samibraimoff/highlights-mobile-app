import { Game } from "@/types";

export async function fetchGameById(id: number | string): Promise<Game[]> {
  const baseUrl = process.env.EXPO_PUBLIC_FOOTBALL_HIGHLIGHT_URI;
  if (!baseUrl) {
    throw new Error("Base URL is not defined");
  }

  // Construct the URL for the specific game endpoint.
  const url = new URL(`${baseUrl}/highlights/${id}`);

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
    const data: Game[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error retrieving game by id:", error);
    throw error;
  }
}
