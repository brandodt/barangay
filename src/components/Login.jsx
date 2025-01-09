import { Box, Heading, Form, Button } from "react-bulma-components";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';

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

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Login attempt:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleReturnHome = () => {
    navigate('/');
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/hero.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <Box style={{
        width: "400px",
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        padding: "2rem",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(20px)",
        borderRadius: "15px",
      }}>
        <Heading size={4} style={{
          color: "#fff",
          borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
          paddingBottom: "1rem",
          marginBottom: "1.5rem",
          textAlign: "center"
        }}>
          Login
        </Heading>

        <form onSubmit={handleSubmit}>
          <div style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", padding: "1.5rem", borderRadius: "8px", marginBottom: "1.5rem" }}>
            <Form.Field>
              <Form.Control>
                <Form.Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
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
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
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
                Login
              </Button>
            </Button.Group>
          </div>

          <div style={{ 
            textAlign: "center",
            color: "#fff",
            marginTop: "1rem"
          }}>
            Don't have an account?{" "}
            <Link 
              to="/register" 
              style={{ 
                color: "#2ecc71",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
            >
              Register here
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

// Add this if not already present in your CSS
const styles = `
  .white-placeholder::placeholder {
    color: white !important;
    opacity: 0.7 !important;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Login;
