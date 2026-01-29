import { Link } from "react-router-dom";
const Faq = () => {
  const faqData = [
    {
      section: "Payments",
      items: [
        {
          id: "faqOne",
          question: "Why Won’t My Payment Go Through?",
          answer: (
            <>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                placerat bibendum ligula ac facilisis. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Mauris consectetur, metus vel tincidunt scelerisque, quam
                diam faucibus est, ut viverra lectus odio non ante. Donec enim
                nisi, porttitor eu odio ac, sodales consequat lectus. Nunc
                pulvinar posuere metus ac laoreet. Nunc lacinia diam ut pulvinar
                porttitor. Cras quis ultrices tellus, id posuere turpis. Integer
                eget diam et metus dignissim pharetra sed ut mi. Integer
                volutpat odio sed odio feugiat finibus. Pellentesque quis purus
                vitae dolor elementum elementum eu ac ante. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Aliquam at
                neque a lorem auctor sagittis
              </p>

              <p>
                Mauris vestibulum lorem a condimentum vulputate. Integer vitae
                turpis turpis. Cras at tincidunt urna. Aenean leo justo, congue
                et felis a, elementum rutrum felis. Fusce rutrum ipsum eu
                pretium faucibus. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae; Integer dolor odio,
                iaculis nec tincidunt vel, dapibus a nisl. In feugiat maximus
                eros, id sollicitudin quam sagittis nec.
              </p>
            </>
          ),
        },
        {
          id: "faqTwo",
          question: "How to I Get a Refund?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        },
        {
          id: "faqThree",
          question: "How Do I Redeem a Coupon?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        },
        {
          id: "faqFour",
          question: "How Do I Change Account Profile Name",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        },
      ],
    },
    {
      section: "Suggestions",
      items: [
        {
          id: "faqFive",
          question: "Why Won’t My Payment Go Through?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        },
        {
          id: "faqSix",
          question: "How to I Get a Refund?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        },
        {
          id: "faqSeven",
          question: "How Do I Redeem a Coupon?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        },
        {
          id: "faqEight",
          question: "How Do I Change Account Profile Name",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        },
      ],
    },
  ];

  return (
    <>
      <section className="breadcrumb-bar position-realtive overflow-hidden">
        <div className="container position-absolute top-50 start-50 translate-middle text-center text-white">
          <h2 className="breadcrumb-title mt-5 mb-2">
            Frequently Asked Questions
          </h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <span className="mx-2">/</span>
              <li className="breadcrumb-item active text-white">FAQ</li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="faq-section listing-section py-5">
        <div className="container">
          <div className="faq-info">
            {faqData.map((group, index) => (
              <div key={index}>
                {/* Section Title */}
                <div className="page-title">
                  <h2 className={index === 0 ? "mt-0" : ""}>{group.section}</h2>
                </div>

                {/* FAQ Cards */}
                {group.items.map((faq, i) => (
                  <div
                    key={faq.id}
                    className={`faq-card ${
                      i === group.items.length - 1 ? "mb-0" : ""
                    }`}
                  >
                    <h4 className="faq-title">
                      <a
                        className="collapsed"
                        data-bs-toggle="collapse"
                        href={`#${faq.id}`}
                        aria-expanded="false"
                      >
                        {faq.question}
                      </a>
                    </h4>

                    <div id={faq.id} className="card-collapse collapse">
                      {typeof faq.answer === "string" ? (
                        <p>{faq.answer}</p>
                      ) : (
                        faq.answer
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Faq;
