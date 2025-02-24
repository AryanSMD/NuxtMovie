type Media = 'movie'|'tv';

interface Movie {
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
  media_type?: MediaType
  homepage?: string
  runtime?: number
  budget?: number
  revenue?: number
  status?: string
  genres?: Genre[]
  production_companies?: any[]
  videos?: {
    results: Video[]
  }
  credits?: {
    cast: Person[]
    crew: Person[]
  }
  images?: {
    backdrops: Image[]
    posters: Image[]
  }
  external_ids?: ExternalIds
  character?: string
}

interface Person {
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
  credits: { cast: Movie[] }
  order: number
  also_known_as?: string[]
  birthday?: string
  place_of_birth?: string
  homepage?: string
  biography?: string
  external_ids?: ExternalIds
  combined_credits?: {
    cast?: Media[]
    crew?: Media[]
  }
  images?: {
    profiles: Image[]
  }
}

interface Video {
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

interface Image {
  aspect_ratio: number
  height: number
  iso_639_1: string
  file_path: string
  vote_average: number
  vote_count: number
  width: number
}

interface Genre {
  id: number
  name: string
}

interface Credits {
  cast: Media[]
}

interface Query {
  type: string,
  title: string,
  query: string
}