const express = require("express");
const userRouter = require("./routers/userRouter");
const utilRouter = require("./routers/util");
const cors = require("cors");
const videoRouter = require("./routers/videoRouter");
const blogRouter = require("./routers/blogRouter");

const app = express();
const port = 5000;

app.use(cors({ origin: ["http://localhost:3000"] }));
app.use(express.json());
app.use(express.static("./static"));
app.use("/user", userRouter);
app.use("/util", utilRouter);
app.use("/video", videoRouter);
app.use("/blog", blogRouter);

app.listen(port, () => {
  console.log("server started");
});
