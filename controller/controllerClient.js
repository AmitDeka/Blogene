const path = require("path");

const viewHome = async (req, res) => {
  res.sendFile(path.join(__dirname, "../", "client", "index.html"));
};

module.exports = {
  viewHome,
};
