import { Box, Heading, Form, Button, Table } from "react-bulma-components";
import { FaSearch, FaArchive, FaCheck } from "react-icons/fa";
import { useState } from "react";

function Reports() {
  const [searchTerm, setSearchTerm] = useState("");

  const reports = [
    {
      id: 1,
      contact: "09123456789",
      location: "123 Main Street",
      dateTime: "2024-01-15 14:30",
      description: "Motorcycle stolen outside the house",
      isResolved: false
    },
    {
      id: 2,
      contact: "09187654321",
      location: "456 Oak Avenue",
      dateTime: "2024-01-14 09:15",
      description: "Noise complaint from neighboring house",
      isResolved: false
    }
  ];

  const filteredReports = reports.filter(report =>
    report.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleResolve = (id) => {
    console.log(`Marking report ${id} as resolved`);
  };

  const handleArchive = (id) => {
    console.log(`Archiving report ${id}`);
  };

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
        marginBottom: "1rem",
      }}>
        Incident Reports
      </Heading>

      <Box style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        padding: "1rem",
        marginBottom: "1.5rem"
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
              placeholder="Search reports..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form.Control>
        </Form.Field>
      </Box>

      <Table style={{ backgroundColor: "transparent", color: "#fff" }}>
        <thead>
          <tr>
            <th style={{ color: "#fff" }}>Contact</th>
            <th style={{ color: "#fff" }}>Location</th>
            <th style={{ color: "#fff" }}>Date & Time</th>
            <th style={{ color: "#fff" }}>Description</th>
            <th style={{ color: "#fff" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredReports.map((report) => (
            <tr key={report.id}>
              <td style={{ color: "#fff" }}>{report.contact}</td>
              <td style={{ color: "#fff" }}>{report.location}</td>
              <td style={{ color: "#fff" }}>{report.dateTime}</td>
              <td style={{ color: "#fff" }}>{report.description}</td>
              <td>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <Button
                    size="small"
                    onClick={() => handleResolve(report.id)}
                    style={{
                      backgroundColor: "rgba(46, 204, 113, 0.2)",
                      border: "1px solid rgba(46, 204, 113, 0.3)",
                      color: "#2ecc71",
                    }}
                  >
                    <FaCheck style={{ marginRight: "0.5rem" }} />
                    Resolve
                  </Button>
                  <Button
                    size="small"
                    onClick={() => handleArchive(report.id)}
                    style={{
                      backgroundColor: "rgba(231, 76, 60, 0.2)",
                      border: "1px solid rgba(231, 76, 60, 0.3)",
                      color: "#e74c3c",
                    }}
                  >
                    <FaArchive style={{ marginRight: "0.5rem" }} />
                    Archive
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Box>
  );
}

export default Reports;
