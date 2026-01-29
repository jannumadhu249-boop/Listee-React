import { Link } from "react-router-dom";

const BlogGrid = () => {
  const categories = ["Health", "Care"];

  const blogs = [
    {
      id: 1,
      image: "/assets/img/blog/blog-1.jpg",
      author: "Mary",
      authorImg: "/assets/img/profiles/avatar-13.jpg",
      date: "October 6, 2022",
      title: "The Best Spa Saloons for your relaxations?",
    },
    {
      id: 2,
      image: "/assets/img/blog/blog-4.jpg",
      author: "Barbara",
      authorImg: "/assets/img/profiles/avatar-14.jpg",
      date: "October 6, 2022",
      title: "The Best Spa Saloons for your relaxations?",
    },
    {
      id: 3,
      image: "/assets/img/blog/blog-5.jpg",
      author: "Darryl",
      authorImg: "/assets/img/profiles/avatar-12.jpg",
      date: "October 6, 2022",
      title: "The Best Spa Saloons for your relaxations?",
    },
    {
      id: 4,
      image: "/assets/img/blog/blog-1.jpg",
      author: "Wilkerson",
      authorImg: "/assets/img/profiles/avatar-11.jpg",
      date: "October 6, 2022",
      title: "The Best Spa Saloons for your relaxations?",
    },
    {
      id: 5,
      image: "/assets/img/blog/blog-4.jpg",
      author: "Joseph",
      authorImg: "/assets/img/profiles/avatar-10.jpg",
      date: "October 6, 2022",
      title: "The Best Spa Saloons for your relaxations?",
    },
    {
      id: 6,
      image: "/assets/img/blog/blog-5.jpg",
      author: "Daniel",
      authorImg: "/assets/img/profiles/avatar-09.jpg",
      date: "October 6, 2022",
      title: "The Best Spa Saloons for your relaxations?",
    },
    {
      id: 7,
      image: "/assets/img/blog/blog-1.jpg",
      author: "Wilkerson",
      authorImg: "/assets/img/profiles/avatar-11.jpg",
      date: "October 6, 2022",
      title: "The Best Spa Saloons for your relaxations?",
    },
    {
      id: 8,
      image: "/assets/img/blog/blog-4.jpg",
      author: "Joseph",
      authorImg: "/assets/img/profiles/avatar-10.jpg",
      date: "October 6, 2022",
      title: "The Best Spa Saloons for your relaxations?",
    },
    {
      id: 9,
      image: "/assets/img/blog/blog-5.jpg",
      author: "Daniel",
      authorImg: "/assets/img/profiles/avatar-09.jpg",
      date: "October 6, 2022",
      title: "The Best Spa Saloons for your relaxations?",
    },
  ];

  return (
    <>
      <section className="breadcrumb-bar">
        <div className="container">
          <h2 className="breadcrumb-title text-center">Blog Grid</h2>
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

      <section className="bloglist-section blog-gridpage listing-section">
        <div className="container">
          <div className="row">
            {blogs.map((blog) => (
              <div className="col-lg-4 col-md-6 mb-4" key={blog.id}>
                <div className="blog grid-blog h-100">
                  <div className="blog-image">
                    <a href="/blog-details">
                      <img className="img-fluid" src={blog.image} alt="Post" />
                    </a>
                  </div>

                  <div className="blog-content d-flex flex-column">
                    <p className="blog-category d-flex gap-2 mb-2">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          className="btn btn-sm btn-outline-pink"
                        >
                          {cat}
                        </button>
                      ))}
                    </p>

                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-author">
                          <div className="post-author-img">
                            <img src={blog.authorImg} alt="author" />
                          </div>
                          <span>{blog.author}</span>
                        </div>
                      </li>
                      <li className="date-icon">
                        <i className="fa-solid fa-calendar-days"></i>{" "}
                        {blog.date}
                      </li>
                    </ul>

                    <h3 className="blog-title">
                      <a href="/blog-details">{blog.title}</a>
                    </h3>

                    <p className="blog-description">
                      Dimply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry’s standard
                      dummy text ever since the 1500s.
                    </p>

                    <div className="viewlink mt-auto">
                      <a href="/blog-details">
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
      </section>
    </>
  );
};

export default BlogGrid;
