import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import './sidebar.css'

const Sidebar = () => {
  return (
    <div  className="side-bar-class" style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Tushar Kale
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          	<CDBSidebarMenu>
				<a href="#home"activeClassName="activeClicked">
					<CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
				</a>
				<a href="#portfolio" activeClassName="activeClicked">
					<CDBSidebarMenuItem icon="chart-line">Portfolio</CDBSidebarMenuItem>
				</a>
				<a  href="#contact" activeClassName="activeClicked">
					<CDBSidebarMenuItem icon="phone">Contact</CDBSidebarMenuItem>
				</a>
				<a href="#home" activeClassName="activeClicked">
					<CDBSidebarMenuItem icon="file">My Cv</CDBSidebarMenuItem>
				</a>
          	</CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;