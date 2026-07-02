import express from "express";
import indexRoutes  from "./routes/index.routes.js";
import router from "./routes/auth.routes.js";

const app = express();
app.use(express.json());

app.use("/",indexRoutes);

app.use("/api/auth",router);

export default app;
