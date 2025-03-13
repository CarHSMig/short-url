require("dotenv").config();
const express = require("express");
const cors = require("cors");
const config = require("./config/config");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API funcionando!");
});

const PORT = config.server.port;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
