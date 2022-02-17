# Bem vindos ao Projeto TaskManager Ebyrt

Este projeto foi desenvolvido e destinado para uma vaga de emprego na empresa Ebyrt para demonstrar conhecimentos de programação e desenvolvimento web.

A proposta é desenvolver uma aplicação que armazena, organiza, deleta, recupera e atualiza tarefas em uma lista, de forma a criar uma organização e melhorar a produtividade dos colaboradores da empresa nas tarefas individuais.

---

## Sobre este repositório

Este repositório é da parte do backend do projeto, que trata do banco de dados e como as tarefas e informações são armazenadas de forma a garantir que não sejam perdidas após o computador ser desligado ou o navegador fechado.

Sendo assim, foram requisitos do projeto:

### . Requisitos técnicos:

1. Front-end em React (a desenvolver).
2. Back-end em NodeJS, com MongoDB (peço desculpas de antemão pois não me antentei a esse detalhe e fiz o projeto em mysql, porém tentarei migrar para MongoDB nos próximos dias.
3. Arquiteturas em camadas.

### . Funcionalidades:

1. Visualizar a lista de Tarefas, de forma que seja possível ser organizada por ordem alfabética, por data de criação ou por status.
2. Inserir uma nova tarefa na lista.
3. Remover uma nova tarefa da lista.
4. Atualizar uma tarefa da lista.
5. Os possíveis status que uma tarefa pode ter são: 'pendente', 'em andamento' ou 'pronto'.

## Como Instalar:

### Pré-requisitos:

1. MySql2 configurado (temporário)
2. NPM
3. gitHub

### Instalação

1. abra um terminal na pasta que deseja clonar o repositório (pode ser feito usando o botão direito do mouse).
2. copie os comando:
   . git clone https://github.com/pmaiamateus/Ebyrt-project.git
   . cd Ebyrt-project
   . npm install
   . touch .env
3. escreva as variaveis de ambiente da seguinte forma:
MYSQL_USER=*seu usuário do MySql ou Root*
MYSQL_PASSWORD=*Sua senha do MySql*
HOSTNAME='localhost'
(essas variáveis são para fazer um deploy futuro na aplicação)
4. inicie a aplicação com npm start

## Como utilizar:

A aplicação possui uma rota apenas ('/') para as tarefas, que funciona da seguinte forma:
* `/` `GET` retorna todas as tarefas já cadastradas no banco de dados;
* `/` `POST` armazena uma nova tarefa no banco de dados;
* `/` `PUT` atualiza uma tarefa (necessita de todos os dados da tarefa para que possa ser atualizada);
* `/` `DELETE` exclui uma tarefa do banco de dados;

## Como foi desenvolvido:

Como ainda não me sentia totalmente seguro em relação a testes, fiz as rotas e o banco de dados para depois fazer os testes, lapidando e melhorando as funções assim que os testes me mostravam que faltava alguma coisa ou que algo poderia ser melhor escrito.

No entanto, sinto que estou com um conhecimento melhor em relação a testes e que para projetos futuros já poderei começar a desenvolver na metodologia TDD, que consiste em fazer os testes primeiro e só depois desenvolver o código do projeto.

### Tecnologias:

Para este projeto, foram utilizados NodeJS com javascript e typescrypt e com o express para rodar a aplicação, e para os testes foram utilizados chai, frisby e a biblioteca shell.

### Banco de dados:

O banco de dados foi conforme a imagem do destino:

(./images/database schema.png)

### Cobertura de testes:

A cobertura de testes pode ser vista usando o comando npm run test no terminal na pasta da apliação, que dura cerca de 1 minuto (tempo gasto na minha máquina)

### Próximos passos:

. Consertar o banco de dados que está na linguagem errada;

. lapidar os testes, procurando mais branches de atuação das funções

. Programar o Front-end

. Fazer deploy da aplicação

### Contatos:

https://www.linkedin.com/in/pmaiamateus/

https://github.com/pmaiamateus

email: pmaiamateus@gmail.com

telefone: (11) 954563519
