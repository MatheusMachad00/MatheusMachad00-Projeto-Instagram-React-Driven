import SidebarFooter from "./SidebarFooter";
import SidebarSugestoes from "./SidebarSugestoes";
import SidebarUsuarioPrincipal from "./SidebarUsuarioPrincipal";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarUsuarioPrincipal />
            <SidebarSugestoes />
            <SidebarFooter />
        </div>
    );
}