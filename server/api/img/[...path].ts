import { createIPX, ipxFSStorage, ipxHttpStorage, createIPXNodeServer} from 'ipx'

const ipx = createIPX({
    storage: ipxFSStorage({ dir: "./public" }),
    httpStorage: ipxHttpStorage({ domains: ["image.tmdb.org"] }),
    alias: {
        '/img': 'https://image.tmdb.org/t/p/original/'
    }
})

const ipxNodeServer = createIPXNodeServer(ipx);
const nodeMiddleware = fromNodeMiddleware(ipxNodeServer);

export default defineEventHandler(event => {
    event.req.url = `/${ event.context.params?.path }`;
    return nodeMiddleware(event);
})