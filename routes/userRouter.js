const express = require('express');
const router = express.Router();
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('../schema');
const resolvers = require('../resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

// Correct middleware integration after awaiting server start
async function setupApolloServer() {
  await server.start(); // Await server start

  // Integrate Apollo Server middleware with Express router
  router.use(server.getMiddleware());

  // Define your routes here
  // GET /users
  router.get('/', async (req, res) => {
    try {
      const { data, errors } = await server.executeOperation({
        query: gql`
          query {
            getUsers {
              id
              name
              email
              password
            }
          }
        `,
      });

      if (errors) {
        console.error(errors);
        return res.status(500).send(errors);
      }

      res.status(200).send(data.getUsers);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  });

  // POST /users
  router.post('/', async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const { data, errors } = await server.executeOperation({
        query: gql`
          mutation {
            createUser(input: { name: "${name}", email: "${email}", password: "${password}" }) {
              name
              email
            }
          }
        `,
      });

      if (errors) {
        console.error(errors);
        return res.status(500).send(errors);
      }

      res.status(201).send(data.createUser);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  });

  // PUT /users/changepass/:id
  router.put('/changepass/:id', async (req, res) => {
    const id = req.params.id;
    const { password } = req.body;

    try {
      const { data, errors } = await server.executeOperation({
        query: gql`
          mutation {
            changePassword(id: "${id}", password: "${password}") {
              id
              name
              password
            }
          }
        `,
      });

      if (errors) {
        console.error(errors);
        return res.status(500).send(errors);
      }

      res.status(200).send(data.changePassword);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  });
}

// Call the setup function to set up Apollo Server middleware with Express
setupApolloServer();

module.exports = router;
