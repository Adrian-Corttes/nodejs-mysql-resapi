import { dbConnect } from "../../config/dbConnection.js";

// GET
export const getEmployees = async (req, res) => {
  try {
    const [rows] = await dbConnect.query("SELECT * FROM employee");
    res.json(rows);

  } catch (err) {
    return res.status(500).json({
      message: "Oooups... Error",
    })
  }

};

//GET * id
export const getEmployee = async (req, res) => {
  try {
    const [rows] = await dbConnect.query("SELECT * FROM employee WHERE id = ?", [
      req.params.id,
    ]);

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Employee not found",
      });

    res.json(rows[0]);

  } catch (err) {
    return res.status(500).json({
      message: "Oooups... Error",
    })
  }


};

//DELETE
export const deleteEmployees = async (req, res) => {
  try {
    const [result] = await dbConnect.query("DELETE FROM employee WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Employee not found",
      });

    res.sendStatus(204);

  } catch (err) {
    return res.status(500).json({
      message: "Oooups... Error",
    })
  }
};

// POST
export const createEmployees = async (req, res) => {
  try {
    const { name, salary } = req.body;
    const [rows] = await dbConnect.query(
      "INSERT INTO employee (name, salary) VALUES (?, ?)",
      [name, salary]
    );
    res.send({
      id: rows.insertId,
      name,
      salary,
    });

  } catch (err) {
    return res.status(500).json({
      message: "Oooups... Error",
    })
  }
};

//PUT
export const updateEmployees = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, salary } = req.body;

    const [result] = await dbConnect.query(
      "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
      [name, salary, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Employee not found",
      })
    }

    const [rows] = await dbConnect.query("SELECT * FROM employee WHERE id = ?", [id]);
    res.json(rows[0]);

  } catch (err) {
    return res.status(500).json({
      message: "Oooups... Error",
    })
  }
};
