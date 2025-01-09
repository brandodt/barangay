import { Footer, Hero, Container, Content } from "react-bulma-components";

function HeroFooter() {
  return (
    <Hero.Footer>
      <Footer style={{ backgroundColor: '#333', padding: '2rem 0' }}>
        <Container>
          <Content style={{ textAlign: "center", color: 'white' }}>
            <p>
              <strong style={{ color: 'white' }}>Barangay Dulong Bayan</strong>
              <br />
              City of San Jose Del Monte, Bulacan
              <br />  
              Contact: brgydulongbayan1980@gmail.com | Phone: 09166221911
              <br />
              Office Hours: Monday to Saturday (7:00 AM - 5:00 PM)
              <br />
              <small>© 2024 Barangay Security and Incident Reporting System. All rights reserved.</small>
            </p>
          </Content>
        </Container>
      </Footer>
    </Hero.Footer>
  );
}

export default HeroFooter;
