import express from "express";
import employessRoutes from "./src/routes/employees.routes.js";
import indexRoutes from "./src/routes/index.routes.js";

const server = express();

//Settings
const port = process.env.PORT || 4000;

server.use(express.json());
server.use(employessRoutes);
server.use(indexRoutes)



server.listen(port, () => {
   console.log(`Server listening on port http://localhost:${port}`);
 });





//https://www.youtube.com/watch?v=3dSkc-DIM74&t=1360s 1:15:43