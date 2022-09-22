const express = require("express");
const cors = require("cors");
const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1480025",
  key: "26024643fc875d87c23d",
  secret: "37bbb8420edf021e0c02",
  cluster: "mt1",
  encrypted: true,
});

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:8080",
      "http://localhost:4200",
    ],
  })
);

app.use(express.json());

app.post("/api/message", async (req, res) => {
  await pusher.trigger("chat", "message", {
    latitud: req.body.message,
    longitud: req.body.message,
  });
  res.json([]);
});

console.log("Server is running on port 8000");
app.listen(8000);
