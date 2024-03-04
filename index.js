import checkDepositRoutes from './checkDeposit';

const routesParents = [
    {
        path: '/accounts',
        routes: checkDepositRoutes
    },
]

export default routesParents
