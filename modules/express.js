const express = require('express');

const app = express();
const port = 3010;

app.get('/home', (require, response) => {
  response.contentType('application/html');
  response.status(200).send('<h1>Hello World</h1>');
});

app.get('/users', (require, response) => {
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
  response.status(200).json(users);
});

app.listen(port, () => console.log(`Rodando com Express na porta ${port}`));
