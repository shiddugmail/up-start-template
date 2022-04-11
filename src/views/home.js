import React from "react";
import { Helmet } from "react-helmet";

import Card from "../components/card";
import projectStyles from "../style.module.css";
import styles from "./home.module.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Hero from "../components/hero";

const Home = (props) => {
  return (
    <div className={styles["container"]}>
      <Helmet>
        <title>Up Start Finance</title>
        <meta property="og:title" content="Up Start Finance" />
      </Helmet>
      <Navbar />
      <Hero />
      <div className={projectStyles["section-container"]}>
        <div
          className={` ${styles["max-width2"]} ${projectStyles["max-width"]} `}
        >
          <div className={styles["Image3"]}>
            <img
              alt="displays the media file"
              src="/playground_assets/group%2020-1200w.png"
              className={styles["hero-image1"]}
            />
          </div>
          <div className={styles["Content1"]}>
            <span
              className={` ${styles["text012"]} ${projectStyles["before-Heading"]} `}
            >
              how it works
            </span>
            <h1 className={styles["text013"]}>
              <span className={styles["text014"]}>
                Pay and get paid
                <span
                  dangerouslySetInnerHTML={{
                    __html: " "
                  }}
                />
              </span>
              <span className={styles["text015"]}>
                faster
                <span
                  dangerouslySetInnerHTML={{
                    __html: " "
                  }}
                />
              </span>
              <span className={styles["text016"]}>than ever.</span>
              <span className={styles["text017"]}></span>
            </h1>
            <span className={styles["text018"]}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </span>
            <div className={styles["container02"]}>
              <button
                className={` ${projectStyles["button-secondary"]} ${projectStyles["button"]} ${projectStyles["bg-transparent"]} `}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` ${styles["Section1"]} ${projectStyles["section-container"]} `}
      >
        <div
          className={` ${styles["max-width3"]} ${projectStyles["max-width"]} `}
        >
          <div className={styles["Content2"]}>
            <span
              className={` ${styles["text019"]} ${projectStyles["before-Heading"]} `}
            >
              save money
            </span>
            <h1 className={styles["text020"]}>
              <span className={styles["text021"]}>Earn cashback</span>
              <br></br>
              <span className={styles["text023"]}>
                from your favorite brands
              </span>
            </h1>
            <span className={styles["text024"]}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </span>
            <div className={styles["container03"]}>
              <button
                className={` ${projectStyles["button-secondary"]} ${projectStyles["button"]} ${projectStyles["bg-transparent"]} `}
              >
                See how
              </button>
            </div>
          </div>
          <div className={styles["Image4"]}>
            <img
              alt="displays the media file"
              src="/playground_assets/group%2021-1200w.png"
              className={styles["hero-image2"]}
            />
          </div>
        </div>
      </div>
      <div
        className={` ${styles["Section2"]} ${projectStyles["section-container"]} `}
      >
        <div
          className={` ${styles["max-width4"]} ${projectStyles["max-width"]} `}
        >
          <div className={styles["Image5"]}>
            <img
              alt="displays the media file"
              src="/playground_assets/jc-gellidon-fnc3yctccoi-unsplash%2014%20%5B1%5D-1200w.png"
              className={styles["hero-image3"]}
            />
          </div>
          <div className={styles["Content3"]}>
            <span
              className={` ${styles["text025"]} ${projectStyles["before-Heading"]} `}
            >
              get started
            </span>
            <h1 className={styles["text026"]}>Open your account today</h1>
            <div className={styles["Step"]}>
              <div className={styles["Number"]}>
                <span className={styles["text027"]}>1</span>
              </div>
              <div className={styles["container04"]}>
                <span className={styles["title"]}>Download UpStart App</span>
                <span className={styles["text028"]}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </span>
              </div>
            </div>
            <div className={styles["Step1"]}>
              <div className={styles["Number1"]}>
                <span className={styles["text029"]}>2</span>
              </div>
              <div className={styles["container05"]}>
                <span className={styles["title1"]}>
                  Create your free account
                </span>
                <span className={styles["text030"]}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </span>
              </div>
            </div>
            <div className={styles["Step2"]}>
              <div className={styles["Number2"]}>
                <span className={styles["text031"]}>3</span>
              </div>
              <div className={styles["container06"]}>
                <span className={styles["title2"]}>
                  Link your existing credit cards
                </span>
                <span className={styles["text032"]}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={projectStyles["section-container"]}>
        <div
          className={` ${styles["max-width5"]} ${projectStyles["max-width"]} `}
        >
          <span
            className={` ${styles["text033"]} ${projectStyles["before-Heading"]} `}
          >
            get started
          </span>
          <h1 className={styles["text034"]}>
            <span>No matter what you do,</span>
            <br></br>
            <span>UpStart will save you money</span>
          </h1>
          <div className={styles["cards-container"]}>
            <Card rootClassName="rootClassName2"></Card>
            <Card text="Personal" rootClassName="rootClassName"></Card>
            <Card text="Family" rootClassName="rootClassName1"></Card>
          </div>
        </div>
      </div>
      <div
        className={` ${styles["Section4"]} ${projectStyles["section-container"]} `}
      >
        <div
          className={` ${styles["max-width6"]} ${projectStyles["max-width"]} `}
        >
          <div className={styles["FAQ"]}>
            <div className={styles["Questions"]}>
              <span
                className={` ${styles["text037"]} ${projectStyles["before-Heading"]} `}
              >
                faq
              </span>
              <h1 className={styles["text038"]}>
                <span className={styles["text039"]}>
                  Frequently Asked
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " "
                    }}
                  />
                </span>
                <br></br>
                <span className={styles["text041"]}>Questions</span>
              </h1>
              <div data-role="Accordion" className={projectStyles["question"]}>
                <div data-type="accordion-header" className={styles["Trigger"]}>
                  <span className={styles["text042"]}>
                    Is this a Free or Paid service?
                  </span>
                  <svg viewBox="0 0 1024 1024" className={styles["icon02"]}>
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div
                  data-type="accordion-content"
                  className={projectStyles["question-content"]}
                >
                  <span className={styles["text043"]}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className={projectStyles["question"]}>
                <div
                  data-type="accordion-header"
                  className={styles["Trigger1"]}
                >
                  <span className={styles["text044"]}>
                    Do you operate in United Stated?
                  </span>
                  <svg viewBox="0 0 1024 1024" className={styles["icon04"]}>
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div
                  data-type="accordion-content"
                  className={projectStyles["question-content"]}
                >
                  <span className={styles["text045"]}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className={projectStyles["question"]}>
                <div
                  data-type="accordion-header"
                  className={styles["Trigger2"]}
                >
                  <span className={styles["text046"]}>
                    Is this a globally available bank?
                  </span>
                  <svg viewBox="0 0 1024 1024" className={styles["icon06"]}>
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div
                  data-type="accordion-content"
                  className={projectStyles["question-content"]}
                >
                  <span className={styles["text047"]}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className={projectStyles["question"]}>
                <div
                  data-type="accordion-header"
                  className={styles["Trigger3"]}
                >
                  <span className={styles["text048"]}>
                    Do you have an iOS or Android app?
                  </span>
                  <svg viewBox="0 0 1024 1024" className={styles["icon08"]}>
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div
                  data-type="accordion-content"
                  className={projectStyles["question-content"]}
                >
                  <span className={styles["text049"]}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
            </div>
            <img
              alt="displays the media file"
              src="/playground_assets/group%202-1200w.png"
              className={styles["image6"]}
            />
          </div>
          <div className={styles["Banner"]}>
            <span
              className={` ${styles["text050"]} ${projectStyles["before-Heading"]} `}
            >
              get started
            </span>
            <h1 className={styles["text051"]}>
              <span>Push your finances to</span>
              <br></br>
              <span></span>
              <span></span>
              <span> the next level.</span>
            </h1>
            <span className={styles["text057"]}>
              <span>
                Amet minim mollit non deserunt ullamco est sit
                <span
                  dangerouslySetInnerHTML={{
                    __html: " "
                  }}
                />
              </span>
              <br></br>
              <span>
                aliqua dolor do amet sint.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " "
                  }}
                />
              </span>
            </span>
            <div className={styles["btns"]}>
              <button
                className={` ${styles["button6"]} ${projectStyles["button"]} ${projectStyles["button-transparent"]} `}
              >
                See all plans
              </button>
              <button
                className={` ${styles["button7"]} ${projectStyles["button"]} ${projectStyles["button-gradient"]} `}
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
