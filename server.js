const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>AidLoans is working!</h1>");
});

app.listen(process.env.PORT || 3000);
