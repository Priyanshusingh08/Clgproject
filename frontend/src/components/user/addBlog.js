import { Button, IconButton, TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { InputAdornment } from "@mui/material";
import { Formik } from "formik";
import MDEditor from "@uiw/react-md-editor";
import "./addBlog.css";
import {
  ArrowBack,
  Close,
  EmailRounded,
  Google,
  Lock,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import app_config from "../../config";

const AddBlog = () => {
  const url = app_config.backend_url;

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [transcription, setTranscription] = useState(
    JSON.parse(sessionStorage.getItem("transcription"))
  );

  const blogForm = {
    title: "",
    description: "",

    data: {},
    thumbnail: {},
    author: currentUser._id,
  };
  const [blogData, setBlogData] = useState(transcription.text);

  const [thumbnail, setThumbnail] = useState("");

  const uploadThumbnail = (e) => {
    let formdata = new FormData();
    let file = e.target.files[0];
    setThumbnail(file.name);
    formdata.append("myfile", file);

    fetch(url + "/util/uploadfile", { method: "POST", body: formdata })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const blogSubmit = (formdata) => {
    formdata.thumbnail = thumbnail;
    formdata.data = blogData;
    console.log(formdata);

    const reqOpt = {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url + "/blog/add", reqOpt)
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((data) => {
        console.log(data);

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Blog posted successfully",
        });
      });
  };

  return (
    <div>
      <div className="blog-body">
        <div className="blog-header" style={{background:"linear-gradient(90deg, rgba(36,0,0,1) 0%, rgba(37,9,121,1) 52%, rgba(177,20,0,1) 100%)"}}></div>
        <div className="container">
          <div className="card post-card mb-4">
            <div className="card-body">
              <h4 className="text-center mt-2 mb-4">Add New Blog</h4>
              <div className="back-btn">
                <Button>
                  <NavLink to="/home">
                    <Close />
                  </NavLink>
                </Button>
              </div>
              <Formik initialValues={blogForm} onSubmit={blogSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      className="w-100 mb-2"
                      id="title"
                      label="Title"
                      multiline
                      rows={1}
                      onChange={handleChange}
                      value={values.title}
                    />
                    <br />
                    <TextField
                      className="w-100 mb-2"
                      id="description"
                      label="Description"
                      multiline
                      rows={4}
                      onChange={handleChange}
                      value={values.description}
                    />
                    <br />
                    {/* <TextField
                      className="w-100 mb-2"
                      id="tags"
                      label="Tags"
                      multiline
                      rows={1}
                      onChange={handleChange}
                      value={values.tags}
                    />

                    <br /> */}

                    <input
                      className="form-control mb-2"
                      id="thumbnail"
                      type="file"
                      onChange={uploadThumbnail}
                    />

                    <div className="text-center">
                      {/* MD editor for inserting blogs */}

                      <MDEditor value={blogData} onChange={setBlogData} />
                      <Button
                        className="mt-2 w-100"
                        type="submit"
                        variant="contained"
                      >
                        Post
                      </Button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddBlog;
