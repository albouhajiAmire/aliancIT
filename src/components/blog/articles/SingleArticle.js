import React from "react";
import Img from "../../../assets/img/team/post-slide-6.jpg";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";

function SingleArticle() {
  return (
    <>
    <Header/>
      <section className="single-post-content" style={{ marginTop: "5%" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-9 post-content" data-aos="fade-up">
              <div className="single-post">
                <div className="post-meta">
                  <span className="date">Business</span>
                  <span className="mx-1">&bullet;</span>
                  <span>Jul 5th '22</span>
                </div>
                <h1 className="mb-5">
                  13 Amazing Poems from Shel Silverstein with Valuable Life
                  Lessons
                </h1>
                <figure className="my-4">
                  <img src={Img} alt="" className="img-fluid img-article" />
                  <figcaption>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo, odit?{" "}
                  </figcaption>
                </figure>
                <div className="tools">
                        <div><i className="fa-solid fa-comment"></i><span>12</span></div>
                        <div><i className="fa-solid fa-thumbs-up"></i><span>13</span></div>
                        <div><i className="fa-solid fa-heart"></i><span>14</span></div>
                        <div><i className="fa-solid fa-fire-flame-curved"></i><span>14</span></div>
                </div>
                <p className="paragraphSingle">
                  Sunt reprehenderit, hic vel optio odit est dolore, distinctio
                  iure itaque enim pariatur ducimus. Rerum soluta, perspiciatis
                  voluptatum cupiditate praesentium repellendus quas expedita
                  exercitationem tempora aliquam quaerat in eligendi adipisci
                  harum non omnis reprehenderit quidem beatae modi. Ea fugiat
                  enim libero, ipsam dicta explicabo nihil, tempore, nulla
                  repellendus eos necessitatibus eligendi corporis cum? Eaque
                  harum, eligendi itaque numquam aliquam soluta.
                </p>
                <p className="paragraphSingle">
                  Explicabo perspiciatis, laborum provident voluptates illum in
                  nulla consectetur atque quaerat excepturi quisquam, veniam
                  velit ex pariatur quos consequuntur? Excepturi reiciendis
                  perferendis, cupiditate dolorem eos illum amet. Beatae
                  voluptates nemo esse ratione voluptate, nesciunt fugit magnam
                  veritatis voluptas dignissimos doloribus maiores? Aliquam,
                  dolores natus exercitationem corrupti blanditiis, consequuntur
                  nihil nobis sed voluptatibus maiores sunt, illo provident
                  aliquid laborum. Vitae, ut.
                </p>
                <p className="paragraphSingle">
                  Reprehenderit aut sed doloribus blanditiis, aspernatur magni?
                  In molestias rem, similique ut esse repudiandae quod
                  recusandae dolores neque earum omnis at, suscipit fuga? Minima
                  qui veniam deserunt quisquam error amet at ratione nesciunt
                  porro quis placeat repudiandae voluptatibus officiis fuga
                  necessitatibus, expedita officia adipisci eaque labore
                  accusamus? Nesciunt repellat illo exercitationem facilis
                  similique quaerat, quis sequi? Praesentium nulla ipsam dolor.
                </p>
                <p className="paragraphSingle">
                  Dolorum, incidunt! Adipisci harum itaque maxime dolores
                  doloremque porro eligendi quis, doloribus vel sit rerum sunt
                  obcaecati nam suscipit nulla vitae alias blanditiis aliquam
                  debitis atque illo modi et placeat. Ratione iure eveniet
                  provident. Culpa laboriosam sed ad quia. Corrupti, earum,
                  perferendis dolore cupiditate sint nihil maiores iusto tempora
                  nobis porro itaque est. Ut laborum culpa assumenda pariatur et
                  perferendis?
                </p>
                <p className="paragraphSingle">
                  Est soluta veritatis laboriosam, consequuntur temporibus
                  asperiores, fugit id a ullam sed, expedita sequi doloribus
                  fugiat. Odio et necessitatibus enim nam, iste reprehenderit
                  cupiditate omnis ut iure aliquid obcaecati, repellendus nemo
                  provident eveniet tempora minus! Voluptates aut laboriosam,
                  maiores nihil accusantium, a dolorum quaerat tenetur illo eum
                  culpa cum laudantium sunt doloremque modi possimus magni?
                  Perferendis cum repudiandae corrupti porro.
                </p>
               
                </div>


              <div className="share">

                <div className="btn_wrap">
                  <span>Share</span>
                  <div className="container">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-github"></i>
                  </div>
                </div>

              </div>
              <div className="comments paragraphSingle">
                <h5 className="comment-title py-4">2 Comments</h5>


                <div className="comment d-flex mb-4">
                  <div className="flex-shrink-0">
                    <div className="avatar avatar-sm rounded-circle">
                      <img
                        src={Img}
                        alt=""
                        className="avatar-img"
                      />
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-2 ms-sm-3">
                    <div className="comment-meta d-flex align-items-baseline">
                      <h6 className="me-2">Jordan Singer</h6>
                      <span className="text-muted">2d</span>
                    </div>
                    <div className="comment-body">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Non minima ipsum at amet doloremque qui magni, placeat
                      deserunt pariatur itaque laudantium impedit aliquam
                      eligendi repellendus excepturi quibusdam nobis esse
                      accusantium.
                    </div>
                  </div>
                </div>
                <div className="comment d-flex">
                  <div className="flex-shrink-0">
                    <div className="avatar avatar-sm rounded-circle">
                      <img className="avatar-img" src={Img} alt="" />
                    </div>
                  </div>
                  <div className="flex-shrink-1 ms-2 ms-sm-3">
                    <div className="comment-meta d-flex">
                      <h6 className="me-2">Santiago Roberts</h6>
                      <span className="text-muted">4d</span>
                    </div>
                    <div className="comment-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iusto laborum in corrupti dolorum, quas delectus nobis
                      porro accusantium molestias sequi.
                    </div>
                  </div>
               
               
               
               
                </div>
              
              
              
              </div>


              

              <div className="row justify-content-center mt-5 ">
                <div className="col-lg-9 paragraphSingle">
                  <h5 className="comment-title">Leave a Comment</h5>
                  <div className="row">
                    <div className="col-lg-6 mb-3">
                      <label for="comment-name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="comment-name"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="col-lg-6 mb-3">
                      <label for="comment-email">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        id="comment-email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <label for="comment-message">Message</label>

                      <textarea
                        className="form-control"
                        id="comment-message"
                        placeholder="Enter your name"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <input
                        type="submit"
                        className="btn btn-primary"
                        value="Post comment"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
           
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

              {/* <div className="aside-block">
                <h3 className="aside-title">Video</h3>
                <div className="video-post">
                  <a
                    href="https://www.youtube.com/watch?v=AiFfDjmd0jU"
                    className="glightbox link-video"
                  >
                    <span className="bi-play-fill"></span>
                    <img src={Img} alt="" className="img-fluid" />
                  </a>
                </div>
              </div> */}

              <div className="aside-block">
                <h3 className="aside-title">Categories</h3>
                <ul className="aside-links list-unstyled">
                  <li>
                    <a href="">
                      <i className="fas fa-chevron-right"></i> Business
                    </a>
                  </li>
                  <li>
                    <a href="category.html">
                      <i className="fas fa-chevron-right"></i> Culture
                    </a>
                  </li>
                  <li>
                    <a href="category.html">
                      <i className="fas fa-chevron-right"></i> Sport
                    </a>
                  </li>
                  <li>
                    <a href="category.html">
                      <i className="fas fa-chevron-right"></i> Food
                    </a>
                  </li>
                  <li>
                    <a href="category.html">
                      <i className="fas fa-chevron-right"></i> Politics
                    </a>
                  </li>
                  <li>
                    <a href="category.html">
                      <i className="fas fa-chevron-right"></i> Celebrity
                    </a>
                  </li>
                  <li>
                    <a href="category.html">
                      <i className="fas fa-chevron-right"></i> Startups
                    </a>
                  </li>
                  <li>
                    <a href="category.html">
                      <i className="fas fa-chevron-right"></i> Travel
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
      <Footer/>
    </>
  );
}

export default SingleArticle;