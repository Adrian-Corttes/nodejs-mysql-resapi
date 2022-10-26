import { dbConnect } from "../../config/dbConnection.js";

export const ping = async (req, res) => {
  const [result] = await dbConnect.query("SELECT 'Pong' AS result");
  res.json(result[0]);
};
