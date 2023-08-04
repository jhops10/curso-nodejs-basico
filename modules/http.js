const http = require('http');

const port = 3000;

const server = http.createServer((request, response) => {
  if (request.url === '/home') {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>Home Page</h1>');
  }

  if (request.url === '/users') {
    const users = [
      {
        name: 'João',
        email: 'joaowais@gmail.com',
      },
      {
        name: 'Julio',
        email: 'julio@gmail.com',
      },
    ];
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`Rodando na porta ${port}`));
