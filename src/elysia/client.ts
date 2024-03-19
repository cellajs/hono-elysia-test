import { treaty } from '@elysiajs/eden'
import type { app } from '.'

const api = treaty<app>('localhost:3000')

const { data } = await api.route117({ id: '1' }).get({
    query: {
        q: 'John'
    }
})
