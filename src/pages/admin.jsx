import { Hero, Container, Columns } from "react-bulma-components";
import { Outlet } from "react-router-dom";
import bg from "../assets/hero.jpg";
import Sidebar from "../components/admin/Sidebar";

const Admin = () => {
  return (
    <Hero size="fullheight" style={{ position: "relative" }}>
      <Hero.Body
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <Container>
          <Columns className="is-flex">
            <Columns.Column size={3} style={{ paddingTop: "1.5rem" }}>
              <Sidebar />
            </Columns.Column>
            <Columns.Column size={9} style={{ paddingTop: "1.5rem" }}>
              <Outlet />
            </Columns.Column>
          </Columns>
        </Container>
      </Hero.Body>
    </Hero>
  );
};

export default Admin;
