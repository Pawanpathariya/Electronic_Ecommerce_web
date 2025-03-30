import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../style/Topmenu.css";
const Topmenu = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand
            as={Link}
            to="/home"
            className="navbar-brand-custom"
            style={{
              color: "white",
              fontWeight: "1000",
              letterSpacing: "2px",
              fontStyle: "italic",
            }}
          >
            ElectronixZone
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home" className="nav-link-custom">Home</Nav.Link>
              <Nav.Link as={Link} to="/shop" className="nav-link-custom">Shop</Nav.Link>
              <Nav.Link as={Link} to="/search" className="nav-link-custom">Search</Nav.Link>

              {/* Products Dropdown Menu */}
              <NavDropdown title="Products" id="basic-nav-dropdown" className="nav-link-custom">
                <NavDropdown.Item as={Link} to="/products/leptop">Laptop</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/mobile">Mobile</NavDropdown.Item>
               <NavDropdown.Item as={Link} to="/products/computer">Computer</NavDropdown.Item>
                  {/* <NavDropdown.Item as={Link} to="/products/headphone">Headphone</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/watch">Watch</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/airbuds">Airbuds</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/tv">TV</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/cctv">CCTV</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/ac">AC</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/products/all">All</NavDropdown.Item> */}
              </NavDropdown>

              <Nav.Link as={Link} to="/cart" className="nav-link-custom">Cart</Nav.Link>
              <Nav.Link as={Link} to="/blog" className="nav-link-custom">Blogs</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link-custom">Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
};

export default Topmenu;
