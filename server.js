const express = require("express");
const app = express();

// Static folder
app.use(express.static("public"));

app.listen(process.env.PORT || 3000);

app.use("/", require("./route/routeClient"));
app.use("/admin", require("./route/routeAdmin"));

module.exports = app;
