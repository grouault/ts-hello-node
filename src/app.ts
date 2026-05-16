import express, { Request, Response } from "express";
import os from "os";

const app = express();
const PORT: number = parseInt(process.env.PORT || "3000");
const ENV: string = process.env.ENV_VALUE || "No env set";
const HOSTNAME: string = process.env.HOSTNAME || os.hostname();

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello from Simple App (Nodes)",
    env: ENV,
    container: HOSTNAME
  });
});

app.listen(PORT, () => console.log(`Node Hello listening on ${PORT}`));
