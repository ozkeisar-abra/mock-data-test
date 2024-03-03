import { checkDepositRoutes } from './checkDeposit'
export const routesParents = [
    {
        description:'checkDeposit',
        path: '/accounts',
        routes: checkDepositRoutes
    },
]
