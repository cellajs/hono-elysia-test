import { hc } from 'hono/client'
import { AppRoute } from '.'

export const client = hc<AppRoute>('/')

client.route1[':id']
    .$get({
        param: { id: '1' },
        query: { q: 'John' },
    })
    .then((res) => {
        console.log(res)
    })
