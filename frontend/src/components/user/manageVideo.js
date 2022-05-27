import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import app_config from "../../config";
import TimeAgo from "javascript-time-ago";

const ManageVideo = () => {
  const timeAgo = new TimeAgo("en-US");
  const url = app_config.backend_url;
  const [selFile, setSelFile] = useState("");

  const [videoArray, setVideoArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const videoform = {
    title: "",
    file: "",
    uploadedby: currentUser._id,
    createdAt: new Date(),
  };

  const fetchVideos = () => {
    fetch(url + "/video/getbyuser/" + currentUser._id).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setLoading(false);
          setVideoArray(data);
        });
      }
    });
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const videoSubmit = (formdata) => {
    formdata.file = selFile;
    console.log(formdata);

    fetch(url + "/video/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Video Uploaded",
        });
        fetchVideos();
      }
    });
  };

  const uploadFile = (e) => {
    const file = e.target.files[0];

    const fd = new FormData();
    fd.append("myfile", file);

    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        setSelFile(file.name);

        Swal.fire({
          icon: "success",
          title: "Success!!",
          text: "Successfully loggedin",
        });
      }
    });
  };

  const addVideo = () => {
    return (
      <div className="card">
        <div className="card-header">
          <h3 className="mb-0">Add New Video</h3>
        </div>
        <div className="card-body">
          <Formik initialValues={videoform} onSubmit={videoSubmit}>
            {({ values, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <TextField
                      className="w-100 mb-4"
                      label="Title"
                      variant="filled"
                      id="title"
                      value={values.title}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      className="form-control w-100 mb-4"
                      type="file"
                      onChange={uploadFile}
                    />
                  </div>
                  <div className="col-md-2">
                    <Button
                      type="submit"
                      variant="contained"
                      className="w-100"
                      color="error"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    );
  };

  const transcribe = (videoid) => {
    fetch(url + "/util/transcribe/" + videoid).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
        });
      }
    });
  };

  const manageVideo = () => {
    return (
      <div className="row">
        {videoArray.map(({ _id, title, file, thumbnail, createdAt }) => (
          <div className="col-md-3">
            <div className="card">
              <div
                style={{
                  height: "20rem",
                  // background: "url(" + url + "/uploads/" + file + ")",
                  background:
                    "url(https://thumbs.dreamstime.com/b/print-164210362.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="card-body">
                <h3 className="my-0">{title}</h3>
                <p className="my-0 text-muted">
                  {timeAgo.format(new Date(createdAt))}
                </p>
                <button
                  className="btn btn-danger mt-4"
                  onClick={(e) => transcribe(_id)}
                >
                  Transcribe
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="addvideo-back">
      <div className="container">
        {addVideo()}
        <div className="mt-5">
          <h2 className="mb-0">Manage Videos</h2>
          <hr />
          {manageVideo()}
        </div>
      </div>
    </div>
  );
};

export default ManageVideo;
