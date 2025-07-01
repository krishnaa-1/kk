import React from 'react';
import { FaBars, FaPlus, FaBell } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center px-3 py-2 shadow bg-white">
      {/* Left Section */}
      <div className="d-flex align-items-center gap-3">
        <FaBars className="fs-4 text-dark" />
        <button className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
          <FaPlus className="text-white" />
        </button>
      </div>

      {/* Right Section */}
      <div className="d-flex align-items-center gap-3">
        <span className="fw-semibold text-dark">
          Welcome to <span className="text-primary fw-bold">BossLite</span> <span className="text-danger">❤️</span>
        </span>

        {/* Notification Bell with Badge */}
        <div className="position-relative">
          <FaBell className="fs-4 text-dark" />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            12
          </span>
        </div>

        {/* User Profile Image */}
        <img
          src="https://i.pravatar.cc/36?img=3"
          alt="User"
          className="rounded-circle"
          width="36"
          height="36"
          style={{ objectFit: 'cover', cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};

export default Header;
