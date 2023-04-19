const path = require("path");

const websiteSetup = async (req, res) => {
  res.sendFile(path.join(__dirname, "../", "admin", "index.html"));
};

module.exports = {
  websiteSetup,
};
