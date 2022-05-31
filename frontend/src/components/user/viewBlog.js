import { InputAdornment } from "@mui/material";
import MDEditor from "@uiw/react-md-editor";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import app_config from "../../config";

const ViewBlog = () => {
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = app_config.backend_url;
  const { blogid } = useParams();

  const fetchData = () => {
    fetch(url + "/blog/getbyid/" + blogid).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setBlogData(data);
          setLoading(false);
        });
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showBlog = () => {
    if (!loading) {
      return (
        <section className="container">
          <div className="card mt-5">
            <div className="card-body">
              <img
                src={url + "/uploads/" + blogData.thumbnail}
                className="w-100"
                alt=""
                aria-controls="#picker-editor"
              />
              <h1 className="mt-5">{blogData.title}</h1>
              <hr />
              <div data-color-mode="light">
                <MDEditor.Markdown source={blogData.data} />
              </div>
            </div>
          </div>
        </section>
      );
    }
  };

  return (
    <div>
      <section class="section home-5-bg" id="home">
        <div
          id="particles-js"
          style={{
            backgroundImage: `url("https://marketingaccesspass.com/wp-content/uploads/2015/10/Podcast-Website-Design-Background-Image.jpg")`,
          }}
        ></div>
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
                    <div class="mt-5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showBlog()}
    </div>
  );
};

export default ViewBlog;
