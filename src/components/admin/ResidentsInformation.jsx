import { Box, Heading, Form } from "react-bulma-components";
import { FaSearch, FaEdit, FaTrash, FaUserPlus } from "react-icons/fa";
import { useState } from "react";

function ResidentsInformation() {
  const [searchTerm, setSearchTerm] = useState("");

  const residents = [
    {
      id: 1,
      name: "Juan Dela Cruz",
      age: 45,
      address: "123 Main Street",
      contact: "09123456789",
      occupation: "Teacher",
      civilStatus: "Married"
    },
    {
      id: 2,
      name: "Maria Santos",
      age: 32,
      address: "456 Oak Avenue",
      contact: "09187654321",
      occupation: "Nurse",
      civilStatus: "Single"
    },
    // Add more sample data as needed
  ];

  const filteredResidents = residents.filter(resident =>
    resident.name.toLowerCase().includes(searchTerm.toLowerCase())
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
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
        <Heading
          size={4}
          style={{
            color: "#fff",
          }}
        >
          Residents Information
        </Heading>
        <button style={{
          backgroundColor: "rgba(46, 204, 113, 0.15)",
          border: "1px solid rgba(46, 204, 113, 0.3)",
          padding: "0.5rem 1rem",
          borderRadius: "5px",
          color: "#fff",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem"
        }}>
          <FaUserPlus /> Add New Resident
        </button>
      </div>

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
              placeholder="Search residents..."
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
              <th style={{ color: "#fff", padding: "1rem", textAlign: "left" }}>Name</th>
              <th style={{ color: "#fff", padding: "1rem", textAlign: "left" }}>Age</th>
              <th style={{ color: "#fff", padding: "1rem", textAlign: "left" }}>Address</th>
              <th style={{ color: "#fff", padding: "1rem", textAlign: "left" }}>Contact</th>
              <th style={{ color: "#fff", padding: "1rem", textAlign: "left" }}>Occupation</th>
              <th style={{ color: "#fff", padding: "1rem", textAlign: "left" }}>Civil Status</th>
              <th style={{ color: "#fff", padding: "1rem", textAlign: "left" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredResidents.map((resident) => (
              <tr key={resident.id} style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <td style={{ color: "#fff", padding: "1rem" }}>{resident.name}</td>
                <td style={{ color: "#fff", padding: "1rem" }}>{resident.age}</td>
                <td style={{ color: "#fff", padding: "1rem" }}>{resident.address}</td>
                <td style={{ color: "#fff", padding: "1rem" }}>{resident.contact}</td>
                <td style={{ color: "#fff", padding: "1rem" }}>{resident.occupation}</td>
                <td style={{ color: "#fff", padding: "1rem" }}>{resident.civilStatus}</td>
                <td style={{ color: "#fff", padding: "1rem" }}>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <button style={{ background: "none", border: "none", color: "#fff", cursor: "pointer" }}>
                      <FaEdit />
                    </button>
                    <button style={{ background: "none", border: "none", color: "#ff6b6b", cursor: "pointer" }}>
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Box>
  );
}

export default ResidentsInformation;