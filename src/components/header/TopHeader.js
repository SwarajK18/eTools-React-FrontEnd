import React from 'react'
// import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import '../../css/style.css'
import Logo from '../../assets/Images/eSA.png'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    } from 'reactstrap';
import { Switch } from 'react-router';
    const TopHeader = () => {
    const dispatch = useDispatch()
    const sidebarShow = useSelector((state) => state.sidebarShow)
      
        return (
            <div>
            <Navbar id="topHeader" light expand="md">
            <img src={Logo} style={{ height: '38px'}}/>
              <NavbarBrand className="active navbar-brand text-white" style={{position:'absolute', marginLeft:'42px'}} href="/">electronic Supplier Agreement</NavbarBrand>
              {/* <NavbarToggler
               onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })} />
              <Collapse navbar> */}
                {/* <Switch> */}
                <Nav className="justify-content-end" >
                  <NavItem>
                    <NavLink className= "text-white" href="">Supplier</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className= "text-white" href="">Notes</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className= "text-white" href="">Order</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className= "text-white" href="">Reports</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className= "text-white" href="">Supplier Directory</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className= "text-white" href="">Quality</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className= "text-white" href="">Facilities</NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink className= "text-white" href="">Admin</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className= "text-white" href="">Support</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className= "text-white" href="">Gateway</NavLink>
                  </NavItem>
                  
                </Nav>
                {/* </Switch> */}
              {/* </Collapse> */}
            </Navbar>
          </div>
        );
      }
      export default TopHeader;