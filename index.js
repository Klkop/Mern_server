const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const userApiFromRouter = require('./routes/userRouter');
const { ApolloServer } = require('apollo-server-express');

const app = express();
const port = 3001;
const url = 'mongodb+srv://123456:40448283@cluster0.6zz6kvz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your actual MongoDB connection URL and database name

// Middleware setup
app.use(cors());
app.use(express.json()); // Body parser middleware

// MongoDB connection
mongoose.connect(url)
  .then(() => {
    console.log('DB connected');
  })
  .catch((err) => {
    console.error('Error connecting to database:', err);
  });

// Apollo Server setup
const server = new ApolloServer({ typeDefs, resolvers });

// Apply GraphQL middleware
async function startServer() {
  try {
    await server.start();
    server.applyMiddleware({ app });

    // REST API route
    app.use('/users', userApiFromRouter);

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
      console.log(`GraphQL server ready at http://localhost:${port}${server.graphqlPath}`);
    });
  } catch (err) {
    console.error('Error starting server:', err);
  }
}

startServer();
