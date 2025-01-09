import { Container, Hero, Columns, Heading } from "react-bulma-components";
import bg from "../assets/hero1.jpg";
import logo from "../assets/BarangayLogo.png";
import logo1 from "../assets/bacoorLogo.png";
import logo2 from "../assets/BSERSlogo.png";

function MissionVision() {
  return (
    <Hero size="fullheight" style={{ position: "relative" }}>
      <Hero.Body
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(51, 61, 173, 0.9)",
          height: "100vh",
        }}
      >
        <Container>
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              padding: "3rem",
              borderRadius: "15px",
              backdropFilter: "blur(5px)",
            }}
          >
            <Columns style={{ color: "#fff" }} vCentered>
              {/* Logos Column */}
              <Columns.Column
                size={3}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2rem",
                }}
              >
                <img
                  src={logo1}
                  alt="Bacoor Logo"
                  style={{ width: "120px", height: "120px" }}
                />
                <img
                  src={logo}
                  alt="Barangay Logo"
                  style={{ width: "150px", height: "150px" }}
                />
                <img
                  src={logo2}
                  alt="BSERS Logo"
                  style={{ width: "120px", height: "120px" }}
                />
              </Columns.Column>

              {/* Vertical Divider */}
              <div
                style={{
                  width: "2px",
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                  alignSelf: "stretch",
                  margin: "0 2rem",
                }}
              />

              {/* Mission and Vision Column */}
              <Columns.Column>
                <Heading
                  size={3}
                  style={{
                    color: "#fff",
                    marginBottom: "2rem",
                    textAlign: "center",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                  }}
                >
                  Barangay Dulong Bayan
                </Heading>

                <div
                  className="mission-section"
                  style={{ marginBottom: "3rem" }}
                >
                  <Heading
                    size={4}
                    style={{
                      color: "#fff",
                      marginBottom: "1rem",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Mission
                  </Heading>
                  <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                    To institute good governance, promote culture, trade and
                    investment in the City, through modern technology towards a
                    safe and sound environment.
                  </p>
                </div>

                <div className="vision-section">
                  <Heading
                    size={4}
                    style={{
                      color: "#fff",
                      marginBottom: "1rem",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Vision
                  </Heading>
                  <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                    To institute good governance, promote culture, trade and
                    investment in the City, through modern technology towards a
                    safe and sound environment.
                  </p>
                </div>
              </Columns.Column>
            </Columns>
          </div>
        </Container>
      </Hero.Body>
    </Hero>
  );
}

export default MissionVision;
