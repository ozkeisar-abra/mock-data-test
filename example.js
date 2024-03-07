const parent = {
  filename: 'example',
  path: '/example',
  routes : [
    {
      routePath: '/route',
      method: 'get',
      description: 'example route for stub-on-prem',
      activeResponseIndex: 1,
      responses: [
        {
          name: 'object response example',
          description: 'return example of object response ',
          res: {
            data: {
              isObj: true,
            },
            code: 200,
          },
          type: 'obj',
        },
        {
          name: 'func response example',
          description: 'example of func that return object response',
          exec: (req) => {
            return { data: { isFunc: true }, code: 400 }
          },
          type: 'func',
        },
      ],
    },
  ],
}

module.exports = parent
