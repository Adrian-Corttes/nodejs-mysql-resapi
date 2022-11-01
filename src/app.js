import express from "express";
import employessRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

const server = express();
server.use(express.json());


server.use('/api', employessRoutes);
server.use('/api', indexRoutes)

server.use((req, res, next) => {
  res.status(404).json({
    message: "Oooups... Not Found.",
  })
})


export default server;
