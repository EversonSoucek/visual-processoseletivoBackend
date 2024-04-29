# Front-end Processo Seletivo Visual Software

<div style:>
    <img src="https://img.shields.io/badge/Status-Completo-brightgreen">
    <img src='https://img.shields.io/github/languages/top/EversonSoucek/visual-processoseletivoBackend'>
    <img src='https://img.shields.io/github/languages/code-size/EversonSoucek/visual-processoseletivoBackend'>
</div>

Este é o back-end do projetpo, feito endpoints de get,post,pute delete com uma conexão ao banco mysql

## :hammer: Funcionalidade do projeto

Api com funcionalidades para um crud.

## :wrench: Técnicas e tecnologias utilizadas

- 🚄 `ExpressJs`
- 🟢 `NodeJs`


## :file_folder: Acesso ao projeto

Primeira opção:
Você pode acessa o projeto e baixar ele pelo <a href="https://github.com/EversonSoucek/visual-processoseletivoFrontEnd">Github</a>

E pode criar o banco com essa query:
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` text NOT NULL,
  `cpf` varchar(14) DEFAULT NULL,
  `email` text NOT NULL,
  `numero` bigint unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23;

Segunda opção:
Pode a acessar o projeto em <a href="https://visual-processoseletivo.vercel.app/">Projeto</a>
Com as informações do banco em <a href="https://processo-seletivo-backend-9ae3435cd654.herokuapp.com/">Link</a>

## :computer: Rodar o projeto

#### Localmente
Com o banco criado abra o projeto e execute `npm i` para instalar as dependências e `npm start` para inicar o projeto

Com isso o seu servidor vai estar rodando, acesse <a href="http://localhost:3500/">http://localhost:3500/</a> no seu navegador caso queira ver os dados locais

#### Servidor
Para ver os dados do servidor vá para <a href="https://processo-seletivo-backend-9ae3435cd654.herokuapp.com/">Link</a>

O projeto completo está em <a href="https://visual-processoseletivo.vercel.app/">Projeto</a>

## :pencil: Autores

<img src='https://avatars.githubusercontent.com/u/105561519?v=4' width=115><br><sub>Everson Adolfo Soucek Junior</sub>(https://github.com/EversonSoucek)