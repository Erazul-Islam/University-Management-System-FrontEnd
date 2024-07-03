import App from '@/App'
import Login from '@/pages/Login'
import { createBrowserRouter } from 'react-router-dom'
import { adminPath } from './admin.route'
import { routerGenerator } from '@/utils/RoutesGenerator'



const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>
    },
    {
        path: '/admin',
        element: <App></App>,
        children: routerGenerator(adminPath)
    },
    {
        path: '/student',
        element: <App></App>,
        children: routerGenerator(adminPath)
    },
    {
        path: '/faculty',
        element: <App></App>,
        children: routerGenerator(adminPath)
    },
    {
        path: '/login',
        element: <Login></Login>
    }
])

export default router