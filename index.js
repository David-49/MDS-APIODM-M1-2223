import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { getFilms, getOneFilm } from "./controller/film.js";
import {
  getPeoples,
  getOnePeople,
  updateOnePeople,
} from "./controller/people.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/people", getPeoples);
app.get("/people/:id", getOnePeople);
app.put("/people/:id", updateOnePeople);

app.get("/films", getFilms);
app.get("/films/:id", getOneFilm);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
