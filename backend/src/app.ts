import express from "express";
import router from "./routes";
import cors from 'cors'
import morgan from 'morgan'

const app = express();

app.use(cors());
app.use(express.json());

app.use(morgan("dev")); 

app.use("/api", router);

export default app;
