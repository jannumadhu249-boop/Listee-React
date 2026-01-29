import { Link } from "react-router-dom";

const pricingPlans = [
  {
    id: 1,
    name: "Intro",
    price: "$10",
    features: [
      "Basic listing submission",
      "One Listing",
      "30 days Availabilty",
    ],
    inactiveFeatures: ["Limited Support", "Edit your listing"],
  },
  {
    id: 2,
    name: "Basic",
    price: "$25",
    features: [
      "Basic listing submission",
      "One Listing",
      "30 days Availabilty",
    ],
    inactiveFeatures: ["Limited Support", "Edit your listing"],
  },
  {
    id: 3,
    name: "Popular",
    price: "$50",
    features: [
      "Basic listing submission",
      "One Listing",
      "30 days Availabilty",
    ],
    inactiveFeatures: ["Limited Support", "Edit your listing"],
  },
  {
    id: 4,
    name: "Enterprise",
    price: "$100",
    features: [
      "Basic listing submission",
      "One Listing",
      "30 days Availabilty",
    ],
    inactiveFeatures: ["Limited Support", "Edit your listing"],
  },
];

const Pricing = () => (
  <>
    <section className="breadcrumb-bar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="breadcrumb-title text-center">Pricing Plan</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <span className="text-white">/</span>
                <li className="breadcrumb-item active">Pricing Plan</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <section className="pricingplan-section">
      <div className="section-heading">
        <div className="container">
          <div className="row text-center">
            <h2>
              Our Pricing <span>Pla</span>n
            </h2>
            <p>checkout these latest cool ads from our members</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {pricingPlans.map((plan) => (
            <div className="col-lg-3 d-flex col-md-6" key={plan.id}>
              <div className="price-card flex-fill">
                <div className="price-head">
                  <div className="price-level">
                    <h6>{plan.name}</h6>
                  </div>
                  <h4>
                    {plan.price} <span>/ month</span>
                  </h4>
                </div>
                <div className="price-body">
                  <p>For most business that want to optimize web queries</p>
                  <ul>
                    {plan.features.map((feature, idx) => (
                      <li className="active" key={idx}>
                        {feature}
                      </li>
                    ))}
                    {plan.inactiveFeatures.map((feature, idx) => (
                      <li className="inactive" key={idx}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div>
                    <Link to="/login" className="btn viewdetails-btn">
                      View details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);
export default Pricing;
