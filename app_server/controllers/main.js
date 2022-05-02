const home = (req, res) => {
  return res.render("pages/index", { title: "ZaruArquitectura" });
};

const contactUs = (req, res) => {
  return res.render("pages/contact_us", { title: "Contáctanos" });
};

module.exports = {
  home,
  contactUs,
};
