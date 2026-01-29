import { Link } from "react-router-dom";

const Gallery = () => (
  <>
    <section
      className="breadcrumb-bar position-realtive overflow-hidden"
      style={{ height: "320px" }}
    >
      <div className="container position-absolute top-50 start-50 translate-middle text-center text-white">
        <h2 className="breadcrumb-title mb-2">Gallery</h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <span className="mx-2">/</span>
            <li className="breadcrumb-item active text-white">Gallery</li>
          </ol>
        </nav>
      </div>
    </section>

    <section className="gallery-section py-5">
      <div className="container">
        <div className="row">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <div className="col-lg-3 col-md-6 mb-4" key={i}>
              <a
                href={`/assets/img/gallery/gallery2/gallerypop-${(i % 12) + 1}.jpg`}
                className="gallery-item"
              >
                <img
                  src={`/assets/img/gallery/gallery2/gallerypop-${(i % 12) + 1}.jpg`}
                  className="img-fluid rounded"
                  alt={`Gallery ${i}`}
                />
              </a>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-12 mt-3">
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-center gap-3">
                <li className="page-item disabled">
                  <a className="page-link" href="#">
                    Prev
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  </>
);
export default Gallery;
