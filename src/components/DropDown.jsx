import React from 'react';
import ReactDOM from 'react-dom';
import { FaUserCircle } from 'react-icons/fa';
import { IoMdLogOut } from 'react-icons/io';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';

const DropDown = () => {
  const dropdownRoot = document.getElementById('dropdown-root');

  const dropdownStyle = {
    position: 'absolute',
    top: '60px',
    right: '30px',
    zIndex: 9999,
    height: 'auto',
    width: '250px',
    borderRadius: '10px',
    color: 'white',
    background: '#2A2A2C',
    padding: '20px',
    fontFamily: "Raleway",
  };

  const header = {
    display: 'flex', // Add display flex
    alignItems: 'center', // Align items to center
    gap: '10px', // Add gap between icon and text
    margin: "5px"
  }

  const options = {
    background: "#323235",
    margin: "15px 0px 10px 0px",
    padding: "10px",
    color: "white",
    borderRadius: "5px",
    display: 'flex', // Add display flex
    alignItems: 'center', // Align items to center
    gap: '10px',
  }
  return ReactDOM.createPortal(
    <div style={dropdownStyle} className="dropdown">
      <div style={header}>
        <FaUserCircle size="30px" color="grey" />
        <span>Drop down</span> {/* Wrap the text in a span */}
      </div>

      <div style={options}> 
      <RiMoneyDollarCircleFill/>
      Credits 20</div>
      <div style={options}>
        <IoMdLogOut/>
         Logout</div>
    </div>,
    dropdownRoot
  );
};

export default DropDown;
