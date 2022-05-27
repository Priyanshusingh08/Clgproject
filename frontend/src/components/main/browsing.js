import { Search } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, InputAdornment, TextField, Typography } from "@mui/material";
import React from "react";
import "./browsing.css";

const Browsing = () => {
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
  <div class="row ">
    <div class="col-sm">
    <Card sx={{ maxWidth: 345 }} className="rounded">
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?b=1&k=20&m=922745190&s=170667a&w=0&h=0lBPWualF5SE8Khy1uRoGOcMZry55ZiUUWvPUPIZ3H0="
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Blog
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    <div class="col-sm">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://ohsheblogs.com/wp-content/uploads/2016/01/free-stock-images-pexels.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Automate
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    <div class="col-sm ">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://media.istockphoto.com/photos/blogging-woman-reading-blog-picture-id887987150?k=20&m=887987150&s=612x612&w=0&h=vCVYGvEkLb3DuCL7DOSoNm8i78Lci4oCt7XD4HGasIg="
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Blogging
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  </div>
</div>


     



    </div>



  );
};

export default Browsing;
