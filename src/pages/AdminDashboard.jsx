import { Hero, Container, Columns } from "react-bulma-components";
import bg from "../assets/hero.jpg";
import Sidebar from "../components/Sidebar";
import DashboardContent from "../components/DashboardContent";

const AdminDashboard = () => {
  return (
    <Hero size="fullheight" style={{ position: "relative" }}>
      <Hero.Body
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          padding: "1.5rem",
        }}
      >
        <Container style={{ padding: '2rem 1rem' }}>
          <Columns>
            <Columns.Column size={3}>
              <Sidebar />
            </Columns.Column>
            <Columns.Column size={9}>
              <DashboardContent />
            </Columns.Column>
          </Columns>
        </Container>
      </Hero.Body>
    </Hero>
  );
};

export default AdminDashboard;
