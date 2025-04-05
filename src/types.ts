interface AwayTeam {
  id: number;
  name: string;
  logo: string;
}

interface HomeTeam {
  id: number;
  name: string;
  logo: string;
}

interface League {
  id: number;
  name: string;
  logo: string;
  season: number;
}

interface Country {
  code: string;
  name: string;
  logo: string;
}

export interface Match {
  id: number;
  round: string;
  date: string;
  country: Country;
  awayTeam: AwayTeam;
  homeTeam: HomeTeam;
  league: League;
}

export interface Game {
  id: number;
  type: string;
  imgUrl: null;
  title: string;
  description: string;
  url: string;
  channel: string;
  embedUrl: null;
  source: string;
  match: Match;
}

export interface Games {
  data: Game[];
}
