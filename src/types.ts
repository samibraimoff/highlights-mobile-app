export interface Video {
  id: string;
  title: string;
  embed: string;
}

export interface Games {
  response: {
    title: string;
    competition: string;
    matchviewUrl: string;
    competitionUrl: string;
    thumbnail: string;
    date: string;
    videos: Video[];
  };
}
