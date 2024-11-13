// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Create a CSS file for styling
import userImage from '../assests/images/profile-user.png'; 

const Sidebar = () => {
  return (
    <>
    <aside>
  <p> Welcome, user </p>
  <a href="javascript:void(0)">
    {/* <i class="fa fa-user-o" aria-hidden="true"></i> */}
    <Link to="/">Homepage</Link>
  </a>
  <a href="javascript:void(0)">
    <i class="fa fa-laptop" aria-hidden="true"></i>
    <Link to="/test">Interview Prep</Link>
  </a>
  <a href="javascript:void(0)">
    <i class="fa fa-clone" aria-hidden="true"></i>
    <Link to="/test">Chat</Link>
  </a>
  <a href="javascript:void(0)">
    <i class="fa fa-star-o" aria-hidden="true"></i>
    <Link to="/resource">Resources</Link>
  </a>
  <a href="javascript:void(0)">
    <i class="fa fa-trash-o" aria-hidden="true"></i>
    <Link to="/logout">Logout</Link>
  </a>
</aside>

<div class="social">
  <a href="https://www.linkedin.com/in/florin-cornea-b5118057/" target="_blank">
    <i class="fa fa-linkedin"></i>
  </a>
</div>
</>
  );
};

export default Sidebar;
