import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../style/Topmenu.css";
import { useContext } from "react";
import { mycont } from "../UserContext";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import BASEURL from "../confiq/BASEURL";
import { useEffect } from "react";
import axios from "axios";
const Topmenu = () => {
  const userAuthenticate=async()=>{
    const token = localStorage.getItem("token");
    if (token)
    {
      let api=`${BASEURL}/user/userauthenticate`;
      const response = await axios.post(api, null, { headers: { "x-auth-token": token } });
      console.log(response.data);
      localStorage.setItem("username", response.data.name);
      localStorage.setItem("useremail", response.data.email);
       navigate("/");     
       setbtnstatus(true);  
    }
  }

useEffect(()=>{
  userAuthenticate();
}, [])



  const navigate=useNavigate();
  const {btnstatus,setbtnstatus}=useContext(mycont);
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

              <Nav.Link as={Link} to="/blog" className="nav-link-custom">Blogs</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link-custom">Contact us</Nav.Link>
              
              {
                !btnstatus ? (
                  <Nav.Link as={Link} to="/userlogin" className="nav-link-custom">User Login</Nav.Link>
                ) : (
                  <button type="button" className="btn btn-outline-light" onClick={() => {
                    localStorage.clear();
                    toast.success("Logout Successful");
                    setbtnstatus(false);
                    setTimeout(() => {
                      navigate('/');
                    }, 2000);
                  }}>Logout</button>
                  
                )
              }
            </Nav>
          </Navbar.Collapse>
<span className="navbar-text" style={{ color: "white", marginLeft: "auto", fontStyle: "italic" }}>

  {btnstatus ? <p style={{ color: "white" ,textDecoration:"underline"}}>{localStorage.getItem("username") }</p>: ""}

</span>

        </Container>
      </Navbar>
<ToastContainer/>
    </>
  );
};

export default Topmenu;
