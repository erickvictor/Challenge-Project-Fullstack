const homeController = {
  indexView(req, res, next) {
    return res.render('home');
  }
};

module.exports = homeController;
