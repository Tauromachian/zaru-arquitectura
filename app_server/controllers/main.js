const home = (req, res) => {
  return res.render("pages/index", {
    title: "ZaruArquitectura",
    route: "/",
  });
};

const contactUs = (req, res) => {
  return res.render("pages/contact_us", {
    title: "Contáctanos",
    route: "/contactanos",
  });
};

module.exports = {
  home,
  contactUs,
};
