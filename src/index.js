const express = require("express");
const app = express();
const port = 8080;
const formModel = require("../model/formModel");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

mongoose.connect("mongodb://localhost:27017/myapp", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.post("/card", async (req, res) => {
  const newCard = req.body;
  console.log(newCard);
  const newForm = new formModel(newCard);
  await newForm.save();
  res.send(newForm);
});

app.get("/card", async (req, res) => {
  const cards = await formModel.find();
  res.send(cards);
});

app.listen(port, () => console.log("app running"));
