import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { SlBasket } from "react-icons/sl";
import "./navbar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";

const Header = () => {
  const{totalCount} = useSelector((state)=>state.products)
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary bg-dark text-white header">
        <Container>
          <Navbar.Brand href="#home" className="navbar_logo">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to={"/"}>Home</NavLink>
            </Nav>
          </Navbar.Collapse>

          <Link to={"/basket"} className="basket_icons">
            <SlBasket size={30} />
            <span>{totalCount}</span>
          </Link>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
