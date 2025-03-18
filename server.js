require("dotenv").config();
const express = require("express");
const cors = require("cors");
const config = require("./config/config");
const urlRoutes = require("./routes/urlRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", urlRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, "127.0.0.1", () => console.log(`Servidor rodando na porta ${PORT}`));
