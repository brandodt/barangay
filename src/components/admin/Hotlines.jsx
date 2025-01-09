import { Box, Heading } from "react-bulma-components";
import { FaPhone, FaAmbulance, FaFireExtinguisher, FaShieldAlt, FaHospital, FaEdit, FaTrash } from "react-icons/fa";

const HotlineRow = ({ icon, title, numbers, description, color }) => (
  <Box style={{
    backgroundColor: `rgba(${color}, 0.15)`,
    padding: "1rem",
    border: `1px solid rgba(${color}, 0.3)`,
    borderRadius: "8px",
    marginBottom: "0.75rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flex: 1 }}>
      <div style={{ fontSize: "1.5rem", color: "#fff" }}>{icon}</div>
      <div style={{ flex: 1 }}>
        <div style={{ color: "#fff", fontSize: "1.1rem", fontWeight: "bold" }}>{title}</div>
        <div style={{ display: "flex", gap: "1rem", marginTop: "0.25rem" }}>
          {numbers.map((number, index) => (
            <div key={index} style={{ color: "#fff", fontSize: "0.9rem" }}>
              <FaPhone style={{ marginRight: "0.25rem" }} /> {number}
            </div>
          ))}
        </div>
        <div style={{ color: "#ddd", fontSize: "0.8rem", marginTop: "0.25rem" }}>{description}</div>
      </div>
    </div>
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <button 
        style={{ 
          background: "none", 
          border: "none", 
          color: "#fff", 
          cursor: "pointer",
          padding: "0.5rem",
          borderRadius: "4px",
          transition: "background-color 0.2s"
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)"}
        onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}
      >
        <FaEdit size={16} />
      </button>
      <button 
        style={{ 
          background: "none", 
          border: "none", 
          color: "#ff6b6b", 
          cursor: "pointer",
          padding: "0.5rem",
          borderRadius: "4px",
          transition: "background-color 0.2s"
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = "rgba(255, 107, 107, 0.1)"}
        onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}
      >
        <FaTrash size={16} />
      </button>
    </div>
  </Box>
);

function Hotlines() {
  const hotlinesData = [
    {
      icon: <FaAmbulance />,
      title: "Emergency Medical Services",
      numbers: ["911", "(02) 8524-1111"],
      description: "24/7 emergency medical response and ambulance services",
      color: "231, 76, 60"
    },
    {
      icon: <FaFireExtinguisher />,
      title: "Fire Department",
      numbers: ["911", "(02) 8426-0219"],
      description: "Fire emergency and rescue services",
      color: "230, 126, 34"
    },
    {
      icon: <FaShieldAlt />,
      title: "Police Station",
      numbers: ["911", "(02) 8722-0650"],
      description: "Police emergency response and security services",
      color: "52, 152, 219"
    },
    {
      icon: <FaHospital />,
      title: "Nearby Hospitals",
      numbers: ["(02) 8888-8888", "(02) 7777-7777"],
      description: "Local hospitals and medical facilities",
      color: "46, 204, 113"
    }
  ];

  return (
    <Box
      style={{
        minHeight: "85vh",
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        padding: "2rem",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(20px)",
        borderRadius: "15px",
        overflow: "auto",
      }}
    >
      <Heading
        size={4}
        style={{
          color: "#fff",
          borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
          paddingBottom: "1rem",
          marginBottom: "2rem",
        }}
      >
        Emergency Hotlines
      </Heading>
      <div>
        {hotlinesData.map((hotline, index) => (
          <HotlineRow key={index} {...hotline} />
        ))}
      </div>
    </Box>
  );
}

export default Hotlines;