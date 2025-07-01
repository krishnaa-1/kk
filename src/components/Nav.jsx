import React, { useState } from 'react';
import {
  FaTachometerAlt, FaHotel, FaUsers, FaUserShield,
  FaUserPlus, FaChartBar, FaDatabase, FaChevronRight, FaChevronDown
} from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap.min.css';


const Sidebar = () => {
  const [openReports, setOpenReports] = useState(false);
  const [openMasters, setOpenMasters] = useState(false);
  const [active, setActive] = useState('Dashboard');

  const toggleReports = () => setOpenReports(!openReports);
  const toggleMasters = () => setOpenMasters(!openMasters);

  const menuItem = (label, icon, onClick, subMenu = null) => (
    <div className="w-100">
      <div
        className={`d-flex justify-content-between align-items-center p-2 sidebar-item ${active === label ? 'active' : ''}`}
        onClick={() => {
          setActive(label);
          if (onClick) onClick();
        }}
        style={{ cursor: 'pointer' }}
      >
        <div className="d-flex align-items-center gap-2">
          {icon}
          <span>{label}</span>
        </div>
        {subMenu && (subMenu ? <FaChevronDown /> : <FaChevronRight />)}
      </div>
      {subMenu && openReports && label === 'Reports' && (
        <div className="ps-4">
          <div className="p-1">Report 1</div>
          <div className="p-1">Report 2</div>
        </div>
      )}
      {subMenu && openMasters && label === 'Masters' && (
        <div className="ps-4">
          <div className="p-1">Master 1</div>
          <div className="p-1">Master 2</div>
        </div>
      )}
    </div>
  );

  return (
    <div className="d-flex flex-column p-3 sidebar" style={{ width: '280px', height: '100vh', borderRight: '1px solid #eee' }}>
      <div className="mb-4 text-center">
        <img src="/logo.png" alt="Bosslite" style={{ width: '120px' }} />
      </div>

      {menuItem('Dashboard', <FaTachometerAlt />)}
      {menuItem('Hotel', <FaHotel />)}
      {menuItem('Users', <FaUsers />)}
      {menuItem('Roles', <FaUserShield />)}
      {menuItem('Leads', <FaUserPlus />)}
      {menuItem('Reports', <FaChartBar />, toggleReports, true)}
      {menuItem('Masters', <FaDatabase />, toggleMasters, true)}
    </div>
  );
};

export default Sidebar;
