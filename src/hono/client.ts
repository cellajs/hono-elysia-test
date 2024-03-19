import { hc } from 'hono/client'
import { AppRoute } from '.'

const client = hc<AppRoute>('/')

const res = await client.route1[':id']
    .$get({
        param: { id: '1' },
        query: { q: 'John' },
    })
