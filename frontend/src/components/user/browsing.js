import { Search } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./browsing.css";
import TimeAgo from "javascript-time-ago";
import app_config from "../../config";
import { useNavigate } from "react-router-dom";

const Browsing = () => {
  const timeAgo = new TimeAgo("en-US");
  const url = app_config.backend_url;
  const [selFile, setSelFile] = useState("");

  const [blogArray, setBlogArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const navigate = useNavigate();

  const fetchVideos = () => {
    fetch(url + "/blog/getall/").then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setLoading(false);
          setBlogArray(data);
        });
      }
    });
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const displayBlogs = () => {
    return (
      <div className="row">
        {blogArray.map(
          ({ _id, title, description, thumbnail, author, createdAt }) => (
            <div class="col-sm">
              <Card   sx={{ width: 300 }} className="rounded">
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={url + "/uploads/" + thumbnail}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={(e) => navigate("/user/viewblog/:blogid")}>View</Button>
                </CardActions>
              </Card>
            </div>
          )
        )}
      </div>
    );
  };

  return (
    <div>
      <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
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
                      A Clean &amp; Minimal Landing Template
                    </h1>
                    <p class="text-white-70 mt-4 f-15 mb-0">
                      Ut enim ad minima veniam quis nostrum exercitationem ullam
                      corporis at suscipit laboriosam nisi ut aliquid a commodi
                      consequatur Quis autem.
                    </p>
                    <div class="mt-5">
                      <div className="input-group mt-5">
                        <input
                          className="form-control"
                          label="Search Here"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Search
                                  sx={{
                                    color: "active.active",
                                    mr: 1,
                                    my: 0.5,
                                  }}
                                />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <button className="btn btn-danger" type="submit">
                          Search
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

      <div class="container my-5">
        <div class="row ">{displayBlogs()}</div>
      </div>
    </div>
  );
};

export default Browsing;
