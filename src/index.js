import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { database} from "./config/db.js";

const PORT = process.env.PORT || 8080;

// Connect to DB first
database();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
