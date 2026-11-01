const greetController = (req, res) => {
  const queryString = req.url.split('?')[1] || '';
  const params = new URLSearchParams(queryString);
  const name = params.get('name') || 'World';

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello, ${name}!`);
};

module.exports = greetController;