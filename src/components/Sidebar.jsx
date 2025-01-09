import { Box, Heading, Menu } from "react-bulma-components";
import {
  FaHome,
  FaUsers,
  FaUserTie,
  FaCertificate,
  FaExclamationCircle,
  FaBullhorn,
  FaCog,
} from "react-icons/fa";

const menuItems = [
  { name: "Dashboard", icon: <FaHome /> },
  { name: "Residents", icon: <FaUsers /> },
  { name: "Officials", icon: <FaUserTie /> },
  { name: "Certificates", icon: <FaCertificate /> },
  { name: "Complaints", icon: <FaExclamationCircle /> },
  { name: "Announcements", icon: <FaBullhorn /> },
  { name: "Settings", icon: <FaCog /> },
];

const MenuItem = ({ name, icon }) => (
  <Menu.List.Item
    style={{
      backgroundColor: "transparent",
      padding: "0.75rem 1.5rem",
      margin: "0.5rem 0",
      fontSize: "1rem",
      cursor: "pointer",
      borderRadius: "8px",
      color: "white",
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
      e.currentTarget.style.transform = "translateX(5px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "transparent";
      e.currentTarget.style.transform = "translateX(0)";
    }}
  >
    {icon} {name}
  </Menu.List.Item>
);

const Sidebar = () => (
  <Box
    style={{
      minHeight: '85vh',
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(20px)",
      borderRadius: "15px",
    }}
  >
    <Heading
      size={4}
      style={{ 
        color: "#fff", 
        borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
        paddingBottom: "1rem",
        marginBottom: "1rem"
      }}
    >
      Admin Panel
    </Heading>
    <Menu style={{ flex: 1 }}>
      <Menu.List>
        {menuItems.map(({ name, icon }) => (
          <MenuItem key={name} name={name} icon={icon} />
        ))}
      </Menu.List>
    </Menu>
  </Box>
);

export default Sidebar;
