import { InputAdornment } from '@mui/material';
import React from 'react'

const ViewBlog = () => {
  return (
    <div>
        <section class="section home-5-bg" id="home">
        <div id="particles-js"></div>
        <div class="bg-overlay"></div>
        <div class="home-center">
          <div class="home-desc-center">
            <div class="container">
              <div class="justify-content-center row">
                <div class="col-lg-7">
                  <div class="mt-40 text-center home-5-content">
                    <div class="home-icon mb-4">
                      <i class="mdi mdi-pinwheel mdi-spin text-white h1"></i>
                    </div>
                    <h1 class="text-white font-weight-normal home-5-title mb-0">
                      Blog Editing
                    </h1>
                    <p class="text-white-70 mt-4 f-15 mb-0">
                      Ut enim ad minima veniam quis nostrum exercitationem ullam
                      corporis at suscipit laboriosam nisi ut aliquid a commodi
                      consequatur Quis autem.
                    </p>
                    <div class="mt-5">
                     
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
            draggable="false"
            className="container pt-5"
            data-v-271253ee=""
          >
            <section className="mb-5">
              <h2 className="fw-bold mb-5 text-center">Latest Blog</h2>
              <div className="row gx-lg-5 mb-5 align-items-center">
                <div className="col-md-6 mb-4 mb-md-0">
                  <img
                    src="https://st2.depositphotos.com/4107269/7635/i/600/depositphotos_76358181-stock-photo-messy-workspace-of-freelancer-concept.jpg"
                    className="w-100 shadow-4-strong rounded-4 mb-4"
                    alt=""
                    aria-controls="#picker-editor"
                  />
                </div>
                <div className="col-md-6 mb-4 mb-md-0">
                  <h3 className="fw-bold">Art</h3>
                  <div className="mb-2 text-danger small">
                    <i
                      className="fas fa-money-bill me-2"
                      aria-controls="#picker-editor"
                    ></i>
                    <span>Business</span>
                  </div>
                  <p className="text-muted">
                    Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                    placerat vulputate. Ut vulputate est non quam dignissim
                    elementum. Donec a ullamcorper diam.
                  </p>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    quae nulla saepe rerum aspernatur odio amet perferendis
                    tempora mollitia? Ratione unde magni omnis quaerat
                    blanditiis cumque dolore placeat rem dignissimos?
                  </p>
                  <a
                    className="btn btn-primary"
                    href="#"
                    role="button"
                    aria-controls="#picker-editor"
                  >
                    Read more
                  </a>
                </div>
              </div>
             
            </section>
          </section>
      
    </div>
  )
}

export default ViewBlog;
