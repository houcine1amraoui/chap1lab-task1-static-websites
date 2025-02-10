const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

app.use("/css", express.static(path.resolve(__dirname, "pages", "css")));
app.use("/js", express.static(path.resolve(__dirname, "pages", "js")));

//
app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "pages", "index.html"));
});

app.get("/about", function (req, res) {
  res.sendFile(path.resolve(__dirname, "pages", "about.html"));
});

app.get("/test", function (req, res) {
  res.sendFile(path.resolve(__dirname, "pages", "test.html"));
});

const PORT = 1000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
