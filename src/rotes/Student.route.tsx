/* eslint-disable react-refresh/only-export-components */
import OfferedCourse from "@/pages/student/OfferedCourse";
import StudentDashBoard from "@/pages/student/StudentDashBoard";

export default function Student() {
  return (
    <div>Student.route</div>
  )
}

export const student = [
    {
      name: 'Dashboard',
      path: 'dashboard',
      element: <StudentDashBoard />,
    },
    {
      name: 'Offered Course',
      path: 'offered-course',
      element: <OfferedCourse />,
    },
  ];