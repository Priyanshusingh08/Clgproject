const multer = require("multer");
const router = require("express").Router();
const { Deepgram } = require("@deepgram/sdk");
const deepgram = new Deepgram("b9f5586026e57cb72031058c00333941b2ff54e8");
const fs = require("fs");
const videoModel = require("../models/videoModel");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./static/uploads");
  },
  filename: (req, file, cb) => {
    const datetime =
      new Date().toLocaleDateString() + "_" + new Date().toLocaleTimeString();
    cb(null, file.originalname);
  },
});

const myStorage = multer({ storage: storage });

router.post("/uploadfile", myStorage.single("myfile"), (req, res) => {
  res.status(200).json({ status: "success" });
});

async function transcriber(audioSource, cb) {
  const response = await deepgram.transcription.preRecorded(audioSource, {
    punctuate: true,
  });

  const { transcript, confidence, words } =
    response.results.channels[0].alternatives[0];
  console.log(transcript);
  cb({ transcript, confidence, words });
}

router.get("/transcribe/:videoid", (req, res) => {
  videoModel
    .findById(req.params.videoid)
    .then((data) => {
      if (data.transcription) {
        console.log("trascript exists");
        res.status(200).json(data);
      } else {
        // console.log('trascript doesnt exists');
        console.log("transcribing " + data.file + " ...");
        const audioSource = {
          stream: fs.createReadStream("./static/uploads/" + data.file),
          mimetype: "video/mp4",
        };
        transcriber(audioSource, ({ transcript, confidence, words }) => {
          videoModel
            .findByIdAndUpdate(
              req.params.videoid,
              { transcription: { ...{ text: transcript }, confidence, words } },
              { new: true }
            )
            .then((updatedata) => {
              console.log(updatedata);
              res.status(200).json(updatedata);
            })
            .catch((err) => {
              console.error(err);
            });
        });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;
