import { writeFileSync } from 'fs'

let template = `
import { Elysia, t } from 'elysia'
import { swagger } from '@elysiajs/swagger'

const errorBase = {
    success: t.Boolean({
        default: false
    }),
    error: t.String()
}

const model = new Elysia({ name: 'model' }).model({
    query: t.Object({
        q: t.String({
            examples: 'John'
        })
    }),
    params: t.Object({
        id: t.String({
            examples: '1212121'
        })
    }),
    user: t.Object(
        {
            id: t.String({
                examples: '123'
            }),
            name: t.String({
                examples: 'John Doe'
            }),
            age: t.Number({
                examples: 42
            }),
            country: t.String({
                examples: 'USA'
            }),
            city: t.String({
                examples: 'New York'
            }),
            address: t.String({
                examples: '5th Avenue'
            }),
            emails: t.Array(
                t.String({
                    examples: ['test@gmail.com']
                })
            ),
            company: t.Object({
                name: t.String({
                    examples: 'ACME'
                }),
                address: t.String({
                    examples: '5th Avenue'
                })
            })
        },
        {
            description: 'Retrieve the user'
        }
    ),
    error400: t.Object(errorBase, {
        description: 'Bad request: problem processing request.'
    }),
    error401: t.Object(errorBase, {
        description: 'Unauthorized: authentication required.'
    }),
    error403: t.Object(errorBase, {
        description: 'Forbidden: insufficient permissions.'
    }),
    error404: t.Object(errorBase, {
        description: 'Not found: resource does not exist.'
    }),
    error500: t.Object(errorBase, {
        description: 'Server error: something went wrong.'
    })
})
`

const totalInstance = 3
const perInstance = 470

for (let i = 0; i < totalInstance; i++) {
    template += `const routes${i + 1} = new Elysia()
    .use(model)`

    for (let j = 0; j < perInstance; j++) {
        const id = i * perInstance + j

        template += `
    .get(
        '/route${id}/:id',
        () => ({
            id: '${id}',
            name: 'John Doe',
            age: 42,
            country: 'USA',
            city: 'New York',
            address: '5th Avenue',
            emails: ['test@gmail.com'],
            company: {
                name: 'ACME',
                address: '5th Avenue'
            }
        }),
        {
            params: 'params',
            query: 'query',
            response: {
                200: 'user',
                400: 'error400',
                401: 'error401',
                403: 'error403',
                404: 'error404',
                500: 'error500'
            }
        }
    )`
    }

    template += '\n\n'
}

template += `const app = new Elysia()
    .use(
        swagger({
            documentation: {
                openapi: '3.0.0',
                info: {
                    title: 'Elysia',
                    version: '1.0.0'
                }
            }
        })
    )
    .use(routes1)
    .use(routes2)
    .use(routes3)
    .listen(3000)

export type app = typeof app
`

writeFileSync(import.meta.dir + '/index.ts', template)
