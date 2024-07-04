import App from '@/App'
import Login from '@/pages/Login'
import { createBrowserRouter } from 'react-router-dom'
import { routerGenerator } from '@/utils/RoutesGenerator'
import { FacultyPaths } from './faculty.route'
import { adminPath } from './admin.route'
import { student } from './Student.route'



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
        children: routerGenerator(student)
    },
    {
        path: '/faculty',
        element: <App></App>,
        children: routerGenerator(FacultyPaths)
    },
    {
        path: '/login',
        element: <Login></Login>
    }
])

export default router