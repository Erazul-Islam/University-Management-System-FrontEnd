import CreateAdmin from "@/pages/admin/CreateAdmin";
import CreateFaculty from "@/pages/admin/CreateFaculty";
import CreateStudent from "@/pages/admin/CreateStudent";
import DashBoard from "@/pages/admin/DashBoard";
 
export const adminPath = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <DashBoard></DashBoard>
    },
    {
        name: "User management",
        children: [
            {
                name: 'Create-admin',
                path: 'create-admin',
                element: <CreateAdmin></CreateAdmin>
            },
            {
                name: 'Create-student',
                path: 'create-student',
                element: <CreateStudent></CreateStudent>
            },
            {
                name: 'Create-faculty',
                path: 'create-faculty',
                element: <CreateFaculty></CreateFaculty>
            }
        ]
    },
]

// export const adminSidebarItems = adminPath.reduce(
//     (acc: TSidebarItem[], item) => {
//         if (item.path && item.name) {
//             acc.push({
//                 key: item.name,
//                 label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//             });
//         }

//         if (item.children) {
//             acc.push({
//                 key: item.name,
//                 label: item.name,
//                 children: item.children.map((child) => ({
//                     key: child.name,
//                     label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//                 })),
//             });
//         }

//         return acc;
//     },
//     []
// );

// export const adminRoutes = adminPath.reduce((acc: TRoute[], item) => {
//     if (item.path && item.element) {
//         acc.push({
//             path: item.path,
//             element: item.element,
//         });
//     }

//     if (item.children) {
//         item.children.forEach((child) => {
//             acc.push({
//                 path: child.path,
//                 element: child.element,
//             });
//         });
//     }

//     return acc;
// }, []);