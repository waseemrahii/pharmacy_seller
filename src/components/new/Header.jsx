import React, { useState } from "react";
import { FaGlobe, FaCommentDots, FaShoppingCart } from "react-icons/fa";
import "./Header.css";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useAuth } from '../context/AuthContext.jsx';
import { toast,ToastContainer  } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/auth/authSlice';
const Header = () => {
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMessageTooltipVisible, setIsMessageTooltipVisible] = useState(false);
  const [isGlobeTooltipVisible, setIsGlobeTooltipVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("English");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const showMessageTooltip = () => {
    setIsMessageTooltipVisible(true);
  };

  const hideMessageTooltip = () => {
    setIsMessageTooltipVisible(false);
  };

  const showGlobeTooltip = () => {
    setIsGlobeTooltipVisible(true);
  };

  const hideGlobeTooltip = () => {
    setIsGlobeTooltipVisible(false);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    logout(); // Call the logout function from the context
    toast.success('Logged out successfully!');
    console.log('Logging out...');
  };
  return (
   <>
    <ToastContainer />
  <div>
      {/* Header Component */}
      <div className="header flex items-center justify-between py-2 px-6 shadow fixed top-0 left-0 right-0 bg-[#1EBEB6] text-white z-50">
        {/* Left Section: Logo */}
        <div className="left px-7">
          <img
            src="logo.png"
            alt="Logo"
            width="40"
            style={{ height: "4rem" }}
          />
        </div>

        {/* Right Section: Menu and Icons */}
        <div className="right flex items-center justify-around">
         

       

         
          {/* User Icon */}
          <div className="flex items-center cursor-pointer">
            <img src="man.jpg" alt="User" className="w-8 h-8 rounded-full" />

            <NavDropdown title="Admin Master" id="basic-nav-dropdown ">
              <NavDropdown.Item>
                <div className="flex gap-2">
                  <img
                    src="https://cdn.vectorstock.com/i/1000x1000/23/85/courier-checks-parcels-list-boxes-for-sending-vector-13222385.webp"
                    className="w-10 h-10"
                    alt=""
                  />
                  <div>
                    <h1>Seller</h1>
                    {/* <h2>a...@admin@gmail.com</h2> */}
                  </div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={"/profileinformation"}>Setting</Link>
              </NavDropdown.Item>

              <NavDropdown.Divider />
              {/* <NavDropdown.Item  onClick={handleLogout}>Logout</NavDropdown.Item> */}
              <NavDropdown.Item  onClick={() => dispatch(logout())}>Logout</NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
      </div>

      {/* Spacer for Header */}
      <div className="header-spacer"></div>
    </div>
    </>
  );
};

export default Header;
