import { writeFileSync } from 'fs';

let code = `
import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi'

export type Env = {
    Variables: {
      user: {};
      organization: {};
    };
  };
  
  export class CustomHono extends OpenAPIHono<Env> {}

const app1 = new CustomHono();

const errorResponseSchema = z.object({
    success: z.boolean().default(false),
    error: z.string(),
  });

const errorResponses = {
    400: {
      description: 'Bad request: problem processing request.',
      content: {
        'application/json': {
          schema: errorResponseSchema,
        },
      },
    },
    401: {
      description: 'Unauthorized: authentication required.',
      content: {
        'application/json': {
          schema: errorResponseSchema,
        },
      },
    },
    403: {
      description: 'Forbidden: insufficient permissions.',
      content: {
        'application/json': {
          schema: errorResponseSchema,
        },
      },
    },
    404: {
      description: 'Not found: resource does not exist.',
      content: {
        'application/json': {
          schema: errorResponseSchema,
        },
      },
    },
    500: {
      description: 'Server error: something went wrong.',
      content: {
        'application/json': {
          schema: errorResponseSchema,
        },
      },
    },
  };

const QuerySchema = z.object({
    q: z.string().openapi({
        example: 'John',
        }),
  })

const ParamsSchema = z.object({
    id: z
      .string()
      .min(3)
      .openapi({
        param: {
          name: 'id',
          in: 'path',
        },
        example: '1212121',
      }),
  })

const UserSchema = z
  .object({
    id: z.string().openapi({
      example: '123',
    }),
    name: z.string().openapi({
      example: 'John Doe',
    }),
    age: z.number().openapi({
      example: 42,
    }),
    country: z.string().optional().openapi({
        example: 'USA',
        }),
        city: z.string().optional().openapi({
        example: 'New York',
        }),
        address: z.string().optional().openapi({
        example: '5th Avenue',
        }),
        emails: z.array(z.string()).optional().openapi({
        example: ['test@gmail.com'],
        }),
    company: z.object({
        name: z.string().openapi({
            example: 'ACME',
        }),
        address: z.string().openapi({
            example: '5th Avenue',
        }),
        }),
  })
  .openapi('User')
`;

for (let i = 0; i < 300; i++) {
    code += `
    const route${i} = createRoute({
        method: 'get',
        path: '/route/{id}',
        request: {
            query: QuerySchema,
            params: ParamsSchema,
          },
        responses: {
            200: {
              content: {
                'application/json': {
                  schema: UserSchema,
                },
              },
              description: 'Retrieve the user',
            },
          },
          ...errorResponses,
      })
  `;
}

code += 'const routes1 = app1';

for (let i = 0; i < 100; i++) {
    code += `
    .openapi(route${i}, (ctx) => {
        return ctx.json({
            id: '${i}',
            name: 'John Doe',
            age: 42,
            country: 'USA',
            city: 'New York',
            address: '5th Avenue',
            emails: ['test@gmail.com'],
            company: {
                name: 'ACME',
                address: '5th Avenue',
            }
        });
    })
  `;
}

code += `
const app2 = new CustomHono();
const routes2 = app2`;

for (let i = 0; i < 100; i++) {
    code += `
    .openapi(route${i}, (ctx) => {
        return ctx.json({
            id: '${i}',
            name: 'John Doe',
            age: 42,
            country: 'USA',
            city: 'New York',
            address: '5th Avenue',
            emails: ['test@gmail.com'],
            company: {
                name: 'ACME',
                address: '5th Avenue',
            }
        });
    })
  `;
}

code += `
const app3 = new CustomHono();
const routes3 = app3`;

for (let i = 0; i < 100; i++) {
    code += `
    .openapi(route${i}, (ctx) => {
        return ctx.json({
            id: '${i}',
            name: 'John Doe',
            age: 42,
            country: 'USA',
            city: 'New York',
            address: '5th Avenue',
            emails: ['test@gmail.com'],
            company: {
                name: 'ACME',
                address: '5th Avenue',
            }
        });
    })
  `;
}

code += `const routes = app1.route('/', routes1).route('/', routes2).route('/', routes3)`;


code += `
export type AppRoute = typeof routes

export default routes
`;

writeFileSync('src/index.ts', code);