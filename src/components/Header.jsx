import { Navbar } from "react-bootstrap";
import logo from "../assets/logo.ico";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" width="50px" height="50px">
        <div>
          {" "}
          <Navbar.Brand>
            <img src={logo} alt="TheJoyOfHair" width="50px" height="50px" />
            Connor's Shop
          </Navbar.Brand>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
