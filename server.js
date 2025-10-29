//neste ponto nos importamos as bibliotecas para a aplicacao
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

app.post("/pessoa", (req, res) => {

    res.status(200).json({ message: "Deu certo"});
});

app.listen(3000, () => {
    console.log("O servidor subiu na porta 3000");
});