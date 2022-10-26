import { Router } from "express";
import {
  getEmployees,
  getEmployee,
  createEmployees,
  updateEmployees,
  deleteEmployees,
} from "../controllers/employees.controller.js";

const router = Router();

// GET
router.get("/employees", getEmployees);
router.get("/employees/:id", getEmployee);


router.post("/employess", createEmployees);

router.put("/employess", updateEmployees);

//DELETE
router.delete("/employess/:id", deleteEmployees);

export default router;
