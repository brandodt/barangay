import { Hero, Container, Columns, Heading } from "react-bulma-components";
import bg from "../assets/hero.jpg";

const WelcomePageThree = () => {
    return (
        <Hero size="fullheight" id="about-section">
            <Hero.Body style={{
                backgroundColor: "rgb(83, 81, 41)",
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "overlay",
            }}>
                <Container>
                    <Columns className="is-centered">
                        <Columns.Column 
                            data-aos="zoom-in"
                            size={6} 
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
                            }}>
                            <Heading title textColor="white" size={4} className="has-text-centered mb-4">
                                City Directory
                            </Heading>
                            <div style={{ 
                                width: '100%', 
                                color: 'white',
                                maxHeight: '60vh',
                                overflowY: 'auto',
                                padding: '0 1rem',
                                scrollbarWidth: 'thin',
                                scrollbarColor: 'rgba(255,255,255,0.5) transparent'
                            }}>
                                {/* Office of the City Mayor */}
                                <Heading size={5} textColor="white" className="mb-2">Office of the City Mayor</Heading>
                                <DirectoryItem title="City Mayor's Office" number="123-4567" />
                                <DirectoryItem title="Executive Assistant" number="123-4568" />
                                <DirectoryItem title="Secretary Office" number="123-4569" />
                                <DirectoryItem title="Records Section" number="123-4570" />
                                
                                {/* City Administration */}
                                <Heading size={5} textColor="white" className="mb-2 mt-4">City Administration</Heading>
                                <DirectoryItem title="City Administrator" number="123-4571" />
                                <DirectoryItem title="Human Resources" number="123-4572" />
                                <DirectoryItem title="Budget Office" number="123-4573" />
                                <DirectoryItem title="Accounting Office" number="123-4574" />
                                
                                {/* Public Services */}
                                <Heading size={5} textColor="white" className="mb-2 mt-4">Public Services</Heading>
                                <DirectoryItem title="Health Department" number="123-4575" />
                                <DirectoryItem title="Social Services" number="123-4576" />
                                <DirectoryItem title="Engineering Office" number="123-4577" />
                                <DirectoryItem title="Planning Office" number="123-4578" />
                            </div>
                        </Columns.Column>
                    </Columns>
                </Container>
            </Hero.Body>
        </Hero>
    );
}

// Helper component for directory items
const DirectoryItem = ({ title, number }) => (
    <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        marginBottom: '0.5rem',
        padding: '0.5rem',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
    }}>
        <span>{title}</span>
        <span>{number}</span>
    </div>
);

export default WelcomePageThree;
