import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors = require("cors");
import db from "./models/index";
import path = require("path");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.use(cors());

db.sequelize.sync({ force: false, alter: false });

app.use(express.static(path.join(__dirname, 'public')));

app.use(`/api/v${process.env.API_VER}/post`, require("./routes/post"));

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
