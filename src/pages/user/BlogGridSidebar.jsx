import { Link } from "react-router-dom";

const BlogGridSidebar = () => {
  const blogs = [
    {
      id: 1,
      img: "/assets/img/blog/blog-1.jpg",
      categories: ["Health", "Care"],
      author: "Mary",
      authorImg: "/assets/img/profiles/avatar-13.jpg",
      date: "October 6, 2022",
      title: "The Best Spa Saloons for your relaxations?",
      description:
        "Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s...",
    },
    {
      id: 2,
      img: "/assets/img/blog/blog-4.jpg",
      categories: ["Health", "Care"],
      author: "Barbara",
      authorImg: "/assets/img/profiles/avatar-14.jpg",
      date: "October 6, 2022",
      title: "The Best Spa Saloons for your relaxations?",
      description:
        "Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s...",
    },
    {
      id: 3,
      img: "/assets/img/blog/blog-1.jpg",
      categories: ["Health", "Care"],
      author: "Darryl",
      authorImg: "/assets/img/profiles/avatar-12.jpg",
      date: "October 6, 2022",
      title: "The Best Spa Saloons for your relaxations?",
      description:
        "Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s...",
    },
    {
      id: 4,
      img: "/assets/img/blog/blog-4.jpg",
      categories: ["Health", "Care"],
      author: "Amara",
      authorImg: "/assets/img/profiles/avatar-13.jpg",
      date: "October 6, 2022",
      title: "The Best Spa Saloons for your relaxations?",
      description:
        "Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s...",
    },
    {
      id: 5,
      img: "/assets/img/blog/blog-1.jpg",
      categories: ["Health", "Care"],
      author: "Wilkerson",
      authorImg: "/assets/img/profiles/avatar-12.jpg",
      date: "October 6, 2022",
      title: "The Best Spa Saloons for your relaxations?",
      description:
        "Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s...",
    },
    {
      id: 6,
      img: "/assets/img/blog/blog-4.jpg",
      categories: ["Health", "Care"],
      author: "Joseph",
      authorImg: "/assets/img/profiles/avatar-11.jpg",
      date: "October 6, 2022",
      title: "The Best Spa Saloons for your relaxations?",
      description:
        "Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s...",
    },
  ];

  const categories = [
    "Accept Credit Cards",
    "Smoking Allowed",
    "Bike Parking",
    "Street Parking",
    "Wireless Internet",
    "Pet Friendly",
  ];

  const tags = [
    "Travelling",
    "Art",
    "Vacation",
    "Tourism",
    "Culture",
    "Lifestyle",
    "Travelling",
    "Art",
    "Vacation",
    "Tourism",
    "Culture",
  ];

  const articles = [
    {
      id: 1,
      img: "/assets/img/blog/blog-3.jpg",
      title: "Great Business Tips in 2022",
      date: "October 6, 2022",
    },
    {
      id: 2,
      img: "/assets/img/blog/blog-4.jpg",
      title: "Excited News About Fashion.",
      date: "October 9, 2022",
    },
    {
      id: 3,
      img: "/assets/img/blog/blog-5.jpg",
      title: "8 Amazing Tricks About Business",
      date: "October 10, 2022",
    },
  ];

  return (
    <>
      <section className="breadcrumb-bar">
        <div className="container">
          <h2 className="breadcrumb-title text-center">
            Blog - Grid - Sidebar
          </h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <span className="mx-2 text-white">/</span>
              <li className="breadcrumb-item active text-white">Blog</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="bloglist-section bloggrid-sidebar listing-section">
        <div className="container">
          <div className="row">
            {/* Blog Grid */}
            <div className="col-lg-8">
              <div className="row">
                {blogs.map((blog) => (
                  <div className="col-lg-6 col-md-6 d-lg-flex" key={blog.id}>
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <a href="blog-details.html">
                          <img
                            className="img-fluid"
                            src={blog.img}
                            alt="Post Image"
                          />
                        </a>
                      </div>
                      <div className="blog-content">
                        <p className="blog-category">
                          {blog.categories.map((cat, idx) => (
                            <a href="javascript:void(0)" key={idx}>
                              <span>{cat}</span>
                            </a>
                          ))}
                        </p>
                        <ul className="entry-meta meta-item">
                          <li>
                            <div className="post-author">
                              <div className="post-author-img">
                                <img src={blog.authorImg} alt="author" />
                              </div>
                              <a href="javascript:void(0)">
                                <span> {blog.author} </span>
                              </a>
                            </div>
                          </li>
                          <li className="date-icon">
                            <i className="fa-solid fa-calendar-days"></i>{" "}
                            {blog.date}
                          </li>
                        </ul>
                        <h3 className="blog-title">
                          <a href="blog-details.html">{blog.title}</a>
                        </h3>
                        <p className="blog-description">{blog.description}</p>
                        <div className="viewlink">
                          <a href="blog-details.html">
                            View Details <i className="feather-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
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
                          {[1, 2, 3, "...", 14].map((p, i) => (
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

            {/* Sidebar */}
            <div className="col-lg-4 theiaStickySidebar">
              <div className="rightsidebar">
                {/* Filter */}
                <div className="card">
                  <h4>
                    <img
                      src="/assets/img/details-icon.svg"
                      alt="details-icon"
                    />{" "}
                    Filter
                  </h4>
                  <div className="filter-content looking-input form-set mb-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="To Search type and hit enter"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div className="card">
                  <h4>
                    <img
                      src="/assets/img/category-icon.svg"
                      alt="details-icon"
                    />{" "}
                    Categories
                  </h4>
                  <ul className="blogcategories-list">
                    {categories.map((cat, i) => (
                      <li key={i}>
                        <a href="javascript:void(0)">{cat}</a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="card tags-widget">
                  <h4>
                    <i className="feather-tag"></i> Tags
                  </h4>
                  <ul className="tags">
                    {tags.map((tag, i) => (
                      <li key={i}>{tag}</li>
                    ))}
                  </ul>
                </div>

                {/* Articles */}
                <div className="card">
                  <h4>
                    <i className="feather-tag"></i> Article
                  </h4>
                  {articles.map((art) => (
                    <div className="article" key={art.id}>
                      <div className="article-blog">
                        <a href="blog-details.html">
                          <img className="img-fluid" src={art.img} alt="Blog" />
                        </a>
                      </div>
                      <div className="article-content">
                        <h5>
                          <a href="blog-details.html">{art.title}</a>
                        </h5>
                        <div className="article-date">
                          <i className="fa-solid fa-calendar-days"></i>
                          <span>{art.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogGridSidebar;
