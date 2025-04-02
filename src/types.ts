export interface Video {
  id: string;
  title: string;
  embed: string;
}

export interface Game {
  title: string;
  competition: string;
  matchviewUrl: string;
  competitionUrl: string;
  thumbnail: string;
  date: string;
  videos: Video[];
}

export interface Games {
  response: Game[];
}
