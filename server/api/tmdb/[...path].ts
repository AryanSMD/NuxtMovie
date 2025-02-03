export default defineEventHandler(async event => {
    const query = getQuery(event);
    const movies = await $fetch(`/${ event.context.params?.path }`, {
        baseURL: useRuntimeConfig().public.BaseURL,
        headers: { Authorization: `Bearer ${ useRuntimeConfig().APIKey }`, },
        params: { ...query }
    })
    return movies
})