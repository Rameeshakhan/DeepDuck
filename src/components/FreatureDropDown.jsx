import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const FeatureDropDown = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRoot = document.getElementById('dropdown-root');

  const navigate = useNavigate();

  const dropdownStyle = {
    position: 'absolute',
    top: '12%',
    right: '42%',
    zIndex: 9999,
    height: isVisible ? 'auto' : 0,
    width: '270px',
    borderRadius: '10px',
    color: 'white',
    background: '#2A2A2C',
    padding: '20px',
    fontFamily: 'Raleway',
    opacity: isVisible ? 1 : 0,
    transform: `translateY(${isVisible ? '0' : '-100%'})`,
    transition: 'opacity 0.3s, transform 0.3s',
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
    margin: '5px 0px 5px 0px',
    padding: '10px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    borderBottom: '1px solid white',
  };

  return ReactDOM.createPortal(
    <div style={dropdownStyle} className="dropdown">
      <div
        style={options}
        onClick={() => navigate('/imageswap')}
      >
        Image Swap
      </div>
      <div
        style={options}
        onClick={() => navigate('/videoswap')}
      >
        Video Swap
      </div>
      <div
        style={options}
        onClick={() => navigate('/gifswap')}
      >
        Gif Swap
      </div>
    </div>,
    dropdownRoot
  );
};

export default FeatureDropDown;
