export default defineEventHandler(async event => {
    const movies = await $fetch(`/${ event.context.params?.path }`, {
        baseURL: useRuntimeConfig().public.BaseURL,
        headers: {
            Authorization: `Bearer ${ useRuntimeConfig().APIKey }`,
        },
    })
    return movies
})