import { createIPX, ipxFSStorage, ipxHttpStorage, createIPXNodeServer } from 'ipx'

const ipx = createIPX({
    storage: ipxFSStorage({ dir: "./public" }),
    httpStorage: ipxHttpStorage({ domains: ["image.tmdb.org"] }),
    alias: {
        '/img': useRuntimeConfig().public.ImageURL,
    }
})

const ipxNodeServer = createIPXNodeServer(ipx);
const nodeMiddleware = fromNodeMiddleware(ipxNodeServer);

export default defineEventHandler(event => {
    event.req.url = `/${ event.context.params?.path }`;
    return nodeMiddleware(event);
})