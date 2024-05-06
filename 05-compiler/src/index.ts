import express from "express";

import router from "./router/index.js";

const app = express();

app.use("/", router);

app.listen(3000);

console.log("Server running on http://localhost:3000");
