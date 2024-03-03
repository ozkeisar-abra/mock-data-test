
export const checkDepositRoutes = [
	{
		routePath: '/checkDeposit',
		method: 'get',
		activeResponseIndex: 1,
		responses: [
			{
				name: 'good flow',
				description: "return the user data",
				res: {
					data: {test:"test"},
					code: 200,
				}
			},
			{
				name: 'error: user unauthorized',
				description: "calc user data",
				exec: (req)=>{
					return { data: {test:'fail'}, code: 400}
				},
			},
		]
	}
]
