import { Box, Heading, Form, Button } from "react-bulma-components";
import { useState } from "react";
import { FaUser, FaSave } from "react-icons/fa";

function Settings() {
  const [formData, setFormData] = useState({
    firstName: "Admin",
    lastName: "User",
    email: "admin@example.com",
    contact: "09123456789",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saving settings:', formData);
    // Add your save logic here
  };

  return (
    <Box
      style={{
        height: "85vh",
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        padding: "2rem",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(20px)",
        borderRadius: "15px",
        overflow: "auto",
        marginBottom: "1.5rem"
      }}
    >
      <Heading
        size={4}
        style={{
          color: "#fff",
          borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
          paddingBottom: "1rem",
          marginBottom: "2rem",
        }}
      >
        Account Settings
      </Heading>

      <form onSubmit={handleSubmit}>
        <Box style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          padding: "1.5rem",
          marginBottom: "1.5rem",
          borderRadius: "8px"
        }}>
          <Heading size={5} style={{ color: "#fff", marginBottom: "1.5rem" }}>
            <FaUser style={{ marginRight: "0.5rem" }} />
            Personal Information
          </Heading>

          <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
            <Form.Field style={{ flex: 1 }}>
              <Form.Label style={{ color: "#fff" }}>First Name</Form.Label>
              <Form.Control>
                <Form.Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "#fff",
                    border: "1px solid rgba(255, 255, 255, 0.2)"
                  }}
                />
              </Form.Control>
            </Form.Field>

            <Form.Field style={{ flex: 1 }}>
              <Form.Label style={{ color: "#fff" }}>Last Name</Form.Label>
              <Form.Control>
                <Form.Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "#fff",
                    border: "1px solid rgba(255, 255, 255, 0.2)"
                  }}
                />
              </Form.Control>
            </Form.Field>
          </div>

          <Form.Field>
            <Form.Label style={{ color: "#fff" }}>Email</Form.Label>
            <Form.Control>
              <Form.Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  border: "1px solid rgba(255, 255, 255, 0.2)"
                }}
              />
            </Form.Control>
          </Form.Field>

          <Form.Field>
            <Form.Label style={{ color: "#fff" }}>Contact Number</Form.Label>
            <Form.Control>
              <Form.Input
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  border: "1px solid rgba(255, 255, 255, 0.2)"
                }}
              />
            </Form.Control>
          </Form.Field>
        </Box>

        <Box style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          padding: "1.5rem",
          marginBottom: "1.5rem",
          borderRadius: "8px"
        }}>
          <Heading size={5} style={{ color: "#fff", marginBottom: "1.5rem" }}>
            Change Password
          </Heading>

          <Form.Field>
            <Form.Label style={{ color: "#fff" }}>Current Password</Form.Label>
            <Form.Control>
              <Form.Input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  border: "1px solid rgba(255, 255, 255, 0.2)"
                }}
              />
            </Form.Control>
          </Form.Field>

          <Form.Field>
            <Form.Label style={{ color: "#fff" }}>New Password</Form.Label>
            <Form.Control>
              <Form.Input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  border: "1px solid rgba(255, 255, 255, 0.2)"
                }}
              />
            </Form.Control>
          </Form.Field>

          <Form.Field>
            <Form.Label style={{ color: "#fff" }}>Confirm New Password</Form.Label>
            <Form.Control>
              <Form.Input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  border: "1px solid rgba(255, 255, 255, 0.2)"
                }}
              />
            </Form.Control>
          </Form.Field>
        </Box>

        <Button
          type="submit"
          color="primary"
          outlined
          style={{
            borderColor: "#fff",
            color: "#fff"
          }}
        >
          <FaSave style={{ marginRight: "0.5rem" }} />
          Save Changes
        </Button>
      </form>
    </Box>
  );
}

export default Settings;