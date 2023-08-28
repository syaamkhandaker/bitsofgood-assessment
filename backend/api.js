import express from "express";
import { database } from "./database.js";
import cors from "cors";

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/api/bog/users", (req, res) => {
  res.json(database).status(200);
});

app.get("/api/bog/users/:id", (req, res) => {
  const user = database.filter((user) => user.id === req.params.id)[0];
  res.json(user).status(200);
});

app.delete("/api/bog/users/:id", (req, res) => {
  const id = req?.params.id;
  if (!id) {
    return res
      .status(400)
      .json({ success: false, message: "Given ID doesn't exist!" });
  }
  const user = database.splice(
    database.findIndex((user) => user.id === id),
    1
  );
  res.json(user).status(200);
});

app.put("/api/bog/users/:id", (req, res) => {
  const id = req?.params.id;
  const { name, avatar, hero_project, notes, email, phone, rating, status } =
    req?.query;

  if (
    !id ||
    !name ||
    !avatar ||
    !hero_project ||
    !notes ||
    !email ||
    !phone ||
    !rating ||
    !status
  ) {
    return res.status(400).json({
      success: false,
      message: "Please verify you provided the proper parameters",
    });
  }
  database.map((user) => {
    if (user.id === id) {
      user.name = name;
      user.avatar = avatar;
      user.hero_project = hero_project;
      user.notes = notes;
      user.email = email;
      user.phone = phone;
      user.rating = rating;
      user.status = status;
    }
  });

  res.status(200);
});

app.post("/api/bog/users/:id", (req, res) => {
  const id = req?.params.id;
  const { name, avatar, hero_project, notes, email, phone, rating, status } =
    req?.query;
  console.log(id);
  if (
    !id ||
    !name ||
    !avatar ||
    !hero_project ||
    !email ||
    !phone ||
    !rating ||
    !status
  ) {
    return res.status(400).json({
      success: false,
      message: "Please verify you provided the proper parameters",
    });
  }
  const newEntry = {
    id,
    name,
    avatar,
    hero_project,
    notes,
    email,
    phone,
    rating,
    status,
  };
  database.push(newEntry);
  res.json(newEntry).status(200);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
