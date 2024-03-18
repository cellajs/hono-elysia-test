
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

    const route0 = createRoute({
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
  
    const route1 = createRoute({
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
  
    const route2 = createRoute({
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
  
    const route3 = createRoute({
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
  
    const route4 = createRoute({
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
  
    const route5 = createRoute({
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
  
    const route6 = createRoute({
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
  
    const route7 = createRoute({
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
  
    const route8 = createRoute({
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
  
    const route9 = createRoute({
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
  
    const route10 = createRoute({
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
  
    const route11 = createRoute({
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
  
    const route12 = createRoute({
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
  
    const route13 = createRoute({
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
  
    const route14 = createRoute({
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
  
    const route15 = createRoute({
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
  
    const route16 = createRoute({
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
  
    const route17 = createRoute({
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
  
    const route18 = createRoute({
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
  
    const route19 = createRoute({
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
  
    const route20 = createRoute({
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
  
    const route21 = createRoute({
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
  
    const route22 = createRoute({
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
  
    const route23 = createRoute({
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
  
    const route24 = createRoute({
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
  
    const route25 = createRoute({
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
  
    const route26 = createRoute({
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
  
    const route27 = createRoute({
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
  
    const route28 = createRoute({
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
  
    const route29 = createRoute({
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
  
    const route30 = createRoute({
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
  
    const route31 = createRoute({
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
  
    const route32 = createRoute({
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
  
    const route33 = createRoute({
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
  
    const route34 = createRoute({
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
  
    const route35 = createRoute({
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
  
    const route36 = createRoute({
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
  
    const route37 = createRoute({
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
  
    const route38 = createRoute({
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
  
    const route39 = createRoute({
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
  
    const route40 = createRoute({
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
  
    const route41 = createRoute({
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
  
    const route42 = createRoute({
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
  
    const route43 = createRoute({
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
  
    const route44 = createRoute({
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
  
    const route45 = createRoute({
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
  
    const route46 = createRoute({
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
  
    const route47 = createRoute({
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
  
    const route48 = createRoute({
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
  
    const route49 = createRoute({
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
  
    const route50 = createRoute({
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
  
    const route51 = createRoute({
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
  
    const route52 = createRoute({
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
  
    const route53 = createRoute({
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
  
    const route54 = createRoute({
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
  
    const route55 = createRoute({
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
  
    const route56 = createRoute({
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
  
    const route57 = createRoute({
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
  
    const route58 = createRoute({
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
  
    const route59 = createRoute({
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
  
    const route60 = createRoute({
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
  
    const route61 = createRoute({
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
  
    const route62 = createRoute({
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
  
    const route63 = createRoute({
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
  
    const route64 = createRoute({
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
  
    const route65 = createRoute({
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
  
    const route66 = createRoute({
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
  
    const route67 = createRoute({
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
  
    const route68 = createRoute({
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
  
    const route69 = createRoute({
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
  
    const route70 = createRoute({
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
  
    const route71 = createRoute({
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
  
    const route72 = createRoute({
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
  
    const route73 = createRoute({
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
  
    const route74 = createRoute({
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
  
    const route75 = createRoute({
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
  
    const route76 = createRoute({
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
  
    const route77 = createRoute({
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
  
    const route78 = createRoute({
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
  
    const route79 = createRoute({
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
  
    const route80 = createRoute({
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
  
    const route81 = createRoute({
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
  
    const route82 = createRoute({
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
  
    const route83 = createRoute({
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
  
    const route84 = createRoute({
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
  
    const route85 = createRoute({
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
  
    const route86 = createRoute({
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
  
    const route87 = createRoute({
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
  
    const route88 = createRoute({
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
  
    const route89 = createRoute({
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
  
    const route90 = createRoute({
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
  
    const route91 = createRoute({
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
  
    const route92 = createRoute({
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
  
    const route93 = createRoute({
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
  
    const route94 = createRoute({
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
  
    const route95 = createRoute({
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
  
    const route96 = createRoute({
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
  
    const route97 = createRoute({
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
  
    const route98 = createRoute({
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
  
    const route99 = createRoute({
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
  
    const route100 = createRoute({
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
  
    const route101 = createRoute({
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
  
    const route102 = createRoute({
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
  
    const route103 = createRoute({
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
  
    const route104 = createRoute({
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
  
    const route105 = createRoute({
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
  
    const route106 = createRoute({
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
  
    const route107 = createRoute({
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
  
    const route108 = createRoute({
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
  
    const route109 = createRoute({
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
  
    const route110 = createRoute({
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
  
    const route111 = createRoute({
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
  
    const route112 = createRoute({
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
  
    const route113 = createRoute({
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
  
    const route114 = createRoute({
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
  
    const route115 = createRoute({
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
  
    const route116 = createRoute({
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
  
    const route117 = createRoute({
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
  
    const route118 = createRoute({
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
  
    const route119 = createRoute({
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
  
    const route120 = createRoute({
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
  
    const route121 = createRoute({
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
  
    const route122 = createRoute({
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
  
    const route123 = createRoute({
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
  
    const route124 = createRoute({
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
  
    const route125 = createRoute({
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
  
    const route126 = createRoute({
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
  
    const route127 = createRoute({
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
  
    const route128 = createRoute({
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
  
    const route129 = createRoute({
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
  
    const route130 = createRoute({
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
  
    const route131 = createRoute({
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
  
    const route132 = createRoute({
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
  
    const route133 = createRoute({
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
  
    const route134 = createRoute({
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
  
    const route135 = createRoute({
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
  
    const route136 = createRoute({
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
  
    const route137 = createRoute({
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
  
    const route138 = createRoute({
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
  
    const route139 = createRoute({
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
  
    const route140 = createRoute({
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
  
    const route141 = createRoute({
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
  
    const route142 = createRoute({
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
  
    const route143 = createRoute({
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
  
    const route144 = createRoute({
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
  
    const route145 = createRoute({
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
  
    const route146 = createRoute({
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
  
    const route147 = createRoute({
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
  
    const route148 = createRoute({
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
  
    const route149 = createRoute({
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
  
    const route150 = createRoute({
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
  
    const route151 = createRoute({
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
  
    const route152 = createRoute({
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
  
    const route153 = createRoute({
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
  
    const route154 = createRoute({
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
  
    const route155 = createRoute({
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
  
    const route156 = createRoute({
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
  
    const route157 = createRoute({
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
  
    const route158 = createRoute({
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
  
    const route159 = createRoute({
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
  
    const route160 = createRoute({
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
  
    const route161 = createRoute({
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
  
    const route162 = createRoute({
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
  
    const route163 = createRoute({
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
  
    const route164 = createRoute({
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
  
    const route165 = createRoute({
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
  
    const route166 = createRoute({
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
  
    const route167 = createRoute({
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
  
    const route168 = createRoute({
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
  
    const route169 = createRoute({
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
  
    const route170 = createRoute({
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
  
    const route171 = createRoute({
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
  
    const route172 = createRoute({
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
  
    const route173 = createRoute({
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
  
    const route174 = createRoute({
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
  
    const route175 = createRoute({
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
  
    const route176 = createRoute({
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
  
    const route177 = createRoute({
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
  
    const route178 = createRoute({
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
  
    const route179 = createRoute({
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
  
    const route180 = createRoute({
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
  
    const route181 = createRoute({
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
  
    const route182 = createRoute({
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
  
    const route183 = createRoute({
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
  
    const route184 = createRoute({
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
  
    const route185 = createRoute({
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
  
    const route186 = createRoute({
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
  
    const route187 = createRoute({
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
  
    const route188 = createRoute({
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
  
    const route189 = createRoute({
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
  
    const route190 = createRoute({
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
  
    const route191 = createRoute({
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
  
    const route192 = createRoute({
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
  
    const route193 = createRoute({
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
  
    const route194 = createRoute({
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
  
    const route195 = createRoute({
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
  
    const route196 = createRoute({
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
  
    const route197 = createRoute({
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
  
    const route198 = createRoute({
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
  
    const route199 = createRoute({
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
  
    const route200 = createRoute({
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
  
    const route201 = createRoute({
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
  
    const route202 = createRoute({
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
  
    const route203 = createRoute({
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
  
    const route204 = createRoute({
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
  
    const route205 = createRoute({
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
  
    const route206 = createRoute({
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
  
    const route207 = createRoute({
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
  
    const route208 = createRoute({
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
  
    const route209 = createRoute({
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
  
    const route210 = createRoute({
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
  
    const route211 = createRoute({
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
  
    const route212 = createRoute({
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
  
    const route213 = createRoute({
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
  
    const route214 = createRoute({
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
  
    const route215 = createRoute({
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
  
    const route216 = createRoute({
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
  
    const route217 = createRoute({
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
  
    const route218 = createRoute({
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
  
    const route219 = createRoute({
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
  
    const route220 = createRoute({
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
  
    const route221 = createRoute({
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
  
    const route222 = createRoute({
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
  
    const route223 = createRoute({
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
  
    const route224 = createRoute({
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
  
    const route225 = createRoute({
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
  
    const route226 = createRoute({
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
  
    const route227 = createRoute({
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
  
    const route228 = createRoute({
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
  
    const route229 = createRoute({
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
  
    const route230 = createRoute({
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
  
    const route231 = createRoute({
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
  
    const route232 = createRoute({
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
  
    const route233 = createRoute({
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
  
    const route234 = createRoute({
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
  
    const route235 = createRoute({
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
  
    const route236 = createRoute({
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
  
    const route237 = createRoute({
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
  
    const route238 = createRoute({
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
  
    const route239 = createRoute({
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
  
    const route240 = createRoute({
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
  
    const route241 = createRoute({
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
  
    const route242 = createRoute({
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
  
    const route243 = createRoute({
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
  
    const route244 = createRoute({
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
  
    const route245 = createRoute({
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
  
    const route246 = createRoute({
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
  
    const route247 = createRoute({
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
  
    const route248 = createRoute({
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
  
    const route249 = createRoute({
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
  
    const route250 = createRoute({
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
  
    const route251 = createRoute({
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
  
    const route252 = createRoute({
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
  
    const route253 = createRoute({
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
  
    const route254 = createRoute({
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
  
    const route255 = createRoute({
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
  
    const route256 = createRoute({
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
  
    const route257 = createRoute({
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
  
    const route258 = createRoute({
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
  
    const route259 = createRoute({
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
  
    const route260 = createRoute({
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
  
    const route261 = createRoute({
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
  
    const route262 = createRoute({
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
  
    const route263 = createRoute({
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
  
    const route264 = createRoute({
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
  
    const route265 = createRoute({
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
  
    const route266 = createRoute({
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
  
    const route267 = createRoute({
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
  
    const route268 = createRoute({
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
  
    const route269 = createRoute({
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
  
    const route270 = createRoute({
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
  
    const route271 = createRoute({
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
  
    const route272 = createRoute({
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
  
    const route273 = createRoute({
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
  
    const route274 = createRoute({
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
  
    const route275 = createRoute({
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
  
    const route276 = createRoute({
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
  
    const route277 = createRoute({
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
  
    const route278 = createRoute({
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
  
    const route279 = createRoute({
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
  
    const route280 = createRoute({
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
  
    const route281 = createRoute({
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
  
    const route282 = createRoute({
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
  
    const route283 = createRoute({
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
  
    const route284 = createRoute({
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
  
    const route285 = createRoute({
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
  
    const route286 = createRoute({
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
  
    const route287 = createRoute({
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
  
    const route288 = createRoute({
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
  
    const route289 = createRoute({
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
  
    const route290 = createRoute({
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
  
    const route291 = createRoute({
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
  
    const route292 = createRoute({
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
  
    const route293 = createRoute({
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
  
    const route294 = createRoute({
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
  
    const route295 = createRoute({
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
  
    const route296 = createRoute({
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
  
    const route297 = createRoute({
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
  
    const route298 = createRoute({
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
  
    const route299 = createRoute({
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
  const routes1 = app1
    .openapi(route0, (ctx) => {
        return ctx.json({
            id: '0',
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
  
    .openapi(route1, (ctx) => {
        return ctx.json({
            id: '1',
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
  
    .openapi(route2, (ctx) => {
        return ctx.json({
            id: '2',
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
  
    .openapi(route3, (ctx) => {
        return ctx.json({
            id: '3',
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
  
    .openapi(route4, (ctx) => {
        return ctx.json({
            id: '4',
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
  
    .openapi(route5, (ctx) => {
        return ctx.json({
            id: '5',
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
  
    .openapi(route6, (ctx) => {
        return ctx.json({
            id: '6',
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
  
    .openapi(route7, (ctx) => {
        return ctx.json({
            id: '7',
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
  
    .openapi(route8, (ctx) => {
        return ctx.json({
            id: '8',
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
  
    .openapi(route9, (ctx) => {
        return ctx.json({
            id: '9',
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
  
    .openapi(route10, (ctx) => {
        return ctx.json({
            id: '10',
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
  
    .openapi(route11, (ctx) => {
        return ctx.json({
            id: '11',
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
  
    .openapi(route12, (ctx) => {
        return ctx.json({
            id: '12',
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
  
    .openapi(route13, (ctx) => {
        return ctx.json({
            id: '13',
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
  
    .openapi(route14, (ctx) => {
        return ctx.json({
            id: '14',
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
  
    .openapi(route15, (ctx) => {
        return ctx.json({
            id: '15',
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
  
    .openapi(route16, (ctx) => {
        return ctx.json({
            id: '16',
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
  
    .openapi(route17, (ctx) => {
        return ctx.json({
            id: '17',
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
  
    .openapi(route18, (ctx) => {
        return ctx.json({
            id: '18',
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
  
    .openapi(route19, (ctx) => {
        return ctx.json({
            id: '19',
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
  
    .openapi(route20, (ctx) => {
        return ctx.json({
            id: '20',
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
  
    .openapi(route21, (ctx) => {
        return ctx.json({
            id: '21',
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
  
    .openapi(route22, (ctx) => {
        return ctx.json({
            id: '22',
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
  
    .openapi(route23, (ctx) => {
        return ctx.json({
            id: '23',
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
  
    .openapi(route24, (ctx) => {
        return ctx.json({
            id: '24',
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
  
    .openapi(route25, (ctx) => {
        return ctx.json({
            id: '25',
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
  
    .openapi(route26, (ctx) => {
        return ctx.json({
            id: '26',
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
  
    .openapi(route27, (ctx) => {
        return ctx.json({
            id: '27',
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
  
    .openapi(route28, (ctx) => {
        return ctx.json({
            id: '28',
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
  
    .openapi(route29, (ctx) => {
        return ctx.json({
            id: '29',
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
  
    .openapi(route30, (ctx) => {
        return ctx.json({
            id: '30',
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
  
    .openapi(route31, (ctx) => {
        return ctx.json({
            id: '31',
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
  
    .openapi(route32, (ctx) => {
        return ctx.json({
            id: '32',
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
  
    .openapi(route33, (ctx) => {
        return ctx.json({
            id: '33',
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
  
    .openapi(route34, (ctx) => {
        return ctx.json({
            id: '34',
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
  
    .openapi(route35, (ctx) => {
        return ctx.json({
            id: '35',
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
  
    .openapi(route36, (ctx) => {
        return ctx.json({
            id: '36',
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
  
    .openapi(route37, (ctx) => {
        return ctx.json({
            id: '37',
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
  
    .openapi(route38, (ctx) => {
        return ctx.json({
            id: '38',
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
  
    .openapi(route39, (ctx) => {
        return ctx.json({
            id: '39',
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
  
    .openapi(route40, (ctx) => {
        return ctx.json({
            id: '40',
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
  
    .openapi(route41, (ctx) => {
        return ctx.json({
            id: '41',
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
  
    .openapi(route42, (ctx) => {
        return ctx.json({
            id: '42',
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
  
    .openapi(route43, (ctx) => {
        return ctx.json({
            id: '43',
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
  
    .openapi(route44, (ctx) => {
        return ctx.json({
            id: '44',
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
  
    .openapi(route45, (ctx) => {
        return ctx.json({
            id: '45',
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
  
    .openapi(route46, (ctx) => {
        return ctx.json({
            id: '46',
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
  
    .openapi(route47, (ctx) => {
        return ctx.json({
            id: '47',
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
  
    .openapi(route48, (ctx) => {
        return ctx.json({
            id: '48',
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
  
    .openapi(route49, (ctx) => {
        return ctx.json({
            id: '49',
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
  
    .openapi(route50, (ctx) => {
        return ctx.json({
            id: '50',
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
  
    .openapi(route51, (ctx) => {
        return ctx.json({
            id: '51',
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
  
    .openapi(route52, (ctx) => {
        return ctx.json({
            id: '52',
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
  
    .openapi(route53, (ctx) => {
        return ctx.json({
            id: '53',
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
  
    .openapi(route54, (ctx) => {
        return ctx.json({
            id: '54',
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
  
    .openapi(route55, (ctx) => {
        return ctx.json({
            id: '55',
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
  
    .openapi(route56, (ctx) => {
        return ctx.json({
            id: '56',
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
  
    .openapi(route57, (ctx) => {
        return ctx.json({
            id: '57',
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
  
    .openapi(route58, (ctx) => {
        return ctx.json({
            id: '58',
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
  
    .openapi(route59, (ctx) => {
        return ctx.json({
            id: '59',
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
  
    .openapi(route60, (ctx) => {
        return ctx.json({
            id: '60',
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
  
    .openapi(route61, (ctx) => {
        return ctx.json({
            id: '61',
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
  
    .openapi(route62, (ctx) => {
        return ctx.json({
            id: '62',
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
  
    .openapi(route63, (ctx) => {
        return ctx.json({
            id: '63',
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
  
    .openapi(route64, (ctx) => {
        return ctx.json({
            id: '64',
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
  
    .openapi(route65, (ctx) => {
        return ctx.json({
            id: '65',
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
  
    .openapi(route66, (ctx) => {
        return ctx.json({
            id: '66',
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
  
    .openapi(route67, (ctx) => {
        return ctx.json({
            id: '67',
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
  
    .openapi(route68, (ctx) => {
        return ctx.json({
            id: '68',
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
  
    .openapi(route69, (ctx) => {
        return ctx.json({
            id: '69',
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
  
    .openapi(route70, (ctx) => {
        return ctx.json({
            id: '70',
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
  
    .openapi(route71, (ctx) => {
        return ctx.json({
            id: '71',
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
  
    .openapi(route72, (ctx) => {
        return ctx.json({
            id: '72',
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
  
    .openapi(route73, (ctx) => {
        return ctx.json({
            id: '73',
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
  
    .openapi(route74, (ctx) => {
        return ctx.json({
            id: '74',
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
  
    .openapi(route75, (ctx) => {
        return ctx.json({
            id: '75',
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
  
    .openapi(route76, (ctx) => {
        return ctx.json({
            id: '76',
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
  
    .openapi(route77, (ctx) => {
        return ctx.json({
            id: '77',
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
  
    .openapi(route78, (ctx) => {
        return ctx.json({
            id: '78',
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
  
    .openapi(route79, (ctx) => {
        return ctx.json({
            id: '79',
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
  
    .openapi(route80, (ctx) => {
        return ctx.json({
            id: '80',
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
  
    .openapi(route81, (ctx) => {
        return ctx.json({
            id: '81',
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
  
    .openapi(route82, (ctx) => {
        return ctx.json({
            id: '82',
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
  
    .openapi(route83, (ctx) => {
        return ctx.json({
            id: '83',
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
  
    .openapi(route84, (ctx) => {
        return ctx.json({
            id: '84',
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
  
    .openapi(route85, (ctx) => {
        return ctx.json({
            id: '85',
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
  
    .openapi(route86, (ctx) => {
        return ctx.json({
            id: '86',
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
  
    .openapi(route87, (ctx) => {
        return ctx.json({
            id: '87',
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
  
    .openapi(route88, (ctx) => {
        return ctx.json({
            id: '88',
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
  
    .openapi(route89, (ctx) => {
        return ctx.json({
            id: '89',
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
  
    .openapi(route90, (ctx) => {
        return ctx.json({
            id: '90',
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
  
    .openapi(route91, (ctx) => {
        return ctx.json({
            id: '91',
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
  
    .openapi(route92, (ctx) => {
        return ctx.json({
            id: '92',
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
  
    .openapi(route93, (ctx) => {
        return ctx.json({
            id: '93',
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
  
    .openapi(route94, (ctx) => {
        return ctx.json({
            id: '94',
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
  
    .openapi(route95, (ctx) => {
        return ctx.json({
            id: '95',
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
  
    .openapi(route96, (ctx) => {
        return ctx.json({
            id: '96',
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
  
    .openapi(route97, (ctx) => {
        return ctx.json({
            id: '97',
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
  
    .openapi(route98, (ctx) => {
        return ctx.json({
            id: '98',
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
  
    .openapi(route99, (ctx) => {
        return ctx.json({
            id: '99',
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
  
const app2 = new CustomHono();
const routes2 = app2
    .openapi(route0, (ctx) => {
        return ctx.json({
            id: '0',
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
  
    .openapi(route1, (ctx) => {
        return ctx.json({
            id: '1',
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
  
    .openapi(route2, (ctx) => {
        return ctx.json({
            id: '2',
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
  
    .openapi(route3, (ctx) => {
        return ctx.json({
            id: '3',
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
  
    .openapi(route4, (ctx) => {
        return ctx.json({
            id: '4',
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
  
    .openapi(route5, (ctx) => {
        return ctx.json({
            id: '5',
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
  
    .openapi(route6, (ctx) => {
        return ctx.json({
            id: '6',
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
  
    .openapi(route7, (ctx) => {
        return ctx.json({
            id: '7',
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
  
    .openapi(route8, (ctx) => {
        return ctx.json({
            id: '8',
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
  
    .openapi(route9, (ctx) => {
        return ctx.json({
            id: '9',
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
  
    .openapi(route10, (ctx) => {
        return ctx.json({
            id: '10',
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
  
    .openapi(route11, (ctx) => {
        return ctx.json({
            id: '11',
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
  
    .openapi(route12, (ctx) => {
        return ctx.json({
            id: '12',
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
  
    .openapi(route13, (ctx) => {
        return ctx.json({
            id: '13',
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
  
    .openapi(route14, (ctx) => {
        return ctx.json({
            id: '14',
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
  
    .openapi(route15, (ctx) => {
        return ctx.json({
            id: '15',
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
  
    .openapi(route16, (ctx) => {
        return ctx.json({
            id: '16',
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
  
    .openapi(route17, (ctx) => {
        return ctx.json({
            id: '17',
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
  
    .openapi(route18, (ctx) => {
        return ctx.json({
            id: '18',
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
  
    .openapi(route19, (ctx) => {
        return ctx.json({
            id: '19',
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
  
    .openapi(route20, (ctx) => {
        return ctx.json({
            id: '20',
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
  
    .openapi(route21, (ctx) => {
        return ctx.json({
            id: '21',
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
  
    .openapi(route22, (ctx) => {
        return ctx.json({
            id: '22',
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
  
    .openapi(route23, (ctx) => {
        return ctx.json({
            id: '23',
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
  
    .openapi(route24, (ctx) => {
        return ctx.json({
            id: '24',
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
  
    .openapi(route25, (ctx) => {
        return ctx.json({
            id: '25',
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
  
    .openapi(route26, (ctx) => {
        return ctx.json({
            id: '26',
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
  
    .openapi(route27, (ctx) => {
        return ctx.json({
            id: '27',
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
  
    .openapi(route28, (ctx) => {
        return ctx.json({
            id: '28',
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
  
    .openapi(route29, (ctx) => {
        return ctx.json({
            id: '29',
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
  
    .openapi(route30, (ctx) => {
        return ctx.json({
            id: '30',
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
  
    .openapi(route31, (ctx) => {
        return ctx.json({
            id: '31',
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
  
    .openapi(route32, (ctx) => {
        return ctx.json({
            id: '32',
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
  
    .openapi(route33, (ctx) => {
        return ctx.json({
            id: '33',
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
  
    .openapi(route34, (ctx) => {
        return ctx.json({
            id: '34',
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
  
    .openapi(route35, (ctx) => {
        return ctx.json({
            id: '35',
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
  
    .openapi(route36, (ctx) => {
        return ctx.json({
            id: '36',
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
  
    .openapi(route37, (ctx) => {
        return ctx.json({
            id: '37',
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
  
    .openapi(route38, (ctx) => {
        return ctx.json({
            id: '38',
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
  
    .openapi(route39, (ctx) => {
        return ctx.json({
            id: '39',
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
  
    .openapi(route40, (ctx) => {
        return ctx.json({
            id: '40',
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
  
    .openapi(route41, (ctx) => {
        return ctx.json({
            id: '41',
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
  
    .openapi(route42, (ctx) => {
        return ctx.json({
            id: '42',
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
  
    .openapi(route43, (ctx) => {
        return ctx.json({
            id: '43',
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
  
    .openapi(route44, (ctx) => {
        return ctx.json({
            id: '44',
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
  
    .openapi(route45, (ctx) => {
        return ctx.json({
            id: '45',
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
  
    .openapi(route46, (ctx) => {
        return ctx.json({
            id: '46',
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
  
    .openapi(route47, (ctx) => {
        return ctx.json({
            id: '47',
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
  
    .openapi(route48, (ctx) => {
        return ctx.json({
            id: '48',
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
  
    .openapi(route49, (ctx) => {
        return ctx.json({
            id: '49',
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
  
    .openapi(route50, (ctx) => {
        return ctx.json({
            id: '50',
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
  
    .openapi(route51, (ctx) => {
        return ctx.json({
            id: '51',
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
  
    .openapi(route52, (ctx) => {
        return ctx.json({
            id: '52',
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
  
    .openapi(route53, (ctx) => {
        return ctx.json({
            id: '53',
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
  
    .openapi(route54, (ctx) => {
        return ctx.json({
            id: '54',
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
  
    .openapi(route55, (ctx) => {
        return ctx.json({
            id: '55',
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
  
    .openapi(route56, (ctx) => {
        return ctx.json({
            id: '56',
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
  
    .openapi(route57, (ctx) => {
        return ctx.json({
            id: '57',
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
  
    .openapi(route58, (ctx) => {
        return ctx.json({
            id: '58',
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
  
    .openapi(route59, (ctx) => {
        return ctx.json({
            id: '59',
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
  
    .openapi(route60, (ctx) => {
        return ctx.json({
            id: '60',
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
  
    .openapi(route61, (ctx) => {
        return ctx.json({
            id: '61',
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
  
    .openapi(route62, (ctx) => {
        return ctx.json({
            id: '62',
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
  
    .openapi(route63, (ctx) => {
        return ctx.json({
            id: '63',
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
  
    .openapi(route64, (ctx) => {
        return ctx.json({
            id: '64',
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
  
    .openapi(route65, (ctx) => {
        return ctx.json({
            id: '65',
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
  
    .openapi(route66, (ctx) => {
        return ctx.json({
            id: '66',
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
  
    .openapi(route67, (ctx) => {
        return ctx.json({
            id: '67',
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
  
    .openapi(route68, (ctx) => {
        return ctx.json({
            id: '68',
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
  
    .openapi(route69, (ctx) => {
        return ctx.json({
            id: '69',
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
  
    .openapi(route70, (ctx) => {
        return ctx.json({
            id: '70',
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
  
    .openapi(route71, (ctx) => {
        return ctx.json({
            id: '71',
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
  
    .openapi(route72, (ctx) => {
        return ctx.json({
            id: '72',
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
  
    .openapi(route73, (ctx) => {
        return ctx.json({
            id: '73',
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
  
    .openapi(route74, (ctx) => {
        return ctx.json({
            id: '74',
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
  
    .openapi(route75, (ctx) => {
        return ctx.json({
            id: '75',
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
  
    .openapi(route76, (ctx) => {
        return ctx.json({
            id: '76',
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
  
    .openapi(route77, (ctx) => {
        return ctx.json({
            id: '77',
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
  
    .openapi(route78, (ctx) => {
        return ctx.json({
            id: '78',
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
  
    .openapi(route79, (ctx) => {
        return ctx.json({
            id: '79',
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
  
    .openapi(route80, (ctx) => {
        return ctx.json({
            id: '80',
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
  
    .openapi(route81, (ctx) => {
        return ctx.json({
            id: '81',
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
  
    .openapi(route82, (ctx) => {
        return ctx.json({
            id: '82',
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
  
    .openapi(route83, (ctx) => {
        return ctx.json({
            id: '83',
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
  
    .openapi(route84, (ctx) => {
        return ctx.json({
            id: '84',
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
  
    .openapi(route85, (ctx) => {
        return ctx.json({
            id: '85',
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
  
    .openapi(route86, (ctx) => {
        return ctx.json({
            id: '86',
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
  
    .openapi(route87, (ctx) => {
        return ctx.json({
            id: '87',
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
  
    .openapi(route88, (ctx) => {
        return ctx.json({
            id: '88',
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
  
    .openapi(route89, (ctx) => {
        return ctx.json({
            id: '89',
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
  
    .openapi(route90, (ctx) => {
        return ctx.json({
            id: '90',
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
  
    .openapi(route91, (ctx) => {
        return ctx.json({
            id: '91',
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
  
    .openapi(route92, (ctx) => {
        return ctx.json({
            id: '92',
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
  
    .openapi(route93, (ctx) => {
        return ctx.json({
            id: '93',
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
  
    .openapi(route94, (ctx) => {
        return ctx.json({
            id: '94',
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
  
    .openapi(route95, (ctx) => {
        return ctx.json({
            id: '95',
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
  
    .openapi(route96, (ctx) => {
        return ctx.json({
            id: '96',
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
  
    .openapi(route97, (ctx) => {
        return ctx.json({
            id: '97',
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
  
    .openapi(route98, (ctx) => {
        return ctx.json({
            id: '98',
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
  
    .openapi(route99, (ctx) => {
        return ctx.json({
            id: '99',
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
  
const app3 = new CustomHono();
const routes3 = app3
    .openapi(route0, (ctx) => {
        return ctx.json({
            id: '0',
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
  
    .openapi(route1, (ctx) => {
        return ctx.json({
            id: '1',
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
  
    .openapi(route2, (ctx) => {
        return ctx.json({
            id: '2',
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
  
    .openapi(route3, (ctx) => {
        return ctx.json({
            id: '3',
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
  
    .openapi(route4, (ctx) => {
        return ctx.json({
            id: '4',
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
  
    .openapi(route5, (ctx) => {
        return ctx.json({
            id: '5',
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
  
    .openapi(route6, (ctx) => {
        return ctx.json({
            id: '6',
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
  
    .openapi(route7, (ctx) => {
        return ctx.json({
            id: '7',
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
  
    .openapi(route8, (ctx) => {
        return ctx.json({
            id: '8',
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
  
    .openapi(route9, (ctx) => {
        return ctx.json({
            id: '9',
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
  
    .openapi(route10, (ctx) => {
        return ctx.json({
            id: '10',
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
  
    .openapi(route11, (ctx) => {
        return ctx.json({
            id: '11',
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
  
    .openapi(route12, (ctx) => {
        return ctx.json({
            id: '12',
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
  
    .openapi(route13, (ctx) => {
        return ctx.json({
            id: '13',
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
  
    .openapi(route14, (ctx) => {
        return ctx.json({
            id: '14',
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
  
    .openapi(route15, (ctx) => {
        return ctx.json({
            id: '15',
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
  
    .openapi(route16, (ctx) => {
        return ctx.json({
            id: '16',
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
  
    .openapi(route17, (ctx) => {
        return ctx.json({
            id: '17',
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
  
    .openapi(route18, (ctx) => {
        return ctx.json({
            id: '18',
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
  
    .openapi(route19, (ctx) => {
        return ctx.json({
            id: '19',
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
  
    .openapi(route20, (ctx) => {
        return ctx.json({
            id: '20',
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
  
    .openapi(route21, (ctx) => {
        return ctx.json({
            id: '21',
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
  
    .openapi(route22, (ctx) => {
        return ctx.json({
            id: '22',
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
  
    .openapi(route23, (ctx) => {
        return ctx.json({
            id: '23',
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
  
    .openapi(route24, (ctx) => {
        return ctx.json({
            id: '24',
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
  
    .openapi(route25, (ctx) => {
        return ctx.json({
            id: '25',
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
  
    .openapi(route26, (ctx) => {
        return ctx.json({
            id: '26',
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
  
    .openapi(route27, (ctx) => {
        return ctx.json({
            id: '27',
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
  
    .openapi(route28, (ctx) => {
        return ctx.json({
            id: '28',
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
  
    .openapi(route29, (ctx) => {
        return ctx.json({
            id: '29',
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
  
    .openapi(route30, (ctx) => {
        return ctx.json({
            id: '30',
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
  
    .openapi(route31, (ctx) => {
        return ctx.json({
            id: '31',
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
  
    .openapi(route32, (ctx) => {
        return ctx.json({
            id: '32',
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
  
    .openapi(route33, (ctx) => {
        return ctx.json({
            id: '33',
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
  
    .openapi(route34, (ctx) => {
        return ctx.json({
            id: '34',
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
  
    .openapi(route35, (ctx) => {
        return ctx.json({
            id: '35',
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
  
    .openapi(route36, (ctx) => {
        return ctx.json({
            id: '36',
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
  
    .openapi(route37, (ctx) => {
        return ctx.json({
            id: '37',
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
  
    .openapi(route38, (ctx) => {
        return ctx.json({
            id: '38',
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
  
    .openapi(route39, (ctx) => {
        return ctx.json({
            id: '39',
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
  
    .openapi(route40, (ctx) => {
        return ctx.json({
            id: '40',
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
  
    .openapi(route41, (ctx) => {
        return ctx.json({
            id: '41',
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
  
    .openapi(route42, (ctx) => {
        return ctx.json({
            id: '42',
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
  
    .openapi(route43, (ctx) => {
        return ctx.json({
            id: '43',
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
  
    .openapi(route44, (ctx) => {
        return ctx.json({
            id: '44',
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
  
    .openapi(route45, (ctx) => {
        return ctx.json({
            id: '45',
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
  
    .openapi(route46, (ctx) => {
        return ctx.json({
            id: '46',
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
  
    .openapi(route47, (ctx) => {
        return ctx.json({
            id: '47',
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
  
    .openapi(route48, (ctx) => {
        return ctx.json({
            id: '48',
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
  
    .openapi(route49, (ctx) => {
        return ctx.json({
            id: '49',
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
  
    .openapi(route50, (ctx) => {
        return ctx.json({
            id: '50',
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
  
    .openapi(route51, (ctx) => {
        return ctx.json({
            id: '51',
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
  
    .openapi(route52, (ctx) => {
        return ctx.json({
            id: '52',
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
  
    .openapi(route53, (ctx) => {
        return ctx.json({
            id: '53',
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
  
    .openapi(route54, (ctx) => {
        return ctx.json({
            id: '54',
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
  
    .openapi(route55, (ctx) => {
        return ctx.json({
            id: '55',
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
  
    .openapi(route56, (ctx) => {
        return ctx.json({
            id: '56',
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
  
    .openapi(route57, (ctx) => {
        return ctx.json({
            id: '57',
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
  
    .openapi(route58, (ctx) => {
        return ctx.json({
            id: '58',
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
  
    .openapi(route59, (ctx) => {
        return ctx.json({
            id: '59',
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
  
    .openapi(route60, (ctx) => {
        return ctx.json({
            id: '60',
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
  
    .openapi(route61, (ctx) => {
        return ctx.json({
            id: '61',
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
  
    .openapi(route62, (ctx) => {
        return ctx.json({
            id: '62',
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
  
    .openapi(route63, (ctx) => {
        return ctx.json({
            id: '63',
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
  
    .openapi(route64, (ctx) => {
        return ctx.json({
            id: '64',
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
  
    .openapi(route65, (ctx) => {
        return ctx.json({
            id: '65',
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
  
    .openapi(route66, (ctx) => {
        return ctx.json({
            id: '66',
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
  
    .openapi(route67, (ctx) => {
        return ctx.json({
            id: '67',
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
  
    .openapi(route68, (ctx) => {
        return ctx.json({
            id: '68',
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
  
    .openapi(route69, (ctx) => {
        return ctx.json({
            id: '69',
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
  
    .openapi(route70, (ctx) => {
        return ctx.json({
            id: '70',
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
  
    .openapi(route71, (ctx) => {
        return ctx.json({
            id: '71',
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
  
    .openapi(route72, (ctx) => {
        return ctx.json({
            id: '72',
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
  
    .openapi(route73, (ctx) => {
        return ctx.json({
            id: '73',
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
  
    .openapi(route74, (ctx) => {
        return ctx.json({
            id: '74',
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
  
    .openapi(route75, (ctx) => {
        return ctx.json({
            id: '75',
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
  
    .openapi(route76, (ctx) => {
        return ctx.json({
            id: '76',
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
  
    .openapi(route77, (ctx) => {
        return ctx.json({
            id: '77',
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
  
    .openapi(route78, (ctx) => {
        return ctx.json({
            id: '78',
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
  
    .openapi(route79, (ctx) => {
        return ctx.json({
            id: '79',
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
  
    .openapi(route80, (ctx) => {
        return ctx.json({
            id: '80',
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
  
    .openapi(route81, (ctx) => {
        return ctx.json({
            id: '81',
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
  
    .openapi(route82, (ctx) => {
        return ctx.json({
            id: '82',
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
  
    .openapi(route83, (ctx) => {
        return ctx.json({
            id: '83',
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
  
    .openapi(route84, (ctx) => {
        return ctx.json({
            id: '84',
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
  
    .openapi(route85, (ctx) => {
        return ctx.json({
            id: '85',
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
  
    .openapi(route86, (ctx) => {
        return ctx.json({
            id: '86',
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
  
    .openapi(route87, (ctx) => {
        return ctx.json({
            id: '87',
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
  
    .openapi(route88, (ctx) => {
        return ctx.json({
            id: '88',
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
  
    .openapi(route89, (ctx) => {
        return ctx.json({
            id: '89',
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
  
    .openapi(route90, (ctx) => {
        return ctx.json({
            id: '90',
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
  
    .openapi(route91, (ctx) => {
        return ctx.json({
            id: '91',
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
  
    .openapi(route92, (ctx) => {
        return ctx.json({
            id: '92',
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
  
    .openapi(route93, (ctx) => {
        return ctx.json({
            id: '93',
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
  
    .openapi(route94, (ctx) => {
        return ctx.json({
            id: '94',
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
  
    .openapi(route95, (ctx) => {
        return ctx.json({
            id: '95',
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
  
    .openapi(route96, (ctx) => {
        return ctx.json({
            id: '96',
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
  
    .openapi(route97, (ctx) => {
        return ctx.json({
            id: '97',
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
  
    .openapi(route98, (ctx) => {
        return ctx.json({
            id: '98',
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
  
    .openapi(route99, (ctx) => {
        return ctx.json({
            id: '99',
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
  const routes = app1.route('/', routes1).route('/', routes2).route('/', routes3)
export type AppRoute = typeof routes

export default routes
