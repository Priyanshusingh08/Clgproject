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
import TimeAgo from "javascript-time-ago";
import app_config from "../../config";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const ManageBlog = () => {
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

  const deleteData = (id) => {
    fetch(url + "/blog/delete/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetchVideos();
        toast.success("News Successfully Deleted!!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        Swal.fire({
          icon: "success",
          title: "Success!!",
          text: "Deleted",
        });
      });
  };

  const displayBlogs = () => {
    return (
      <div className="row">
        {blogArray.map(
          ({ _id, title, description, thumbnail, author, createdAt }) => (
            <div class="col-sm">
              <Card sx={{ maxWidth: 345 }} className="rounded">
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
                  <button
                  className="btn btn-dark mt-4 "
                  onClick={(e) => deleteData(_id)}
                >
                  Remove
                </button>
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
      {displayBlogs}


</div>
      

      
  );
};

export default ManageBlog;
