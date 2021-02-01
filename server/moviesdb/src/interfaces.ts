export interface IMovie {
  id: number;
  name: string;
  rating: number;
}

export interface IMovieData {
  movie: IMovie;
}

export interface IMovieVars {
  id: number;
}

export interface IMoviesData {
  movies: IMovie[];
}