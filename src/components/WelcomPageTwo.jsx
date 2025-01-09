import {
  Hero,
  Container,
  Columns,
  Heading,
  Button,
} from "react-bulma-components";
import bg2 from "../assets/hero2.jpg";
import extinguisher from "../assets/extinguisher.png";
import police from "../assets/police.png";
import shield from "../assets/shield.png";
import { FaPhoneAlt } from "react-icons/fa";


function WelcomPageTwo() {
  return (
    <Hero size="fullheight" id="about-section">
      <Hero.Body
        style={{
          backgroundColor: "rgb(157, 75, 75)",
          backgroundImage: `url(${bg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <Container>
          <Heading title textColor="white" size={1} className="has-text-centered mb-6" data-aos="fade-up">
            Barangay Services
          </Heading>
          <Columns className="is-centered">
            <Columns.Column 
              data-aos="fade-right"
              data-aos-delay="100"
              size={3}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem',
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '2rem',
                borderRadius: '15px',
                backdropFilter: 'blur(5px)',
                margin: '1rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              <img src={extinguisher} alt="Fire Emergency" style={{ width: '200px', transition: '0.3s', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }} />
              <Button color="danger" rounded size="large"><FaPhoneAlt className="mr-3" />
                Call Fire Department</Button>
            </Columns.Column>
            <Columns.Column 
              data-aos="fade-up"
              data-aos-delay="200"
              size={3}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem',
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '2rem',
                borderRadius: '15px',
                backdropFilter: 'blur(5px)',
                margin: '1rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              <img src={police} alt="Police" style={{ width: '200px', transition: '0.3s', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }} />
              <Button color="info" rounded size="large"><FaPhoneAlt className="mr-3" />
Call Police</Button>
            </Columns.Column>
            <Columns.Column 
              data-aos="fade-left"
              data-aos-delay="300"
              size={3}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem',
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '2rem',
                borderRadius: '15px',
                backdropFilter: 'blur(5px)',
                margin: '1rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              <img src={shield} alt="Barangay Security" style={{ width: '200px', transition: '0.3s', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }} />
              <Button color="primary" rounded size="large"><FaPhoneAlt className="mr-3" />
Call Barangay</Button>
            </Columns.Column>
          </Columns>
        </Container>
      </Hero.Body>
    </Hero>
  );
}

export default WelcomPageTwo;
