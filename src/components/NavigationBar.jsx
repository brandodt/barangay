import { Navbar, Button } from "react-bulma-components";
import logo from "../assets/BSERSlogo.png";

function NavigationBar() {
  return (
    <Navbar color="dark">
      <Navbar.Brand>
        <Navbar.Item href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Item>
      </Navbar.Brand>

      <Navbar.Menu>
        <Navbar.Container align="right">
          <Navbar.Item>
            <Button color="light" rounded outlined>Login</Button>
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
}

export default NavigationBar;
