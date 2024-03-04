import checkDepositRoutes from './checkDeposit';

const routesParents = [
    {
        filename:'checkDeposit',
        path: '/accounts',
        routes: checkDepositRoutes
    },
]

export default routesParents
