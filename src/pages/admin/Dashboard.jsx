const Dashboard = () => (
    <div className="row">
        <div className="col-lg-3 col-sm-6 col-12 d-flex widget-path widget-service">
            <div className="card"><div className="card-body">
                <div className="home-user"><div className="home-userhead">
                    <div className="home-usercount"><span><img src="/assets/admin/img/icons/user.svg" alt="img" /></span><h6>User</h6></div>
                    <div className="home-useraction"><a className="delete-table bg-white" href="#"><i className="fa fa-ellipsis-v"></i></a></div>
                </div>
                    <div className="home-usercontent"><div className="home-usercontents"><div className="home-usercontentcount"><span className="counters">30</span></div><h5>Current Month</h5></div></div>
                </div>
            </div></div>
        </div>
        <div className="col-lg-3 col-sm-6 col-12 d-flex widget-path widget-service">
            <div className="card"><div className="card-body">
                <div className="home-user home-provider"><div className="home-userhead">
                    <div className="home-usercount"><span><img src="/assets/admin/img/icons/user-circle.svg" alt="img" /></span><h6>Providers</h6></div>
                </div>
                    <div className="home-usercontent"><div className="home-usercontents"><span className="counters">25</span><h5>Current Month</h5></div></div>
                </div>
            </div></div>
        </div>
        <div className="col-lg-3 col-sm-6 col-12 d-flex widget-path widget-service">
            <div className="card"><div className="card-body">
                <div className="home-user home-service"><div className="home-userhead"><div className="home-usercount"><h6>Services</h6></div></div>
                    <div className="home-usercontent"><span className="counters">18</span><h5>Current Month</h5></div>
                </div>
            </div></div>
        </div>
        <div className="col-lg-3 col-sm-6 col-12 d-flex widget-path widget-service">
            <div className="card"><div className="card-body">
                <div className="home-user home-subscription"><div className="home-userhead"><div className="home-usercount"><h6>Subscription</h6></div></div>
                    <div className="home-usercontent"><span className="counters">$650</span><h5>Current Month</h5></div>
                </div>
            </div></div>
        </div>
        <div className="col-lg-12">
            <div className="card"><div className="card-header"><h5>Recent Listings</h5></div><div className="card-body">
                <table className="table"><thead><tr><th>#</th><th>Service</th><th>Category</th><th>Amount</th><th>Status</th></tr></thead><tbody>
                    {[1, 2, 3, 4, 5].map(i => <tr key={i}><td>{i}</td><td>Service {i}</td><td>Category</td><td>${i * 80}</td><td><span className="badge bg-success">Active</span></td></tr>)}
                </tbody></table>
            </div></div>
        </div>
    </div>
)
export default Dashboard
