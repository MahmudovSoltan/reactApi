import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { SlBasket } from "react-icons/sl";
import "./navbar.css";
import { Container, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";

const Header = () => {
  const { totalCount } = useSelector((state) => state.products);
  return (
    <header>
      <Navbar
        expand="lg"
        className="bg-body-tertiary bg-dark text-white header"
      >
        <Container>
          <Navbar.Brand className="navbar_logo">
            <NavLink to={"/"}>
              <img src={logo} alt="" />
            </NavLink>
          </Navbar.Brand>
      
       
          <NavLink to={"/basket"} className="basket_icons">
            <SlBasket size={30} />
            <span>{totalCount}</span>
          </NavLink>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
