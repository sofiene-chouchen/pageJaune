const express = require("express");

const app = express();
var categorie = require("./routes/Categorie");
var job = require("./routes/Job");

app.use("/api/categorie", categorie);
app.use("/api/job", job);

app.listen(process.env.PORT, () => {
  console.log(`serveur run in port ${process.env.PORT}`);
});
