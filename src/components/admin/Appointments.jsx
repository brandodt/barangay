import { Box, Heading, Form } from "react-bulma-components";
import { FaSearch, FaCheck, FaTimes } from "react-icons/fa";
import { useState } from "react";

// Add StatusBadge component
const StatusBadge = ({ status }) => {
  const getStatusStyle = () => {
    switch (status) {
      case 'pending':
        return { backgroundColor: 'rgba(241, 196, 15, 0.2)', color: '#f1c40f', border: '1px solid rgba(241, 196, 15, 0.3)' };
      case 'approved':
        return { backgroundColor: 'rgba(46, 204, 113, 0.2)', color: '#2ecc71', border: '1px solid rgba(46, 204, 113, 0.3)' };
      case 'rejected':
        return { backgroundColor: 'rgba(231, 76, 60, 0.2)', color: '#e74c3c', border: '1px solid rgba(231, 76, 60, 0.3)' };
      default:
        return { backgroundColor: 'rgba(189, 195, 199, 0.2)', color: '#bdc3c7' };
    }
  };

  return (
    <span style={{
      ...getStatusStyle(),
      padding: '0.25rem 0.75rem',
      borderRadius: '12px',
      fontSize: '0.8rem'
    }}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

function Appointments() {
  const [searchTerm, setSearchTerm] = useState("");

  const appointments = [
    {
      id: 1,
      purpose: "Barangay Clearance",
      name: "Juan Dela Cruz",
      date: "2024-01-20",
      time: "09:00 AM",
      contactNumber: "09123456789",
      status: "pending"
    },
    {
      id: 2,
      purpose: "Business Permit",
      name: "Maria Santos",
      date: "2024-01-20",
      time: "10:30 AM",
      contactNumber: "09187654321",
      status: "approved"
    },
    {
      id: 3,
      purpose: "Certificate of Indigency",
      name: "Pedro Garcia",
      date: "2024-01-21",
      time: "02:00 PM",
      contactNumber: "09198765432",
      status: "rejected"
    }
  ];

  const handleStatus = (id, newStatus) => {
    // Here you would typically update the status in your backend
    console.log(`Updating appointment ${id} to ${newStatus}`);
  };

  const filteredAppointments = appointments.filter(appointment =>
    appointment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.purpose.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          marginBottom: "1rem",
        }}
      >
        Appointments
      </Heading>

      <div style={{ 
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        padding: "1rem",
        borderRadius: "8px",
        marginBottom: "1rem"
      }}>
        <Form.Field>
          <Form.Control style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: "1rem", top: "0.75rem", color: "#fff" }}>
              <FaSearch />
            </span>
            <Form.Input
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#fff",
                paddingLeft: "2.5rem",
              }}
              placeholder="Search appointments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form.Control>
        </Form.Field>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid rgba(255, 255, 255, 0.1)" }}>
              <th style={{ color: "#fff", padding: "1rem", textAlign: "left" }}>Purpose</th>
              <th style={{ color: "#fff", padding: "1rem", textAlign: "left" }}>Name</th>
              <th style={{ color: "#fff", padding: "1rem", textAlign: "left" }}>Date</th>
              <th style={{ color: "#fff", padding: "1rem", textAlign: "left" }}>Time</th>
              <th style={{ color: "#fff", padding: "1rem", textAlign: "left" }}>Contact Number</th>
              <th style={{ color: "#fff", padding: "1rem", textAlign: "left" }}>Status</th>
              <th style={{ color: "#fff", padding: "1rem", textAlign: "left" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.map((appointment) => (
              <tr key={appointment.id} style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <td style={{ color: "#fff", padding: "1rem" }}>{appointment.purpose}</td>
                <td style={{ color: "#fff", padding: "1rem" }}>{appointment.name}</td>
                <td style={{ color: "#fff", padding: "1rem" }}>{appointment.date}</td>
                <td style={{ color: "#fff", padding: "1rem" }}>{appointment.time}</td>
                <td style={{ color: "#fff", padding: "1rem" }}>{appointment.contactNumber}</td>
                <td style={{ color: "#fff", padding: "1rem" }}>
                  <StatusBadge status={appointment.status} />
                </td>
                <td style={{ color: "#fff", padding: "1rem" }}>
                  {appointment.status === 'pending' && (
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <button
                        onClick={() => handleStatus(appointment.id, 'approved')}
                        style={{
                          backgroundColor: "rgba(46, 204, 113, 0.2)",
                          border: "1px solid rgba(46, 204, 113, 0.3)",
                          padding: "0.25rem 0.75rem",
                          borderRadius: "5px",
                          color: "#2ecc71",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.25rem"
                        }}
                      >
                        <FaCheck /> Approve
                      </button>
                      <button
                        onClick={() => handleStatus(appointment.id, 'rejected')}
                        style={{
                          backgroundColor: "rgba(231, 76, 60, 0.2)",
                          border: "1px solid rgba(231, 76, 60, 0.3)",
                          padding: "0.25rem 0.75rem",
                          borderRadius: "5px",
                          color: "#e74c3c",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.25rem"
                        }}
                      >
                        <FaTimes /> Reject
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Box>
  );
}

export default Appointments;