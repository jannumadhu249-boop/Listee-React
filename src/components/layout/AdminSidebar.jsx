import { Link } from 'react-router-dom'

const AdminSidebar = () => {
    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-header">
                <div className="sidebar-logo">
                    <Link to="/admin">
                        <img src="/assets/img/logo.png" className="img-fluid logo" alt="" />
                    </Link>
                    <Link to="/admin">
                        <img src="/assets/img/logo-small.svg" className="img-fluid logo-small" alt="" />
                    </Link>
                </div>
                <div className="siderbar-toggle">
                    <label className="switch" id="toggle_btn">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>

            <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                    <ul>
                        <li className="menu-title m-0">
                            <h6>Home</h6>
                        </li>
                        <li>
                            <Link to="/admin" className="active"><i className="fe fe-grid"></i> <span>Dashboard</span></Link>
                        </li>
                        <li className="menu-title">
                            <h6>Listing</h6>
                        </li>
                        <li>
                            <Link to="/admin/listings"><i className="fe fe-briefcase"></i> <span>Listings</span></Link>
                        </li>
                        <li>
                            <Link to="/admin/categories"><i className="fe fe-file-text"></i> <span>Categories</span></Link>
                        </li>
                        <li>
                            <Link to="/admin/sub-categories"><i className="fe fe-clipboard"></i> <span>Sub Categories</span></Link>
                        </li>
                        <li>
                            <Link to="/admin/locations"><i className="fe fe-map"></i> <span>Locations</span></Link>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><i className="fe fe-star"></i>
                                <span>Review</span>
                                <span className="menu-arrow"><i className="fe fe-chevron-right"></i></span>
                            </a>
                            <ul>
                                <li><Link to="/admin/review-type">Review Type</Link></li>
                                <li><Link to="/admin/review">Review</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/admin/comments"><i className="fe fe-message-square"></i> <span>Comments</span></Link>
                        </li>
                        <li>
                            <Link to="/admin/amenities"><i className="fe fe-briefcase"></i> <span>Amenities</span></Link>
                        </li>
                        <li>
                            <Link to="/admin/product-enquiry"><i className="fe fe-box"></i> <span>Product Enquiry</span></Link>
                        </li>
                        <li className="menu-title">
                            <h6>Finance &amp; Accounts</h6>
                        </li>
                        <li>
                            <Link to="/admin/transactions"><i className="fe fe-bar-chart"></i> <span>Transactions</span></Link>
                        </li>
                        <li>
                            <Link to="/admin/payment-gateway"><i className="fe fe-file-text"></i> <span>Payment Gateway</span></Link>
                        </li>
                        <li>
                            <Link to="/admin/tax-rates"><i className="fe fe-file-text"></i> <span>Tax Rates</span></Link>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><i className="fe fe-credit-card"></i>
                                <span>Payouts</span>
                                <span className="menu-arrow"><i className="fe fe-chevron-right"></i></span>
                            </a>
                            <ul>
                                <li><Link to="/admin/payout-request">Payout Requests</Link></li>
                                <li><Link to="/admin/payout-settings">Payout Settings</Link></li>
                            </ul>
                        </li>
                        <li className="menu-title">
                            <h6>Others</h6>
                        </li>
                        <li>
                            <Link to="/admin/chat"><i className="fe fe-message-square"></i> <span>Chat</span></Link>
                        </li>
                        <li className="menu-title">
                            <h6>Content</h6>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><i className="fe fe-file"></i>
                                <span>Pages</span>
                                <span className="menu-arrow"><i className="fe fe-chevron-right"></i></span>
                            </a>
                            <ul>
                                <li><Link to="/admin/add-page">Add Page</Link></li>
                                <li><Link to="/admin/pages-list">Pages</Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><i className="fe fe-file-text"></i>
                                <span>Blog</span>
                                <span className="menu-arrow"><i className="fe fe-chevron-right"></i></span>
                            </a>
                            <ul>
                                <li><Link to="/admin/all-blog">All Blog</Link></li>
                                <li><Link to="/admin/add-blog">Add Blog</Link></li>
                                <li><Link to="/admin/blogs-categories">Categories</Link></li>
                                <li><Link to="/admin/blogs-comments">Blog Comments</Link></li>
                            </ul>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><i className="fe fe-map-pin"></i>
                                <span>Location</span>
                                <span className="menu-arrow"><i className="fe fe-chevron-right"></i></span>
                            </a>
                            <ul>
                                <li><Link to="/admin/countries">Countries</Link></li>
                                <li><Link to="/admin/states">States</Link></li>
                                <li><Link to="/admin/cities">Cities</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/admin/testimonials"><i className="fe fe-star"></i> <span>Testimonials</span></Link>
                        </li>
                        <li>
                            <Link to="/admin/faq"><i className="fe fe-help-circle"></i> <span>FAQ</span></Link>
                        </li>
                        <li className="menu-title">
                            <h6>Membership</h6>
                        </li>
                        <li>
                            <Link to="/admin/membership"><i className="fe fe-user"></i> <span>Membership</span></Link>
                        </li>
                        <li>
                            <Link to="/admin/membership-transactions"><i className="fe fe-user-plus"></i> <span>Transactions</span></Link>
                        </li>
                        <li className="menu-title">
                            <h6>Reports</h6>
                        </li>
                        <li>
                            <Link to="/admin/admin-earnings"><i className="fe fe-user"></i> <span>Admin Earnings</span></Link>
                        </li>
                        <li>
                            <Link to="/admin/provider-earnings"><i className="fe fe-dollar-sign"></i> <span>Provider Earnings</span></Link>
                        </li>
                        <li className="menu-title">
                            <h6>User Management</h6>
                        </li>
                        <li className="submenu">
                            <a href="javascript:void(0);"><i className="fe fe-user"></i>
                                <span>Users</span>
                                <span className="menu-arrow"><i className="fe fe-chevron-right"></i></span>
                            </a>
                            <ul>
                                <li><Link to="/admin/user-list">New User</Link></li>
                                <li><Link to="/admin/user-customers">Customers</Link></li>
                                <li><Link to="/admin/user-providers">Providers</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/admin/roles-permissions"><i className="fe fe-file-text"></i> <span>Roles &amp; Permissions</span></Link>
                        </li>
                        <li>
                            <Link to="/admin/delete-account-requests"><i className="fe fe-trash-2"></i> <span>Delete Account Requests</span></Link>
                        </li>
                        <li className="menu-title">
                            <h6>Management</h6>
                        </li>
                        <li>
                            <Link to="/admin/cachesystem"><i className="fe fe-user"></i> <span>Cache System</span></Link>
                        </li>
                        <li>
                            <Link to="/admin/email-templates"><i className="fe fe-mail"></i> <span>Email Templates</span></Link>
                        </li>
                        <li className="menu-title">
                            <h6>Support</h6>
                        </li>
                        <li>
                            <Link to="/admin/contact-messages"><i className="fe fe-message-square"></i> <span>Contact Messages</span></Link>
                        </li>
                        <li>
                            <Link to="/admin/abuse-reports"><i className="fe fe-file-text"></i> <span>Abuse Reports</span></Link>
                        </li>
                        <li className="menu-title">
                            <h6>Settings</h6>
                        </li>
                        <li>
                            <Link to="/admin/localization"><i className="fe fe-settings"></i> <span>Settings</span></Link>
                        </li>
                        <li>
                            <Link to="/admin/signin"><i className="fe fe-log-out"></i> <span>Logout</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AdminSidebar
