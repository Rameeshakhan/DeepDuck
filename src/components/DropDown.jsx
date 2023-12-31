import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FaUserCircle } from 'react-icons/fa';
import { IoMdLogOut } from 'react-icons/io';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const DropDown = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRoot = document.getElementById('dropdown-root');

  const navigate = useNavigate();

  const dropdownStyle = {
    position: 'absolute',
    top: isVisible ? '70px' : '-100%',
    right: '120px',
    zIndex: 9999,
    height: isVisible ? 'auto' : 0,
    width: '250px',
    borderRadius: '10px',
    color: 'white',
    background: '#2A2A2C',
    padding: '20px',
    fontFamily: 'Raleway',
    opacity: isVisible ? 1 : 0,
    transition: 'top 0.3s, height 0.3s, opacity 0.3s',
  };

  useEffect(() => {
    setIsVisible(true); // Show the dropdown when the component mounts
  }, []);

  const header = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    margin: '5px',
  };

  const options = {
    background: '#323235',
    margin: '15px 0px 10px 0px',
    padding: '10px',
    color: 'white',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
  };

  return ReactDOM.createPortal(
    <div style={dropdownStyle} className="dropdown">
      <div style={header}>
        <FaUserCircle size="30px" color="grey" />
        <span>Drop down</span>
      </div>

      <div
        style={options}
        onClick={() => navigate('/pricing')}
      >
        <RiMoneyDollarCircleFill />
        Credits 20
      </div>
      <div style={options} onClick={() => navigate('/')}>
        <IoMdLogOut />
        Logout
      </div>
    </div>,
    dropdownRoot
  );
};

export default DropDown;
