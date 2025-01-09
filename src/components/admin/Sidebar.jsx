import { Box, Heading, Menu } from "react-bulma-components";
import {
  FaHome,
  FaPhone,
  FaCalendarCheck,
  FaUsers,
  FaBullhorn,
  FaCog,
} from "react-icons/fa";
import { TbMessageReportFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Announcements", icon: <FaBullhorn /> },
  { name: "Dashboard", icon: <FaHome /> },
  { name: "Hotlines", icon: <FaPhone /> },
  { name: "Incident Reports", icon: <TbMessageReportFilled /> },
  { name: "Appointments", icon: <FaCalendarCheck /> },
  { name: "Residents Information", icon: <FaUsers /> },
  { name: "Settings", icon: <FaCog /> },
];

const Sidebar = () => (
  <Box
    style={{
      height: "85vh",
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(20px)",
      borderRadius: "15px",
      marginBottom: "1.5rem"
    }}
  >
    <Heading
      size={4}
      style={{
        color: "#fff",
        borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
        paddingBottom: "1rem",
        marginBottom: "1rem",
      }}
    >
      Admin Panel
    </Heading>
    <Menu style={{ flex: 1 }}>
      <Menu.List>
        {menuItems.map(({ name, icon }) => (
          <NavLink
            key={name}
            to={`/admin/${name.toLowerCase().replace(/ /g, "-")}`}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "is-active" : ""}`
            }
            style={({ isActive }) => ({
              display: "block",
              padding: "0.5rem 1rem",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "5px",
              marginBottom: "0.5rem",
              backgroundColor: isActive
                ? "rgba(255, 255, 255, 0.2)"
                : "transparent",
            })}
          >
            {icon} {name}
          </NavLink>
        ))}
      </Menu.List>
    </Menu>
  </Box>
);

export default Sidebar;
