const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, CI/CD with Jenkins & Docker on MacBook M2!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});