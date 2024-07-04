import { student } from "@/rotes/Student.route";
import { adminPath } from "@/rotes/admin.route";
import { FacultyPaths } from "@/rotes/faculty.route";
import { sidebarItemsGenerator } from "@/utils/SideBarItemGenerator";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

const useRrole = {
    Admin: 'admin',
    Faculty: 'faculty',
    student: 'student'
}


const Sidebar = () => {

    const role = 'student';
    let sidebarItems;

    switch (role) {
        case useRrole.Admin:
            sidebarItems = sidebarItemsGenerator(adminPath, useRrole.Admin);
            break;
        case useRrole.Faculty:
            sidebarItems = sidebarItemsGenerator(FacultyPaths, useRrole.Faculty);
            break;
        case useRrole.student:
            sidebarItems = sidebarItemsGenerator(student, useRrole.student);
            break;

        default:
            break;
    }

    return (
        <div>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
            >
                <div style={{ color: 'white', height: '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h1 >PH University</h1>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
            </Sider>
        </div>
    );
};

export default Sidebar;