type TMedia = 'movie'|'tv';

type TMovie = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date?: string
  first_air_date?: string
  title: string
  name?: string
  video: boolean
  vote_average: number
  vote_count: number
  media_type?: TMedia
  homepage?: string
  runtime?: number
  budget?: number
  revenue?: number
  status?: string
  genres?: TGenre[]
  production_companies?: any[]
  videos?: {
    results: TVideo[]
  }
  credits?: {
    cast: TPerson[]
    crew: TPerson[]
  }
  images?: {
    backdrops: TImage[]
    posters: TImage[]
  }
  external_ids?: TExternalIds
  character?: string
}

type TPerson = {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  profile_path: string
  popularity: number
  cast_id?: number
  job?: string
  character?: string
  credit_id: string
  credits: { cast: TMovie[] }
  order: number
  also_known_as?: string[]
  birthday?: string
  place_of_birth?: string
  homepage?: string
  biography?: string
  external_ids?: TExternalIds
  combined_credits?: {
    cast?: TMedia[]
    crew?: TMedia[]
  }
  images?: {
    profiles: TImage[]
  }
}

type TVideo = {
  iso_639_1: string
  iso_3166_1: string
  name: string
  key: string
  site: string
  size: number
  type: string
  official: boolean
  published_at: string
  id: string
}

type TImage = {
  aspect_ratio: number
  height: number
  iso_639_1: string
  file_path: string
  vote_average: number
  vote_count: number
  width: number
}

type TGenre = {
  id: number
  name: string
}

type TCredits = {
  cast: TMedia[]
}

type TQuery = {
  type: string,
  title: string,
  query: string
}