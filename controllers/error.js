exports.get404 = (req, res, next) => {
    res.status(404).render('user/404', {
      pageTitle: 'Page Not Found',
      path: '/404',
      userName : req.session.buyer ? req.session.buyer.email : ""
    });
  };
  