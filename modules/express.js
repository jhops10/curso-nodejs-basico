const express = require('express');
const UserModel = require('../src/models/user.model');

const app = express();
app.use(express.json());
const port = 3010;

app.get('/users', async (require, response) => {
  try {
    const users = await UserModel.find({});
    response.status(200).json(users);
  } catch (error) {
    response.status(500).send(error.message);
  }
});

app.get('/users/:id', async (require, response) => {
  try {
    const id = require.params.id;
    const user = await UserModel.findById(id);
    return response.status(200).json(user);
  } catch (error) {
    return console.log(error.message);
  }
});

app.post('/users', async (require, response) => {
  try {
    const user = await UserModel.create(require.body);
    response.status(201).json(user);
  } catch (error) {
    response.status(500).send(error.message);
  }
});

app.patch('/users/:id', async (require, response) => {
  try {
    const id = require.params.id;
    const user = await UserModel.findByIdAndUpdate(id, require.body, {
      new: true,
    });

    return response.status(200).json(user);
  } catch (error) {
    response.status(500).send(error.message);
  }
});

app.delete('/users/:id', async (require, response) => {
  try {
    const id = require.params.id;
    const user = await UserModel.findByIdAndRemove(id);
    response.status(200).json(user);
  } catch (error) {
    response.status(500).send(error.message);
  }
});

app.listen(port, () => console.log(`Rodando com Express na porta ${port}`));
