import React, { Component } from 'react';

class Sidebar extends Component {

    render() {
        return (
            <aside className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
                <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav" />
                    <a className="navbar-brand m-0" href=" https://demos.creative-tim.com/argon-dashboard/pages/dashboard.html " target="_blank">
                        <img src="/assets/img/logo-ct-dark.png" className="navbar-brand-img h-100" alt="main_logo" />
                        <span className="ms-1 font-weight-bold">TK/KB Ceria Mandiri</span>
                    </a>
                </div>
                <hr className="horizontal dark mt-0" />
                <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link " href="/pages/dashboard.html">
                                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="ni ni-tv-2 text-primary text-sm opacity-10" />
                                </div>
                                <span className="nav-link-text ms-1">Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="../components/index/Surat Masuk/SuratMasuk.js">
                                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10" />
                                </div>
                                <span className="nav-link-text ms-1">Surat Masuk</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/pages/billing.html">
                                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="ni ni-credit-card text-success text-sm opacity-10" />
                                </div>
                                <span className="nav-link-text ms-1">Surat Keluar</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/pages/virtual-reality.html">
                                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="ni ni-app text-info text-sm opacity-10" />
                                </div>
                                <span className="nav-link-text ms-1">Laporan</span>
                            </a>
                        </li>
                        
                        <li className="nav-item mt-3">
                            <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Account pages</h6>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/pages/profile.html">
                                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="ni ni-single-02 text-dark text-sm opacity-10" />
                                </div>
                                <span className="nav-link-text ms-1">Profile</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/pages/sign-in.html">
                                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="ni ni-single-copy-04 text-warning text-sm opacity-10" />
                                </div>
                                <span className="nav-link-text ms-1">User Management</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/pages/sign-up.html">
                                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="ni ni-collection text-info text-sm opacity-10" />
                                </div>
                                <span className="nav-link-text ms-1">Galeri Arsip</span>
                            </a>
                        </li>
                    </ul>
                </div>
                
            </aside>

        );
    }
}

export default Sidebar;