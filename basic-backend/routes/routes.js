const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const dataController = require('../controllers/dataController');
const greetController = require('../controllers/greetController');

const routes = (req, res) => {
  const path = req.url.split('?')[0];

  if (path === '/') homeController(req, res);
  else if (path === '/about') aboutController(req, res);
  else if (path === '/data') dataController(req, res);
  else if (path === '/greet') greetController(req, res);
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
};

module.exports = routes;