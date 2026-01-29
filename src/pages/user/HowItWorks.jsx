import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      img: "/assets/img/icons/work1.jpg",
      desc: "Morbi nisi justo, venenatis ac nibh at, bibendum mattis risus. Maecenas tincidunt, ligula sed congue tempus, magna augue cursus ipsum, in malesuada justo risus nec lorem. Nam augue augue, mollis nec condimentum euismod, lacinia ultricies leo.",
      imgFirst: true,
    },
    {
      id: "02",
      title: "Post An Ad",
      img: "/assets/img/icons/work2.jpg",
      desc: "Morbi nisi justo, venenatis ac nibh at, bibendum mattis risus. Maecenas tincidunt, ligula sed congue tempus, magna augue cursus ipsum, in malesuada justo risus nec lorem. Nam augue augue, mollis nec condimentum euismod, lacinia ultricies leo.",
      imgFirst: false,
    },
    {
      id: "03",
      title: "Find, Buy and Own Dreams",
      img: "/assets/img/icons/work3.jpg",
      desc: "Morbi nisi justo, venenatis ac nibh at, bibendum mattis risus. Maecenas tincidunt, ligula sed congue tempus, magna augue cursus ipsum, in malesuada justo risus nec lorem. Nam augue augue, mollis nec condimentum euismod, lacinia ultricies leo.",
      imgFirst: true,
    },
  ];

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

  return (
    <>
      <section className="breadcrumb-bar">
        <div className="container">
          <h2 className="breadcrumb-title text-center">How It Works</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <span className="mx-2 text-white">/</span>
              <li className="breadcrumb-item active text-white">
                How it Works
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="work-section listing-section">
        <div className="container">
          {/* Heading */}
          <div className="work-heading text-center mb-4">
            <h4>Steps to improve your Business</h4>
            <p className="description">
              Add your business to Listee, so customers can easily find
            </p>
          </div>

          {/* Steps */}
          <div className="row">
            {steps.map((step, index) => (
              <div key={index} className="col-lg-4 col-md-4 d-flex mb-4">
                <div className="work-info card text-center p-3">
                  {step.imgFirst && (
                    <img
                      src={step.img}
                      className="img-fluid mb-3"
                      alt={step.title}
                    />
                  )}

                  <h5 className={!step.imgFirst ? "mt-0" : ""}>{step.id}</h5>
                  <h6>{step.title}</h6>
                  <p>{step.desc}</p>

                  {!step.imgFirst && (
                    <img
                      src={step.img}
                      className="img-fluid mt-3"
                      alt={step.title}
                    />
                  )}
                </div>
              </div>
            ))}
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
};

export default HowItWorks;
