import { Link } from "react-router-dom";

const ListingGrid = () => {
  const listings = [
    {
      id: 1,
      img: "/assets/img/list/listgrid-1.jpg",
      avatar: "avatar-02.jpg",
      category: "Education",
      title: "2017 Gulfsteam Ameri-lite",
      price: "$350",
      oldPrice: "$450",
      rating: "4.7",
      date: "06 Oct, 2022",
    },
    {
      id: 2,
      img: "/assets/img/list/listgrid-2.jpg",
      avatar: "avatar-03.jpg",
      category: "Electronics",
      title: "Fashion luxury Men date",
      price: "$250",
      oldPrice: "$350",
      rating: "4.6",
      date: "08 Oct, 2022",
    },
    {
      id: 3,
      img: "/assets/img/list/listgrid-3.jpg",
      avatar: "avatar-04.jpg",
      category: "Electronics",
      title: "Apple Iphone 6 16GB 4G LTE",
      price: "$550",
      oldPrice: "$400",
      rating: "4.7",
      date: "09 Oct, 2022",
    },
    {
      id: 4,
      img: "/assets/img/list/listgrid-4.jpg",
      avatar: "avatar-05.jpg",
      category: "Gadgets",
      title: "Customized Apple Imac",
      price: "$450",
      oldPrice: "$300",
      rating: "4.5",
      date: "10 Oct, 2022",
    },
    {
      id: 5,
      img: "/assets/img/list/listgrid-5.jpg",
      avatar: "avatar-06.jpg",
      category: "Construction",
      title: "Villa 457 sq.m. In Benidorm Fully",
      price: "$650",
      oldPrice: "$600",
      rating: "4.5",
      date: "11 Oct, 2022",
    },
    {
      id: 6,
      img: "/assets/img/list/listgrid-6.jpg",
      avatar: "avatar-03.jpg",
      category: "Jobs",
      title: "CDL A OTR Compnay Driver Job-N",
      price: "$550",
      oldPrice: "$450",
      rating: "4.7",
      date: "12 Oct, 2022",
    },
    {
      id: 7,
      img: "/assets/img/list/listgrid-7.jpg",
      avatar: "avatar-06.jpg",
      category: "Electronics",
      title: "HP Gaming 15.6 Touchscren 12G",
      price: "$450",
      oldPrice: "$350",
      rating: "4.7",
      date: "02 Oct, 2022",
    },
    {
      id: 8,
      img: "/assets/img/list/listgrid-8.jpg",
      avatar: "avatar-07.jpg",
      category: "Vehicle",
      title: "2012 AudiR8 GT Spider Convrtibile",
      price: "$450",
      oldPrice: "$350",
      rating: "4.7",
      date: "02 Oct, 2022",
    },
    {
      id: 9,
      img: "/assets/img/list/listgrid-5.jpg",
      avatar: "avatar-07.jpg",
      category: "Vehicle",
      title: "2012 AudiR8 GT Spider Convrtibile",
      price: "$450",
      oldPrice: "$350",
      rating: "4.7",
      date: "02 Oct, 2022",
    },
  ];

  return (
    <>
      <section className="breadcrumb-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="breadcrumb-title text-center">Listing - Grid</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <span className="text-white">/</span>
                  <li className="breadcrumb-item active">Grid</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="listing-section py-5">
        <div className="container">
          <div className="row">
            {listings.map((ad) => (
              <div
                className="col-xl-4 col-lg-6 col-md-6 col-sm-12 d-flex mb-4"
                key={ad.id}
              >
                <div
                  className="card aos flex-fill rounded-4 border-0 shadow-sm"
                  data-aos="fade-up"
                >
                  <div className="blog-widget">
                    <div className="blog-img overflow-hidden rounded-top-4">
                      <Link to="/service-details">
                        <img
                          src={ad.img}
                          className="img-fluid w-100"
                          style={{ height: "200px", objectFit: "cover" }}
                          alt="listing"
                        />
                      </Link>
                      <div className="fav-item">
                        <span className="featured-text">Featured</span>
                        <a href="#" className="fav-icon">
                          <i className="feather-heart"></i>
                        </a>
                      </div>
                    </div>
                    <div className="bloglist-content">
                      <div className="card-body">
                        <div className="blogfeaturelink d-flex align-items-center mb-3">
                          <div className="grid-author me-3">
                            <img
                              src={`/assets/img/profiles/${ad.avatar}`}
                              alt="author"
                              className="rounded-circle"
                              style={{
                                width: "40px",
                                height: "40px",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div className="blog-features flex-grow-1">
                            <a href="#" className="text-decoration-none">
                              <span>
                                <i className="fa-regular fa-circle-stop me-1"></i>
                                {ad.category}
                              </span>
                            </a>
                          </div>
                          <div className="blog-author">
                            <span>
                              <i className="feather-eye me-1"></i> 4000
                            </span>
                          </div>
                        </div>
                        <h6 className="mb-3">
                          <Link
                            to="/service-details"
                            className="text-decoration-none"
                          >
                            {ad.title}
                          </Link>
                        </h6>
                        <div className="blog-location-details d-flex justify-content-between mb-3">
                          <div className="location-info">
                            <i className="feather-map-pin me-1"></i> Los Angeles
                          </div>
                          <div className="location-info">
                            <i className="fa-solid fa-calendar-days me-1"></i>
                            {ad.date}
                          </div>
                        </div>
                        <div className="amount-details d-flex justify-content-between align-items-center">
                          <div className="amount">
                            <span
                              className="validrate me-2"
                              style={{
                                color: "#e91e63",
                                fontSize: "1.1rem",
                                fontWeight: "bold",
                              }}
                            >
                              {ad.price}
                            </span>
                            <span
                              style={{
                                textDecoration: "line-through",
                                color: "#999",
                                fontSize: "0.9rem",
                              }}
                            >
                              {ad.oldPrice}
                            </span>
                          </div>
                          <div className="ratings">
                            <span className="badge bg-warning text-dark">
                              <i className="fas fa-star me-1"></i>
                              {ad.rating}
                            </span>
                            <span className="ms-1">(50)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="blog-pagination">
            <nav>
              <ul className="pagination">
                <li className="page-item previtem">
                  <a className="page-link" href="#">
                    <i className="fas fa-regular fa-arrow-left"></i> Prev
                  </a>
                </li>
                <li className="justify-content-center pagination-center">
                  <div className="pagelink">
                    <ul>
                      {[1, 2, 3, 4, 5].map((p, i) => (
                        <li
                          className={`page-item ${p === 2 ? "active" : ""}`}
                          key={i}
                        >
                          <a className="page-link" href="#">
                            {p}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li className="page-item nextlink">
                  <a className="page-link" href="#">
                    Next <i className="fas fa-regular fa-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListingGrid;
