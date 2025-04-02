export async function fetchGames() {
  console.log("calling fetch games");
  const response = await fetch(
    `${process.env.EXPO_PUBLIC_MAIN_URL}/feed/?token=${process.env.EXPO_PUBLIC_HIGHLIGHTS_PUBLIC_KEY}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch games");
  }

  const data = await response.json();
  return data;
}
