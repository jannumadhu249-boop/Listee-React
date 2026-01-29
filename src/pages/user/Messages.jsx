import { Link } from "react-router-dom";

const chatUsers = [
  {
    id: 1,
    name: "Marvin Downey",
    msg: "Hey, how are you?",
    avatar: "avatar-03.jpg",
    unread: 15,
  },
  {
    id: 2,
    name: "Charlene Reed",
    msg: "I'll call you later",
    avatar: "avatar-04.jpg",
  },
  {
    id: 3,
    name: "Travis Trimmble",
    msg: "Give me a full explain...",
    avatar: "avatar-05.jpg",
    unread: 15,
  },
  {
    id: 4,
    name: "Marvin Dorway",
    msg: "I'll call you later",
    avatar: "avatar-04.jpg",
    unread: 15,
  },
  {
    id: 5,
    name: "Travis Trimmble",
    msg: "Give me a full explain...",
    avatar: "avatar-05.jpg",
  },
  {
    id: 6,
    name: "Charlene Reed",
    msg: "Give me a full explain...",
    avatar: "avatar-04.jpg",
    unread: 15,
  },
  {
    id: 7,
    name: "Travis Trimmble",
    msg: "Give me a full explain...",
    avatar: "avatar-05.jpg",
    unread: 15,
  },
];

const Messages = () => (
  <>
    <section className="breadcrumb-bar">
      <div className="container">
        <h2 className="breadcrumb-title text-center">Messages</h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <span className="text-white">/</span>
            <li className="breadcrumb-item active">Messages</li>
          </ol>
        </nav>
      </div>
    </section>

    <section className="dashboard-content">
      <div className="container">
        {/* Sidebar Menu */}
        <ul className="dashborad-menus">
          <li>
            <a href="/dashboard">
              <i className="feather-grid"></i> Dashboard
            </a>
          </li>
          <li>
            <a href="/profile">
              <i className="fa-solid fa-user"></i> Profile
            </a>
          </li>
          <li>
            <a href="/my-listing">
              <i className="feather-list"></i> My Listing
            </a>
          </li>
          <li>
            <a href="/bookmarks">
              <i className="fa-solid fa-heart"></i> Bookmarks
            </a>
          </li>
          <li className="active">
            <a href="/messages">
              <i className="fa-solid fa-comment-dots"></i> Messages
            </a>
          </li>
          <li>
            <a href="/reviews">
              <i className="fa-solid fa-star"></i> Reviews
            </a>
          </li>
          <li>
            <a href="/login">
              <i className="fa-solid fa-circle-arrow-left"></i> Logout
            </a>
          </li>
        </ul>

        <div className="profile-content">
          <div className="row chat-window">
            {/* LEFT USERS LIST */}
            <div className="col-lg-4">
              <div className="card h-100">
                <div className="card-header">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search users..."
                  />
                </div>

                <div
                  className="card-body p-0 overflow-auto"
                  style={{ height: "50vh" }}
                >
                  {chatUsers.map((user, i) => (
                    <div
                      key={user.id}
                      className={`d-flex p-3 border-bottom ${
                        i === 0 ? "bg-light" : ""
                      }`}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={`/assets/img/profiles/${user.avatar}`}
                        className="rounded-circle me-2"
                        width="45"
                        alt=""
                      />
                      <div className="flex-grow-1">
                        <h6 className="mb-1">{user.name}</h6>
                        <small className="text-muted">{user.msg}</small>
                      </div>
                      {user.unread && (
                        <span className="badge bg-success rounded-pill">
                          {user.unread}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT CHAT AREA */}
            <div className="col-lg-8">
              <div className="card h-100 d-flex flex-column">
                <div className="chat-cont-right">
                  <div className="chat-header d-flex align-items-center">
                    <img
                      src="/assets/img/profiles/avatar-03.jpg"
                      className="rounded-circle me-2"
                      width="40"
                      alt=""
                    />
                    <h6 className="mb-0">Marvin Downey</h6>
                  </div>

                  <div className="chat-body overflow-auto" style={{height:"40vh"}}>
                    <div className="mb-3">
                      <div className="d-flex">
                        <img
                          src="/assets/img/profiles/avatar-03.jpg"
                          className="rounded-circle me-2"
                          width="30"
                          alt=""
                        />
                        <div className="bg-light rounded">
                          I'm just looking around.
                          <br />
                          Will you tell me something about yourself?
                          <small>8:35 AM</small>
                        </div>
                      </div>
                    </div>
                    <div className="msg-box received">
                      <p>Are you there? That time!</p>
                      <small>8:40 AM</small>
                    </div>
                  </div>

                  <div className="chat-footer">
                    <div className="input-group gap-3">
                      <input
                        type="text"
                        className="form-control rounded"
                        placeholder="Type a message..."
                      />
                      <button className="btn btn-primary rounded">
                        <i className="fas fa-paper-plane"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
export default Messages;
