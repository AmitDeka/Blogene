const express = require("express");
const app = express();

// Static folder
app.use(express.static("public"));

app.use("/", require("./route/routeClient"));
app.use("/admin", require("./route/routeAdmin"));

app.listen(process.env.PORT || 3000);
module.exports = app;
