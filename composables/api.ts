export async function fetchTMDB(url: string, params: Record<string, string|number|undefined> = {}) {
    if (!params.language) {
        params.language = useI18n().locale.value;
    }
    return await $fetch(`/api/tmdb/${ url }`, { params });
}

export function getItem(type: string, id: string) {
    return fetchTMDB(`${ type }/${ id }`, { 
        append_to_response: 'credits',
    });
}

export function getItemList(type: string, query: string, page: number) {
    return fetchTMDB(`${ type }/${ query }`, { page });
}

export function getRecommendations(type: string, id: string, page: number) {
    return fetchTMDB(`${ type }/${ id }/recommendations`, { page });
}

export function searchMovies(query: string, page: number = 1) {
    return fetchTMDB('search/multi', { query, page })
}