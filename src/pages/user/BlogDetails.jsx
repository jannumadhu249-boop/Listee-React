import { Link } from "react-router-dom";

const BlogDetails = () => (

  <>
    <section className="blogbanner">
      <div className="blogbanner-content">
        <span className="blog-hint">Health</span>

        <h1>The Top 25 Bike Stores in Toronto by Neighbourhood</h1>

        <ul className="entry-meta meta-item">
          <li>
            <div className="post-author">
              <div className="post-author-img">
                <img src="/assets/img/profiles/avatar-01.jpg" alt="author" />
              </div>
              <a href="#">
                <span>John Doe</span>
              </a>
            </div>
          </li>

          <li className="date-icon">
            <i className="fa-solid fa-calendar-days"></i>
            <span className="ms-1">October 6, 2022</span>
          </li>
        </ul>
      </div>
    </section>

    <section className="blogdetail-content">
      <div className="container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          vehicula sapien nec nisi aliquam, vitae finibus purus sodales. Mauris
          at turpis nulla. Curabitur nec tellus est. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Vestibulum pharetra arcu ac arcu varius, non congue neque
          aliquet. Pellentesque at feugiat purus. Aenean faucibus vehicula eros.
        </p>

        <p>
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Nulla fermentum malesuada pulvinar. Vestibulum laoreet
          rutrum semper. Vivamus malesuada, nisl in consectetur semper, mauris
          nulla aliquam risus, nec ultricies sapien elit sed ante. Aenean luctus
          felis in sem consequat auctor. Nulla turpis enim, scelerisque sit amet
          consectetur vel, lacinia sed augue. Proin ultricies dui id ex
          fringilla porta. Morbi nisi justo, venenatis ac nibh at, bibendum
          mattis risus. Maecenas tincidunt, ligula sed congue tempus, magna
          augue cursus ipsum, in malesuada justo risus nec lorem. Nam augue
          augue, mollis nec condimentum euismod, lacinia ultricies leo.
        </p>

        {/* Quote */}
        <blockquote className="blog-quotes">
          <img src="/assets/img/blogquote.jpg" alt="quote" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vehicula sapien nec nisi aliquam, vitae finibus purus sodales.
            Mauris at turpis nulla. Curabitur nec tellus est.
          </p>

          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Vestibulum pharetra arcu
          </p>
          <h6>Luis Pickford</h6>
        </blockquote>

        <p>
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Nulla fermentum malesuada pulvinar. Vestibulum
          laoreet rutrum semper. Vivamus malesuada, nisl in consectetur semper,
          mauris nulla aliquam risus, nec ultricies sapien elit sed ante. Aenean
          luctus felis in sem consequat auctor. Nulla turpis enim, scelerisque
          sit amet consectetur vel, lacinia sed augue. Proin ultricies dui id ex
          fringilla porta. Morbi nisi justo, venenatis ac nibh at, bibendum
          mattis risus. Maecenas tincidunt, ligula sed congue tempus, magna
          augue cursus ipsum, in malesuada justo risus nec lorem. Nam augue
          augue, mollis nec condimentum euismod, lacinia ultricies leo.
        </p>

        {/* Images */}
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="bloginner-img">
              <img
                src="/assets/img/blog/blogdetailimg-1.jpg"
                className="img-fluid"
                alt="detail"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="bloginner-img">
              <img
                src="/assets/img/blog/blogdetailimg-2.jpg"
                className="img-fluid"
                alt="detail"
              />
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="requiremnts-info">
          <h5>Requirements</h5>
          <ul>
            <li>
              We do not require any previous experience or pre-defined skills to
              take this course. A Great orientation would be enough to master
              UI/UX design.
            </li>

            <li>A Computer with a good internet connection.</li>

            <li>
              Vestibulum laoreet rutrum semper. Vivamus malesuada, nisl in
              consectetur semper, mauris nulla aliquam risus, nec ultricies
              sapien elit sed ante. Aenean luctus felis in sem consequat auctor.
            </li>

            <li>
              We do not require any previous experience or pre-defined skills to
              take this course. A Great orientation would be enough to master
              UI/UX design.
            </li>

            <li>A Computer with a good internet connection.</li>

            <li>
              Vestibulum laoreet rutrum semper. Vivamus malesuada, nisl in
              consectetur semper, mauris nulla aliquam risus, nec ultricies
              sapien elit sed ante. Aenean luctus felis in sem consequat auctor.
            </li>
          </ul>
        </div>

        {/* Share & Tags */}
        <div className="share-postsection">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="sharelink d-flex align-items-center gap-2">
                <button className="share-img btn p-0">
                  <i className="fas fa-share-nodes"></i>
                </button>
                <span className="share-text">Share</span>
              </div>
            </div>

            <div className="col-lg-8 col-md-12 ">
              <ul className="tags d-flex flex-wrap justify-content-lg-end gap-4">
                {["Travelling", "Art", "Vacation", "Tourism", "Culture"].map(
                  (tag, i) => (
                    <li key={i}>{tag}</li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="blogdetails-pagination">
          <ul>
            <li>
              <a href="#" className="prev-link">
                <i className="fas fa-arrow-left"></i> Previous Post
              </a>
              <h3>The Best SPA Salons For Your Relaxation</h3>
            </li>

            <li>
              <a href="#" className="next-link">
                Next Post <i className="fas fa-arrow-right"></i>
              </a>
              <h3>8 Amazing Tricks About Business</h3>
            </li>
          </ul>
        </div>

        {/* Review Section */}
        <div className="card review-sec mb-0">
          <div className="card-header d-flex align-items-center gap-2">
            <img src="/assets/img/review.svg" alt="review" />
            <h4>14 Reviews</h4>
          </div>

          <div className="card-body">
            <h6>Leave Feedback About This</h6>

            <form>
              <div className="row">
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Title"
                  />
                </div>

                <div className="col-lg-6 col-12">
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Name*"
                    required
                  />
                </div>

                <div className="col-lg-6 col-12">
                  <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Email*"
                    required
                  />
                </div>

                <div className="col-12">
                  <textarea
                    rows="4"
                    className="form-control mb-3"
                    placeholder="Write a Review*"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="reviewbox-rating mb-3">
                <span className="me-2">Rating</span>
                {[1, 2, 3, 4, 5].map((i) => (
                  <i key={i} className="fas fa-star filled" style={{ color: "#FFD700" }}></i>
                ))}
              </div>

              <button type="submit" className="btn btn-primary">
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
);
export default BlogDetails;
