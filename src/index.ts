import * as dotenv from "dotenv";
import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";

import employeesRoutes from "./employees/employees.routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Configuration
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/employees", employeesRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
