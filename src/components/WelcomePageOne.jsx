import {
  Hero,
  Container,
  Columns,
  Heading,
  Button,
} from "react-bulma-components";
import { useNavigate } from "react-router-dom";
import logo from "../assets/BarangayLogo.png";
import bg from "../assets/hero.jpg";

const WelcomePageOne = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <>
      <Hero size="fullheight" style={{ position: "relative" }}>
        <Hero.Body
          style={{
            backgroundColor: "rgba(51, 61, 173, 1)",
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
            height: "100vh",
          }}
        >
          <Container
            data-aos="fade-up"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Columns>
              <Columns.Column narrow>
                <img
                  src={logo}
                  alt="Barangay Logo"
                  style={{ width: "50vh", height: "50vh", opacity: 0.8 }}
                />
              </Columns.Column>
              <Columns.Column
                narrow
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "50vh",
                }}
              >
                <Heading textColor="white">
                  Welcome to
                  <br />
                  BARANGAY DULONG BAYAN
                </Heading>
                <Heading textColor="white" subtitle size={6}>
                  Barangay Security and Incident Reporting System <br />
                  Open Hours of Dulong Bayan BSIRS: Monday to Saturday (7:00 AM
                  - 5:00 PM)
                  <br />
                  brgydulongbayan1980@gmail.com / 09166221911 <br />
                  <br />
                  <Button
                    rounded
                    color="white"
                    outlined
                    onClick={handleRegister}
                  >
                    Create Account
                  </Button>
                </Heading>
              </Columns.Column>
            </Columns>
          </Container>
        </Hero.Body>
      </Hero>
    </>
  );
};

export default WelcomePageOne;
