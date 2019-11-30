const home = (req, res) => {
  return res.render("pages/index", { title: "ZaruArquitectura" });
};

module.exports = {
  home
};