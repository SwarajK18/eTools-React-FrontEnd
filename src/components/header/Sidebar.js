import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import '../../css/style.css'
// import Logo from '../assets/Images/logo@2x.png'

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="page-content bg-white">
    <div className="row ">
    <div className="col-md-4">
     <nav className="navbar-light position-fixed h-100px text-black ">
        <ul className="drawer-nav h-100 w-sidebar list-unstyled m-4">
          <li><a href="#">Product & Service Categories</a></li>
           <li><a href="#">Insurance Cover Types</a></li>
           <li><a href="#">Certificate Types</a></li>
           <li><a href="#">Vaccine Types</a></li>
           <li><a href="#">Payment Methods</a></li>
           <li><a href="#">Departments</a></li>
           <li><a href="#">Agreement Categories & Types</a></li> 
      </ul>
      </nav>    
    </div>
    </div>
    </div>
  );
}

export default Sidebar;
