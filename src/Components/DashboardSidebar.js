import React from 'react'
import {Link} from 'react-router-dom'
function DashboardSidebar() {
    return (

            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                {/* Sidebar - Brand */}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">React</div>
                </Link>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider my-0" />

                {/* <!-- Nav Item - Dashboard --> */}
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider" />
                <li className="nav-item">
                    <Link className="nav-link" to = '/Formik-users'>
                        <i className="fas fa-users"></i>
                        <span>Users</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/Formik-products'>
                        <i className="fab fa-product-hunt"></i>
                        <span>Products</span>
                    </Link>
                </li>

                <hr className="sidebar-divider d-none d-md-block"></hr>

                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>
            </ul>
            
            
       
    )
}

export default DashboardSidebar
