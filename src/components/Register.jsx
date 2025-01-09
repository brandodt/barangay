import { Box, Heading, Form, Button } from "react-bulma-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/hero.jpg";

// Add this style to the head of your component
const inputStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  color: "#fff",
  marginBottom: "1rem",
  '&::placeholder': {
    color: "#fff",
    opacity: 0.7
  }
};

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    contactNumber: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration attempt:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleReturnHome = () => {
    navigate('/');
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        style={{
          width: "400px",
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          padding: "2rem",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(20px)",
          borderRadius: "15px",
        }}
      >
        <Heading
          size={4}
          style={{
            color: "#fff",
            borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
            paddingBottom: "1rem",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          Register
        </Heading>

        <form onSubmit={handleSubmit}>
          <div style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", padding: "1.5rem", borderRadius: "8px", marginBottom: "1.5rem" }}>
            <Form.Field>
              <Form.Control>
                <Form.Input
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  style={inputStyle}
                  className="white-placeholder"
                  required
                />
              </Form.Control>
            </Form.Field>

            <Form.Field>
              <Form.Control>
                <Form.Input
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  style={inputStyle}
                  className="white-placeholder"
                  required
                />
              </Form.Control>
            </Form.Field>

            <Form.Field>
              <Form.Control>
                <Form.Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  style={inputStyle}
                  className="white-placeholder"
                  required
                />
              </Form.Control>
            </Form.Field>

            <Form.Field>
              <Form.Control>
                <Form.Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  style={inputStyle}
                  className="white-placeholder"
                  required
                />
              </Form.Control>
            </Form.Field>

            <Form.Field>
              <Form.Control>
                <Form.Input
                  type="password"
                  placeholder="Confirm Password"
                  style={inputStyle}
                  className="white-placeholder"
                  required
                />
              </Form.Control>
            </Form.Field>

            <Button.Group align="center" style={{ marginTop: "1.5rem" }}>
              <Button
                type="submit"
                style={{
                  backgroundColor: "rgba(46, 204, 113, 0.2)",
                  border: "1px solid rgba(46, 204, 113, 0.3)",
                  color: "#2ecc71",
                  transition: "all 0.3s ease",
                }}
                rounded
              >
                Register
              </Button>
            </Button.Group>
          </div>

          <div
            style={{
              textAlign: "center",
              color: "#fff",
              marginTop: "1rem"
            }}
          >
            Already have an account?{" "}
            <Link 
              to="/login" 
              style={{ 
                color: "#2ecc71",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
            >
              Login here
            </Link>
            <br />
            <Button
              onClick={handleReturnHome}
              style={{
                backgroundColor: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                color: "#fff",
                marginTop: "1rem",
                transition: "all 0.3s ease",
              }}
              rounded
            >
              Return to Home
            </Button>
          </div>
        </form>
      </Box>
    </div>
  );
}

// Add this to your global CSS or component-specific CSS
const styles = `
  .white-placeholder::placeholder {
    color: white !important;
    opacity: 0.7 !important;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Register;
