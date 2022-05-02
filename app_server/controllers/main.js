const home = (req, res) => {
  return res.render("pages/index", {
    title: "ZaruArquitectura",
    route: "/",
  });
};

const aboutUs = (req, res) => {
  return res.render("pages/about", {
    title: "Sobre nosotros",
    route: "/aboutus",
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
  aboutUs,
  contactUs,
};
