import React from 'react'
// import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import '../../css/style.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import { Switch } from '@material-ui/core';
    const TopSecondHeader = () => {
    const dispatch = useDispatch()
    const sidebarShow = useSelector((state) => state.sidebarShow)
      
        return (
            <div>
            <Navbar id="secondHeader" className="mt-2"  light expand="md" >
              {/* <NavbarToggler
               onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })} />
              <Collapse navbar> */}
                <Nav id="navformat" >
                  {/* <Switch> */}
                  <NavItem >
                    <NavLink  className= "text-black" href="/viewinsurancetype">Preference & Setup</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink  className= "text-black" href="">Configuration</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink  className= "text-black" href="">3rd Party Agreements</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink  className= "text-black" href="">Head Office</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink  className= "text-black" href="">Renewal Letters & Emails</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink  className= "text-black" href="">Provision</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink  className= "text-black" href="">Agreement Type</NavLink>
                  </NavItem >
                {/* </Switch> */}
                </Nav>
              {/* </Collapse> */}
            </Navbar>
          </div>
        );
      }
      export default TopSecondHeader;
