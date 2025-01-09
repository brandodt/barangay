import { Box, Heading } from "react-bulma-components";
import { FaEdit, FaTrash, FaBullhorn, FaCalendarAlt } from "react-icons/fa";

const AnnouncementCard = ({ title, date, content, priority }) => (
  <Box style={{
    backgroundColor: priority === 'high' ? 'rgba(231, 76, 60, 0.15)' : 'rgba(255, 255, 255, 0.15)',
    padding: "1.5rem",
    border: priority === 'high' ? '1px solid rgba(231, 76, 60, 0.3)' : '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: "8px",
    marginBottom: "1rem"
  }}>
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <FaBullhorn style={{ color: "#fff" }} />
        <h3 style={{ color: "#fff", fontSize: "1.1rem", fontWeight: "bold" }}>{title}</h3>
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
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
      <FaCalendarAlt style={{ color: "#ddd", fontSize: "0.8rem" }} />
      <span style={{ color: "#ddd", fontSize: "0.8rem" }}>{date}</span>
    </div>
    <p style={{ color: "#fff", fontSize: "0.9rem", lineHeight: "1.5" }}>{content}</p>
  </Box>
);

function Announcements() {
  const announcements = [
    {
      title: "Community Clean-up Drive",
      date: "2024-01-20",
      content: "Join us for our monthly community clean-up drive this Saturday. Meeting point at the Barangay Hall at 7:00 AM. Please bring gloves and water.",
      priority: "normal"
    },
    {
      title: "COVID-19 Vaccination Schedule",
      date: "2024-01-18",
      content: "Free COVID-19 booster shots available next week. First come, first served basis. Bring valid ID and vaccination card.",
      priority: "high"
    },
    {
      title: "Road Maintenance Notice",
      date: "2024-01-15",
      content: "Main street will undergo repairs from January 25-30. Please use alternative routes during this period.",
      priority: "normal"
    }
  ];

  return (
    <Box style={{
      minHeight: "85vh",
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      padding: "2rem",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(20px)",
      borderRadius: "15px",
      overflow: "auto",
    }}>
      <Heading size={4} style={{
        color: "#fff",
        borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
        paddingBottom: "1rem",
        marginBottom: "2rem",
      }}>
        Announcements
      </Heading>
      {announcements.map((announcement, index) => (
        <AnnouncementCard key={index} {...announcement} />
      ))}
    </Box>
  );
}

export default Announcements;
