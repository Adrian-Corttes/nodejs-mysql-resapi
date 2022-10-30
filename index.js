import express from "express";
import employessRoutes from "./src/routes/employees.routes.js";
import indexRoutes from "./src/routes/index.routes.js";
import './src/config.js'

const server = express();
server.use(express.json());

//Settings
const port = process.env.PORT || 3000;

server.use('/api', employessRoutes);
server.use('/api', indexRoutes)

server.use((req, res, next) => {
  res.status(404).json({
    message: "Oooups... Not Found.",
  })
})




server.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});

