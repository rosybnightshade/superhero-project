const express = require("express");
const fs = require("fs").promises;
require("dotenv").config();

const { MongoClient } = require("mongodb");
const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@main-cluster.gwkuibj.mongodb.net/?retryWrites=true&w=majority&appName=Main-Cluster`;
let DB;
MongoClient.connect(MONGODB_URI)
  .then((client) => {
    console.log("connected to db");
    DB = client.db(`${process.env.MONGO_DB}`);
  })
  .catch((error) => console.error("Connection Error", error));

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.post("/heroes", async (req, res) => {
  try {
    const result = await db
      .collection(`${process.env.MONGO_COLLECTION}`)
      .insertOne(req.body);

    res.status(201).json({
      success: true,
      message: "hero added",
      redirectTo: "/heroes",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get("/heroes", async (req, res) => {
  try {
    const data = await db
      .collection(`${process.env.MONGO_COLLECTION}`)
      .find({})
      .toArray();
    if (req.accepts("html")) {
      res.render("NEW HEROS!!", { superheros: data });
    } else {
      res.json({
        success: true,
        count: data.length,
        data,
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});
app.listen(PORT);
