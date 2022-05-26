const express = require("express");
const Model = require("../models/videoModel");
const ffmpeg = require("ffmpeg");

const saveScreenshot = (videofile) => {
  new ffmpeg("../static/uploads/" + videofile).takeScreenshots(
    {
      count: 1,
      timemarks: ["10"], // number of seconds
    },
    "../static/uploads/",
    function (err) {
      console.log("screenshot was saved!!");
    }
  );
};

// create router
const router = express.Router();
router.get("/home", (req, res) => {
  console.log("a request at user home");
  res.send("you have found user Home");
});
router.post("/add", (req, res) => {
  const formdata = req.body;
  // saveScreenshot(formdata.file);
  // res.json({});
  // return;
  // console.log(req.body);
  new Model(formdata)
    .save()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getbyuser/:id", (req, res) => {
  console.log(req.params.id);

  Model.find({ uploadedBy: req.params.id })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});
router.get("/getbyid/:videoid", (req, res) => {
  console.log(req.params.videoid);
  Model.findById(req.params.videoid)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getall", (req, res) => {
  Model.find({})
    .then((data) => {
      console.log("data saved");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.post("/authenticate", (req, res) => {
  const formdata = req.body;

  Model.findOne({ email: formdata.email, password: formdata.password })
    .then((data) => {
      if (data) {
        console.log("login success");
        res.status(200).json(data);
      } else {
        console.log("login failed");
        res.status(400).json({ message: "failed" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;
