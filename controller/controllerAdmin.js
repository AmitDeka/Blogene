const websiteSetup = async (req, res) => {
  //   try {
  //     var settings = await websiteSetting.find({});
  //     if (settings.length > 0) {
  //       res.redirect("/admin/login");
  //     } else {
  //       res.render("admin/website-setup", { title: "Setup" });
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  //   res.sendFile("admin/index.html", { title: "Setup" });
  res.sendFile("/admin/index.html", { root: "." });
};

module.exports = {
  websiteSetup,
};
