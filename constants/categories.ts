export const categories = {
    movie: <Query[]> [
        { type: 'movie', title: 'Now Playing Movies', query: 'now_playing' },
        { type: 'movie', title: 'Top Rated Movies', query: 'top_rated' },
        { type: 'movie', title: 'Popular Movies', query: 'popular' },
        { type: 'movie', title: 'Upcoming Movies', query: 'upcoming' },
    ],
    tv: <Query[]> [
        { type: 'tv', title: 'Popular Series', query: 'popular' },
        { type: 'tv', title: 'Top Rated Series', query: 'top_rated' },
        { type: 'tv', title: 'Series Shows Airing Today', query: 'airing_today' },
    ],
}