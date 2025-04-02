export async function fetchGames() {
  console.log("calling fetch games");
  // const response = await fetch(
  //   `${process.env.MAIN_URL}/feed/?token=${process.env.HIGHLIGHTS_PUBLIC_KEY}`,
  // );

  const response = await fetch(
    "https://www.scorebat.com/video-api/v3/feed/?token=MjA1NzM1XzE3NDM1ODI2MTZfNzI5ZTU3MjM0YTA4YWM5OGJjMTk3MDU2YmI5Y2Q2M2Y5NmMyY2MyNg",
  );

  if (!response.ok) {
    throw new Error("Failed to fetch games");
  }

  const data = await response.json();
  return data;
}
