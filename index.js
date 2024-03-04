import checkDepositRoutes from './checkDepositeRoutes';

const routesParents = [
    {
        description:'checkDeposit',
        path: '/accounts',
        routes: checkDepositRoutes
    },
]

export default routesParents
