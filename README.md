# ping-website-backend

## Node/Express

The application is based on a Node/Express-CLI generated project. It's responsible for storing, querying and removing data. The application also contains various libraries to simplify the URL validation/query process.

### App.js

- Configures the server, declares routes and connects to the database.

### Middleware

- The health check and ping middleware files store the request functions. Each route has an associated middleware function.
- Querying and storing data occurs directly within the middleware functions. Calls are made to service functions for more complicated workflows.

### Services

- Contains the functionality for validating URLs, pinging websites, and creating the icon path.

### Routing

- Configures the routes and their associated middleware.

### Schema

- Configures the ping schema and validation for each value (via Mongoose).

### Hosted App

Accessible [here](https://ping-website-backend-08265.herokuapp.com/healthcheck).