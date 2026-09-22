const express = require("express");
const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        nome: "Cílios",
        categoria:"Volume Brasileiro",
        preco: 130.00,
       imagem: ""
    });
});
app.use(express.static("../frontend"));
app.listen(3000, () => {
    console.log("Servidor funcionando na porta 3000");
});