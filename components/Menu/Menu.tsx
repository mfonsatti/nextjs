import {
  faLayerGroup,
  faPaperPlane,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { connect, ConnectedProps } from "react-redux";
import { getMenu } from "../../selectors/selectors";
import { State, MenuItem } from "../../types";

const Menu = ({ menu }) => {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      fixed="top"
      className="container-lg py-md-4"
    >
      <Navbar.Brand href="#home" className="avatar font-weight-bolder">
        <img
          src="/paolo-imperiale.jpg"
          className="rounded-circle img-fluid d-md-none mr-2"
        />
        Paolo Imperiale
      </Navbar.Brand>
      <Navbar.Toggle as={Button} bsPrefix="menu-mobile-open d-lg-none">
        <FontAwesomeIcon icon={faLayerGroup} className="mr-2" />
        <span className="d-none menu-mobile-label">Menu</span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Navbar.Brand href="#home" className="font-weight-bolder d-lg-none">
            Paolo Imperiale
          </Navbar.Brand>
          {menu.map((menuItem: MenuItem) => (
            <Nav.Link key={menuItem.id} href={menuItem.url}>
              {menuItem.label}
            </Nav.Link>
          ))}
        </Nav>
        <Button className="ml-auto d-none d-lg-block">
          <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
          Call to action
        </Button>
        <Navbar.Toggle as={Button} bsPrefix="menu-mobile-close d-lg-none">
          <FontAwesomeIcon icon={faTimes} />
        </Navbar.Toggle>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = (state: State) => ({
  menu: getMenu(state),
});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector((props) => <Menu {...props} />);
