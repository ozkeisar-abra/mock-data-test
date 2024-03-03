import { checkDepositRoutes } from './checkDepositeRoutes'
export const routesParents = [
    {
        description:'checkDeposit',
        path: '/accounts',
        routes: checkDepositRoutes
    },
]
