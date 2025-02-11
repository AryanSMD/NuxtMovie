export async function fetchTMDB(url: string, params: object = {}): Promise<any> {
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