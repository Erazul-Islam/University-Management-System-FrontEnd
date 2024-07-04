import FacultyDashBoard from "@/pages/faculty/FacultyDashBoard";
import OfferedCourse from "@/pages/faculty/OfferedCourse";


export const FacultyPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <FacultyDashBoard />,
    },
    {
        name: 'Offered Course',
        path: 'offered-course',
        element: <OfferedCourse />,
    },
];