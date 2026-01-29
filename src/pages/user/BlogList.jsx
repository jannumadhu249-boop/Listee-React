import { Link } from "react-router-dom";

const BlogList = () => {
  const blogs = [
    {
      id: 1,
      image: "/assets/img/blog/bloglistingimg-1.jpg",
      title: "The Best SPA Salons For Your Relaxation",
      author: "Mary",
      authorImg: "/assets/img/profiles/avatar-13.jpg",
      date: "October 6, 2022",
    },
    {
      id: 2,
      image: "/assets/img/blog/bloglistingimg-2.jpg",
      title: "Great Business Tips in 2022",
      author: "Barbara",
      authorImg: "/assets/img/profiles/avatar-14.jpg",
      date: "October 9, 2022",
    },
    {
      id: 3,
      image: "/assets/img/blog/bloglistingimg-3.jpg",
      title: "8 Amazing Tricks About Business",
      author: "Darryl",
      authorImg: "/assets/img/profiles/avatar-12.jpg",
      date: "October 7, 2022",
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
      title: "Great Business Tips in 2022",
      image: "/assets/img/blog/blog-3.jpg",
      date: "October 6, 2022",
    },
    {
      id: 2,
      title: "Excited News About Fashion.",
      image: "/assets/img/blog/blog-4.jpg",
      date: "October 9, 2022",
    },
    {
      id: 3,
      title: "8 Amazing Tricks About Business",
      image: "/assets/img/blog/blog-5.jpg",
      date: "October 10, 2022",
    },
  ];

  return (
    <>
      <section className="breadcrumb-bar">
        <div className="container">
          <h2 className="breadcrumb-title text-center">Blog-List</h2>
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

      <section className="bloglisting">
        <div className="container">
          <div className="row align-items-stretch">
            {/* Blog Listing */}
            <div className="col-lg-8 d-flex flex-column">
              <div className="bloglist-widget flex-grow-1">
                {blogs.map((blog) => (
                  <div className="blog grid-blog" key={blog.id}>
                    <div className="blog-image">
                      <a href="/blog-details">
                        <img
                          className="img-fluid"
                          src={blog.image}
                          alt="Post"
                        />
                      </a>
                    </div>

                    <div className="blog-content">
                      <p className="blog-category">
                        <span>Health</span>
                        <span>Care</span>
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

                      <p className="mb-0">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard
                      </p>

                      <div className="viewlink">
                        <a href="/blog-details">
                          View Details <i className="feather-arrow-right"></i>
                        </a>
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
            <div className="col-lg-4">
              <div className="rightsidebar w-100">
                {/* Search */}
                <div className="card">
                  <h4>
                    {" "}
                    <img src="/assets/img/details-icon.svg" alt="" /> Filter
                  </h4>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="To Search type and hit enter"
                  />
                </div>

                {/* Categories */}
                <div className="card">
                  <h4>
                    {" "}
                    <img src="/assets/img/category-icon.svg" alt="" />
                    Categories
                  </h4>
                  <ul className="blogcategories-list">
                    {categories.map((cat) => (
                      <li key={cat}>
                        <a href="#">{cat}</a>
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
                    {" "}
                    <i className="feather-tag"></i> Article
                  </h4>
                  {articles.map((article) => (
                    <div className="article" key={article.id}>
                      <div className="article-blog">
                        <img
                          className="img-fluid"
                          src={article.image}
                          alt="Article"
                        />
                      </div>
                      <div className="article-content">
                        <h5 className="text-white">{article.title}</h5>
                        <div className="article-date text-white">
                          <i className="fa-solid fa-calendar-days"></i>
                          <span>{article.date}</span>
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

export default BlogList;
