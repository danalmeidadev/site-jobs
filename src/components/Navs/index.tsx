import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Nav } from 'reactstrap';
import { Header, ButtonHeader,NavItem,NavItemButton } from './styles';
import logoImg from '../../assets/logo/logo.png';


const Navs: React.FC = () => {
  return (
    <Header>
      <Nav className="navbar navbar-expand-lg fixed-top bg-white">
        <div className="container">
          <a className="navbar-brand" href="teste">
            <img src={logoImg} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav -w-100">
              <NavItem >
                <Link className="nav-link" to="/" >Home</Link>
              </NavItem>

              <NavItem >
                <Link className="nav-link" to="/about" >Sobre</Link>
              </NavItem>

              <NavItem >
                <Link className="nav-link" to="/" >Jobs</Link>
              </NavItem>

              <NavItem >
                <Link className="nav-link" to="/" >Blog</Link>
              </NavItem>

              <NavItem>
                <Link className="nav-link" to="/" >Contato</Link>
              </NavItem>

              <ButtonHeader>
              <NavItemButton className="ml-auto" >
                <Link className="nav-link" to="/" >Login</Link>
              </NavItemButton>

              <NavItemButton >
                <Link className="nav-link " to="/" >Register</Link>
              </NavItemButton>

              </ButtonHeader>
            </ul>
          </div>
        </div>
      </Nav>
    </Header>
  );
};

export default Navs;
