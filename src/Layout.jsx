import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Nav';
import Header from './components/Header';
import './Layout.css'; // NEW CSS file for layout

const Layout = () => {
  return (
    <div className="layout-container d-flex">
      <Sidebar />
      <div className="main-section flex-grow-1 d-flex flex-column">
        <Header />
        <main className="content p-4 flex-grow-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
