import checkDepositRoutes from './checkDepositeRoutes';

export default const routesParents = [
    {
        description:'checkDeposit',
        path: '/accounts',
        routes: checkDepositRoutes
    },
]
