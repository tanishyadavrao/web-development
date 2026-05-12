import express from "express";
import mongoose from "mongoose";
import { Data } from "./models/data.js";

const app = express();
const PORT = 3000;
app.set("view engine", "ejs");

let a = await mongoose.connect("mongodb://localhost:27017/dummydata");

function generatename() {
  const names = ["charles", "harry", "roy", "william"];
  const dummyname = names[Math.floor(Math.random() * names.length)];
  return `${dummyname}`;
}
function salary() {
  const salary = Math.ceil(Math.random() * 10);
  return `${salary}cr`;
}
function language() {
  const languages = ["c", "python", "java", "c++"];
  const dummylanguage = languages[Math.floor(Math.random() * languages.length)];
  return `${dummylanguage}`;
}
function managerDecision() {
  if (Math.random() < 0.5) {
    return "Yes";
  } else {
    return "No";
  }
}
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/generate", (req, res) => {
  const data = new Data({
    name: generatename(),
    salary: salary(),
    language: language(),
    isManager: managerDecision(),
  });
  data.save();
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
