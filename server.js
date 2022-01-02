const express = require("express");
const db = require("./db");
const jobRouter = require("./routes/jobRouter");
const userRouter = require("./routes/userRouter");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/jobs", jobRouter);
app.use("/api/users", userRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });
}

app.listen(PORT, () => console.log("Server started on port: " + PORT));
