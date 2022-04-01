import React from "react";
import Img from "../../../assets/img/post-slide-6.jpg";
import Img1 from "../../../assets/img/person-2.jpg";
import "../main.css";
import Sliders from "../slider/Slider";
import Header from "../../header/Header";

function Article() {
  return (
    <>
      <Header />
      <Sliders />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-9" data-aos="fade-up">
              <h3 className="category-title">Category: Business</h3>

              <div className="d-md-flex post-entry-2 half">
                <a href="single-post.html" className="me-4 thumbnail">
                  <img src={Img} alt="" className="img-fluid artImg" />
                </a>
                <div className="art">
                  <div className="post-meta">
                    <span className="date">Culture</span>
                    <span className="mx-1">&bullet;</span>{" "}
                    <span>Jul 5th '22</span>
                  </div>
                  <h3>
                    What is the son of Football Coach John Gruden, Deuce Gruden
                    doing Now?
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio placeat exercitationem magni voluptates dolore.
                    Tenetur fugiat voluptates quas, nobis error deserunt aliquam
                    temporibus sapiente, laudantium dolorum itaque libero eos
                    deleniti?
                  </p>
                  <div className="d-flex align-items-center author">
                    <div className="photo">
                      <img src={Img1} alt="" className="avatar-img" />
                    </div>
                    <div className="name">
                      <h3 className="m-0 p-0">Wade Warren</h3>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="category-title">Category: Business</h3>

              <div className="d-md-flex post-entry-2 half">
                <a href="single-post.html" className="me-4 thumbnail">
                  <img src={Img} alt="" className="img-fluid artImg" />
                </a>
                <div className="art">
                  <div className="post-meta">
                    <span className="date">Culture</span>
                    <span className="mx-1">&bullet;</span>{" "}
                    <span>Jul 5th '22</span>
                  </div>
                  <h3>
                    What is the son of Football Coach John Gruden, Deuce Gruden
                    doing Now?
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio placeat exercitationem magni voluptates dolore.
                    Tenetur fugiat voluptates quas, nobis error deserunt aliquam
                    temporibus sapiente, laudantium dolorum itaque libero eos
                    deleniti?
                  </p>
                  <div className="d-flex align-items-center author">
                    <div className="photo">
                      <img src={Img1} alt="" className="avatar-img" />
                    </div>
                    <div className="name">
                      <h3 className="m-0 p-0">Wade Warren</h3>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="category-title">Category: Business</h3>

              <div className="d-md-flex post-entry-2 half">
                <a href="single-post.html" className="me-4 thumbnail">
                  <img src={Img} alt="" className="img-fluid artImg" />
                </a>
                <div className="art">
                  <div className="post-meta">
                    <span className="date">Culture</span>
                    <span className="mx-1">&bullet;</span>{" "}
                    <span>Jul 5th '22</span>
                  </div>
                  <h3>
                    What is the son of Football Coach John Gruden, Deuce Gruden
                    doing Now?
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio placeat exercitationem magni voluptates dolore.
                    Tenetur fugiat voluptates quas, nobis error deserunt aliquam
                    temporibus sapiente, laudantium dolorum itaque libero eos
                    deleniti?
                  </p>
                  <div className="d-flex align-items-center author">
                    <div className="photo">
                      <img src={Img1} alt="" className="avatar-img" />
                    </div>
                    <div className="name">
                      <h3 className="m-0 p-0">Wade Warren</h3>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="category-title">Category: Business</h3>

              <div className="d-md-flex post-entry-2 half">
                <a href="single-post.html" className="me-4 thumbnail">
                  <img src={Img} alt="" className="img-fluid artImg" />
                </a>
                <div className="art">
                  <div className="post-meta">
                    <span className="date">Culture</span>
                    <span className="mx-1">&bullet;</span>{" "}
                    <span>Jul 5th '22</span>
                  </div>
                  <h3>
                    What is the son of Football Coach John Gruden, Deuce Gruden
                    doing Now?
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio placeat exercitationem magni voluptates dolore.
                    Tenetur fugiat voluptates quas, nobis error deserunt aliquam
                    temporibus sapiente, laudantium dolorum itaque libero eos
                    deleniti?
                  </p>
                  <div className="d-flex align-items-center author">
                    <div className="photo">
                      <img src={Img1} alt="" className="avatar-img" />
                    </div>
                    <div className="name">
                      <h3 className="m-0 p-0">Wade Warren</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-5">
                <form
                  class="form-inline"
                  style={{ width: "100%", position: "relative" }}
                >
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    style={{ position: "absolute", right: "0", left: "0" }}
                  />
                  <button
                    class="btn btnsearch btn-outline-success my-2 my-sm-0"
                    type="submit"
                    style={{ position: "absolute", right: "0", border: "none" }}
                  >
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
              <div className="aside-block">
                <ul
                  className="nav nav-pills custom-tab-nav mb-4"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-popular-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-popular"
                      type="button"
                      role="tab"
                      aria-controls="pills-popular"
                      aria-selected="true"
                    >
                      Popular
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-trending-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-trending"
                      type="button"
                      role="tab"
                      aria-controls="pills-trending"
                      aria-selected="false"
                    >
                      Trending
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-latest-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-latest"
                      type="button"
                      role="tab"
                      aria-controls="pills-latest"
                      aria-selected="false"
                    >
                      Latest
                    </button>
                  </li>
                </ul>

                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-popular"
                    role="tabpanel"
                    aria-labelledby="pills-popular-tab"
                  >
                    <div className="post-entry-1 border-bottom">
                      <div className="post-meta">
                        <span className="date">Sport</span>{" "}
                        <span className="mx-1">&bullet;</span>{" "}
                        <span>Jul 5th '22</span>
                      </div>
                      <h2 className="mb-2">
                        <a href="#">
                          How to Avoid Distraction and Stay Focused During Video
                          Calls?
                        </a>
                      </h2>
                      <span className="author mb-3 d-block">Jenny Wilson</span>
                    </div>

                    <div className="post-entry-1 border-bottom">
                      <div className="post-meta">
                        <span className="date">Lifestyle</span>{" "}
                        <span className="mx-1">&bullet;</span>{" "}
                        <span>Jul 5th '22</span>
                      </div>
                      <h2 className="mb-2">
                        <a href="#">
                          17 Pictures of Medium Length Hair in Layers That Will
                          Inspire Your New Haircut
                        </a>
                      </h2>
                      <span className="author mb-3 d-block">Jenny Wilson</span>
                    </div>

                    <div className="post-entry-1 border-bottom">
                      <div className="post-meta">
                        <span className="date">Culture</span>{" "}
                        <span className="mx-1">&bullet;</span>{" "}
                        <span>Jul 5th '22</span>
                      </div>
                      <h2 className="mb-2">
                        <a href="#">
                          9 Half-up/half-down Hairstyles for Long and Medium
                          Hair
                        </a>
                      </h2>
                      <span className="author mb-3 d-block">Jenny Wilson</span>
                    </div>

                    <div className="post-entry-1 border-bottom">
                      <div className="post-meta">
                        <span className="date">Lifestyle</span>{" "}
                        <span className="mx-1">&bullet;</span>{" "}
                        <span>Jul 5th '22</span>
                      </div>
                      <h2 className="mb-2">
                        <a href="#">
                          Life Insurance And Pregnancy: A Working Mom’s Guide
                        </a>
                      </h2>
                      <span className="author mb-3 d-block">Jenny Wilson</span>
                    </div>

                    <div className="post-entry-1 border-bottom">
                      <div className="post-meta">
                        <span className="date">Business</span>{" "}
                        <span className="mx-1">&bullet;</span>{" "}
                        <span>Jul 5th '22</span>
                      </div>
                      <h2 className="mb-2">
                        <a href="#">
                          The Best Homemade Masks for Face (keep the Pimples
                          Away)
                        </a>
                      </h2>
                      <span className="author mb-3 d-block">Jenny Wilson</span>
                    </div>

                    <div className="post-entry-1 border-bottom">
                      <div className="post-meta">
                        <span className="date">Lifestyle</span>{" "}
                        <span className="mx-1">&bullet;</span>{" "}
                        <span>Jul 5th '22</span>
                      </div>
                      <h2 className="mb-2">
                        <a href="#">
                          10 Life-Changing Hacks Every Working Mom Should Know
                        </a>
                      </h2>
                      <span className="author mb-3 d-block">Jenny Wilson</span>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-trending"
                    role="tabpanel"
                    aria-labelledby="pills-trending-tab"
                  >
                    <div className="post-entry-1 border-bottom">
                      <div className="post-meta">
                        <span className="date">Lifestyle</span>{" "}
                        <span className="mx-1">&bullet;</span>{" "}
                        <span>Jul 5th '22</span>
                      </div>
                      <h2 className="mb-2">
                        <a href="#">
                          17 Pictures of Medium Length Hair in Layers That Will
                          Inspire Your New Haircut
                        </a>
                      </h2>
                      <span className="author mb-3 d-block">Jenny Wilson</span>
                    </div>

                    <div className="post-entry-1 border-bottom">
                      <div className="post-meta">
                        <span className="date">Culture</span>{" "}
                        <span className="mx-1">&bullet;</span>{" "}
                        <span>Jul 5th '22</span>
                      </div>
                      <h2 className="mb-2">
                        <a href="#">
                          9 Half-up/half-down Hairstyles for Long and Medium
                          Hair
                        </a>
                      </h2>
                      <span className="author mb-3 d-block">Jenny Wilson</span>
                    </div>

                    <div className="post-entry-1 border-bottom">
                      <div className="post-meta">
                        <span className="date">Lifestyle</span>{" "}
                        <span className="mx-1">&bullet;</span>{" "}
                        <span>Jul 5th '22</span>
                      </div>
                      <h2 className="mb-2">
                        <a href="#">
                          Life Insurance And Pregnancy: A Working Mom’s Guide
                        </a>
                      </h2>
                      <span className="author mb-3 d-block">Jenny Wilson</span>
                    </div>

                    <div className="post-entry-1 border-bottom">
                      <div className="post-meta">
                        <span className="date">Sport</span>{" "}
                        <span className="mx-1">&bullet;</span>{" "}
                        <span>Jul 5th '22</span>
                      </div>
                      <h2 className="mb-2">
                        <a href="#">
                          How to Avoid Distraction and Stay Focused During Video
                          Calls?
                        </a>
                      </h2>
                      <span className="author mb-3 d-block">Jenny Wilson</span>
                    </div>
                    <div className="post-entry-1 border-bottom">
                      <div className="post-meta">
                        <span className="date">Business</span>{" "}
                        <span className="mx-1">&bullet;</span>{" "}
                        <span>Jul 5th '22</span>
                      </div>
                      <h2 className="mb-2">
                        <a href="#">
                          The Best Homemade Masks for Face (keep the Pimples
                          Away)
                        </a>
                      </h2>
                      <span className="author mb-3 d-block">Jenny Wilson</span>
                    </div>

                    <div className="post-entry-1 border-bottom">
                      <div className="post-meta">
                        <span className="date">Lifestyle</span>{" "}
                        <span className="mx-1">&bullet;</span>{" "}
                        <span>Jul 5th '22</span>
                      </div>
                      <h2 className="mb-2">
                        <a href="#">
                          10 Life-Changing Hacks Every Working Mom Should Know
                        </a>
                      </h2>
                      <span className="author mb-3 d-block">Jenny Wilson</span>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-latest"
                    role="tabpanel"
                    aria-labelledby="pills-latest-tab"
                  >
                    <div className="post-entry-1 border-bottom">
                      <div className="post-meta">
                        <span className="date">Lifestyle</span>{" "}
                        <span className="mx-1">&bullet;</span>{" "}
                        <span>Jul 5th '22</span>
                      </div>
                      <h2 className="mb-2">
                        <a href="#">
                          Life Insurance And Pregnancy: A Working Mom’s Guide
                        </a>
                      </h2>
                      <span className="author mb-3 d-block">Jenny Wilson</span>
                    </div>

                    <div className="post-entry-1 border-bottom">
                      <div className="post-meta">
                        <span className="date">Business</span>{" "}
                        <span className="mx-1">&bullet;</span>{" "}
                        <span>Jul 5th '22</span>
                      </div>
                      <h2 className="mb-2">
                        <a href="#">
                          The Best Homemade Masks for Face (keep the Pimples
                          Away)
                        </a>
                      </h2>
                      <span className="author mb-3 d-block">Jenny Wilson</span>
                    </div>

                    <div className="post-entry-1 border-bottom">
                      <div className="post-meta">
                        <span className="date">Lifestyle</span>{" "}
                        <span className="mx-1">&bullet;</span>{" "}
                        <span>Jul 5th '22</span>
                      </div>
                      <h2 className="mb-2">
                        <a href="#">
                          10 Life-Changing Hacks Every Working Mom Should Know
                        </a>
                      </h2>
                      <span className="author mb-3 d-block">Jenny Wilson</span>
                    </div>

                    <div className="post-entry-1 border-bottom">
                      <div className="post-meta">
                        <span className="date">Sport</span>{" "}
                        <span className="mx-1">&bullet;</span>{" "}
                        <span>Jul 5th '22</span>
                      </div>
                      <h2 className="mb-2">
                        <a href="#">
                          How to Avoid Distraction and Stay Focused During Video
                          Calls?
                        </a>
                      </h2>
                      <span className="author mb-3 d-block">Jenny Wilson</span>
                    </div>

                    <div className="post-entry-1 border-bottom">
                      <div className="post-meta">
                        <span className="date">Lifestyle</span>{" "}
                        <span className="mx-1">&bullet;</span>{" "}
                        <span>Jul 5th '22</span>
                      </div>
                      <h2 className="mb-2">
                        <a href="#">
                          17 Pictures of Medium Length Hair in Layers That Will
                          Inspire Your New Haircut
                        </a>
                      </h2>
                      <span className="author mb-3 d-block">Jenny Wilson</span>
                    </div>

                    <div className="post-entry-1 border-bottom">
                      <div className="post-meta">
                        <span className="date">Culture</span>{" "}
                        <span className="mx-1">&bullet;</span>{" "}
                        <span>Jul 5th '22</span>
                      </div>
                      <h2 className="mb-2">
                        <a href="#">
                          9 Half-up/half-down Hairstyles for Long and Medium
                          Hair
                        </a>
                      </h2>
                      <span className="author mb-3 d-block">Jenny Wilson</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="aside-block">
                <h3 className="aside-title">Categories</h3>
                <ul className="aside-links list-unstyled">
                  <li>
                    <a href="category.html">
                      <i className="bi bi-chevron-right"></i> Business
                    </a>
                  </li>
                  <li>
                    <a href="category.html">
                      <i className="bi bi-chevron-right"></i> Culture
                    </a>
                  </li>
                  <li>
                    <a href="category.html">
                      <i className="bi bi-chevron-right"></i> Sport
                    </a>
                  </li>
                  <li>
                    <a href="category.html">
                      <i className="bi bi-chevron-right"></i> Food
                    </a>
                  </li>
                  <li>
                    <a href="category.html">
                      <i className="bi bi-chevron-right"></i> Politics
                    </a>
                  </li>
                  <li>
                    <a href="category.html">
                      <i className="bi bi-chevron-right"></i> Celebrity
                    </a>
                  </li>
                  <li>
                    <a href="category.html">
                      <i className="bi bi-chevron-right"></i> Startups
                    </a>
                  </li>
                  <li>
                    <a href="category.html">
                      <i className="bi bi-chevron-right"></i> Travel
                    </a>
                  </li>
                </ul>
              </div>

              <div className="aside-block">
                <h3 className="aside-title">Tags</h3>
                <ul className="aside-tags list-unstyled">
                  <li>
                    <a href="category.html">Business</a>
                  </li>
                  <li>
                    <a href="category.html">Culture</a>
                  </li>
                  <li>
                    <a href="category.html">Sport</a>
                  </li>
                  <li>
                    <a href="category.html">Food</a>
                  </li>
                  <li>
                    <a href="category.html">Politics</a>
                  </li>
                  <li>
                    <a href="category.html">Celebrity</a>
                  </li>
                  <li>
                    <a href="category.html">Startups</a>
                  </li>
                  <li>
                    <a href="category.html">Travel</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  
    </>
  );
}

export default Article;
