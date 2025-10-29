//neste ponto nos importamos as bibliotecas para a aplicacao
//npm install express dotenv @supabase/supabase-js
import express from "express";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

//Configuracoes da aplicacao

//ele consegue capturar as variaveis de ambiente do arquivo .env
dotenv.config();

//configuracao do express
const app = express();
//configuracao da represetacao do tipo de arquivo que o servidor vai receber
app.use(express.json());

//configurar a conexao com o banco de dados
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

app.post("/pessoa", async (req, res) => {
    const { nome, idade, curso } = req.body;

    const { data, error } = await supabase
    .from("pessoas")
    .insert([{nome, idade, curso}]);

    if(error) return res.status(400).json({ message: "Erro ao inserir a pessoa"});

    res.status(200).json({ message: "Deu certo"});
});

app.get("/pessoa", async (req, res) => {
    const { data, error } = await supabase.from("pessoas").select("*");
    if(error) return res.status(400).json({ message: "Erro ao consultar as pessoas"});
    res.json(data);
});

app.listen(3000, () => {
    console.log("O servidor subiu na porta 3000");
});

//npm install express dotenv @supabase/supabase-js
//node server.json
//postman
//raw
//JSON
//localhost:3000/pessoa
