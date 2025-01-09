import { Box, Heading, Table } from "react-bulma-components";
import { FaUsers, FaFileAlt, FaExclamationCircle } from "react-icons/fa";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register ChartJS modules
ChartJS.register(ArcElement, Tooltip, Legend);

const StatBox = ({ icon, title, value, color }) => (
  <Box
    style={{
      height: "15vh",
      flex: "1",
      backgroundColor: `rgba(${color}, 0.15)`,
      padding: "1.5rem",
      border: `1px solid rgba(${color}, 0.3)`,
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(20px)",
      borderRadius: "15px",
      display: "flex",
      alignItems: "center",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <div style={{ fontSize: "2rem", color: "#fff" }}>{icon}</div>
      <div>
        <div style={{ color: "#fff", fontSize: "0.9rem" }}>{title}</div>
        <div style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "bold" }}>
          {value}
        </div>
      </div>
    </div>
  </Box>
);

const DashboardContent = () => {
  const recentActivities = [
    { date: "2023-07-01", activity: "New resident registered", status: "Completed" },
    { date: "2023-07-01", activity: "Complaint filed", status: "Pending" },
    { date: "2023-06-30", activity: "Certificate issued", status: "Completed" },
    { date: "2023-06-30", activity: "New announcement posted", status: "Active" },
  ];

  // Data for the pie chart
  const pieChartData = {
    labels: ["1-12", "13-18", "18-59", "60-99", "100+"],
    datasets: [
      {
        data: [10, 20, 50, 15, 5],
        backgroundColor: [
          'rgba(255, 159, 64, 0.8)',  // orange
          'rgba(54, 162, 235, 0.8)',  // blue
          'rgba(75, 192, 192, 0.8)',  // teal
          'rgba(153, 102, 255, 0.8)', // purple
          'rgba(255, 99, 132, 0.8)',  // pink
        ],
        borderColor: 'rgba(255, 255, 255, 0.3)',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#fff',
          font: {
            size: 14
          },
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#000',
        bodyColor: '#000',
        padding: 12,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        borderWidth: 1
      }
    }
  };

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
        Dashboard Overview
      </Heading>
      <div style={{ display: "flex", gap: "1.5rem", flexDirection: "column" }}>
        {/* Stats Row */}
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <StatBox
            icon={<FaUsers />}
            title="Total Residents"
            value="1,234"
            color="65, 105, 225"
          />
          <StatBox
            icon={<FaFileAlt />}
            title="Certificates Issued"
            value="156"
            color="46, 204, 113"
          />
          <StatBox
            icon={<FaExclamationCircle />}
            title="Active Complaints"
            value="8"
            color="231, 76, 60"
          />
        </div>

        {/* Main Content Row */}
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <Box
            style={{
              flex: "1",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              padding: "1.5rem",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(20px)",
              borderRadius: "15px",
            }}
          >
            <Heading size={5} style={{ color: "#fff", marginBottom: "1rem" }}>
              Barangay Age Group Distribution
            </Heading>
            <div style={{ height: "400px", position: "relative" }}>
              <Pie data={pieChartData} options={chartOptions} />
            </div>
          </Box>
        </div>
      </div>
    </Box>
  );
};

export default DashboardContent;
