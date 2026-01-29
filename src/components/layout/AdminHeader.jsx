import { Link } from 'react-router-dom'

const AdminHeader = () => {
    return (
        <div className="header">
            <div className="header-left">
                <Link to="/admin" className="logo">
                    <img src="/assets/img/logo.png" alt="Logo" width="30" height="30" />
                </Link>
                <Link to="/admin" className="logo-small">
                    <img src="/assets/img/logo-small.svg" alt="Logo" width="30" height="30" />
                </Link>
            </div>
            <a className="mobile_btn" id="mobile_btn" href="javascript:void(0);">
                <i className="fas fa-align-left"></i>
            </a>
            <div className="header-split">
                <div className="page-headers">
                    <div className="search-bar">
                        <span><i className="fe fe-search"></i></span>
                        <input type="text" placeholder="Search" className="form-control" />
                    </div>
                </div>
                <ul className="nav user-menu">
                    <li className="nav-item">
                        <Link to="/" className="viewsite"><i className="fe fe-globe me-2"></i>View Site</Link>
                    </li>
                    <li className="nav-item dropdown has-arrow dropdown-heads flag-nav">
                        <a className="nav-link" data-bs-toggle="dropdown" href="javascript:void(0);" role="button">
                            <img src="/assets/admin/img/flags/us1.png" alt="" height="20" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a href="javascript:void(0);" className="dropdown-item">
                                <img src="/assets/admin/img/flags/us.png" className="me-2" alt="" height="16" /> English
                            </a>
                            <a href="javascript:void(0);" className="dropdown-item">
                                <img src="/assets/admin/img/flags/fr.png" className="me-2" alt="" height="16" /> French
                            </a>
                            <a href="javascript:void(0);" className="dropdown-item">
                                <img src="/assets/admin/img/flags/es.png" className="me-2" alt="" height="16" /> Spanish
                            </a>
                        </div>
                    </li>
                    <li className="nav-item has-arrow dropdown-heads">
                        <a href="javascript:void(0);" className="toggle-switch">
                            <i className="fe fe-moon"></i>
                        </a>
                    </li>
                    <li className="nav-item dropdown has-arrow dropdown-heads">
                        <a href="javascript:void(0);" data-bs-toggle="dropdown">
                            <i className="fe fe-bell"></i>
                        </a>
                        <div className="dropdown-menu notifications">
                            <div className="topnav-dropdown-header">
                                <span className="notification-title">Notifications</span>
                                <a href="javascript:void(0)" className="clear-noti">Clear All</a>
                            </div>
                            <div className="noti-content">
                                <ul className="notification-list">
                                    <li className="notification-message">
                                        <a href="#">
                                            <div className="media d-flex">
                                                <span className="avatar avatar-sm flex-shrink-0">
                                                    <img className="avatar-img rounded-circle" alt="" src="/assets/admin/img/provider/provider-01.jpg" />
                                                </span>
                                                <div className="media-body flex-grow-1">
                                                    <p className="noti-details">
                                                        <span className="noti-title">Matthew Garcia have been subscribed</span>
                                                    </p>
                                                    <p className="noti-time">
                                                        <span className="notification-time">15 Sep 2020 10:20 PM</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="topnav-dropdown-footer">
                                <a href="#">View all Notifications</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item has-arrow dropdown-heads">
                        <a href="javascript:void(0);" className="win-maximize">
                            <i className="fe fe-maximize"></i>
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="javascript:void(0)" className="user-link nav-link" data-bs-toggle="dropdown">
                            <span className="user-img">
                                <img className="rounded-circle" src="/assets/admin/img/user.jpg" width="40" alt="Admin" />
                                <span className="animate-circle"></span>
                            </span>
                            <span className="user-content">
                                <span className="user-name">John Smith</span>
                                <span className="user-details">Demo User</span>
                            </span>
                        </a>
                        <div className="dropdown-menu menu-drop-user">
                            <div className="profilemenu">
                                <div className="user-detials">
                                    <a href="#">
                                        <span className="profile-image">
                                            <img src="/assets/admin/img/user.jpg" alt="img" className="profilesidebar" />
                                        </span>
                                        <span className="profile-content">
                                            <span>John Smith</span>
                                            <span>john@example.com</span>
                                        </span>
                                    </a>
                                </div>
                                <div className="subscription-menu">
                                    <ul>
                                        <li><Link to="/admin/localization">Profile</Link></li>
                                        <li><Link to="/admin/localization">Settings</Link></li>
                                    </ul>
                                </div>
                                <div className="subscription-logout">
                                    <Link to="/admin/signin">Log Out</Link>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AdminHeader
