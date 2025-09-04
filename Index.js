const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "home.html"));
});

// about page
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "about.html"));
});

// start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
