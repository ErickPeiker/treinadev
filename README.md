# Sejam bem vindos ao curso básico para PROJETOS TESUDOS!

## Eu sou Erick Jonathan Peiker - :computer: Já fui desenvolvedor Fullstack!

<!--ts-->
   * [Requisitos](#Requisitos)
   * [Aulas](#Aulas)
      * [Aula 1 - Containers](#aula-1)
      * [Aula 2 - Projeto Monolito NodeJS](#aula-2)
      * [Aula 3 - PadronizaÃ§Ãµes de projetos](#aula-3)
      * [Aula 4 - Projetos em microserviÃ§os](#aula-4)
      * [Aula 5 - Git e Gitflow](#aula-5)
      * [Aula 6 - Testes automatizados](#aula-6)
      * [Aula 7 - SQL](#aula-7)
<!--te-->

## Requisitos

[DOCKER](https://docs.docker.com/get-docker/)

[NODEJS](https://nodejs.org/en/download/)

[POSTMAN](https://www.postman.com/downloads)

[GIT](https://git-scm.com/downloads)

## Aulas

Peço as seguintes contribuições para nossas conversas serem produtivas:

Não chute os amiguinhos

NINGUÉM SABE TUDO, se travou o aovivo, pulamos para outro assunto neste dia

Todas tecnologias e metodologias tem seu lado bom e ruim, menos algumas

Atenção AQUI CARALHOOO, se achas que o assunto não se encaixa para você, pergunte primeiro em práticas possíveis ao seu uso

Repassem os conhecimentos recebidos, isso não é C* pode distribuir a vontade

Quer saber mais sobre os assuntos, me pague um café

Sugestões de assuntos coloquem na caixinha de perguntas que o Neli postará no Insta

- [x] Aula 1 - Containers
- [x] Aula 2 - Projeto Monolito NodeJS
- [ ] Aula 3 - Padronizações de projetos
- [ ] Aula 4 - Projetos em microserviços
- [ ] Aula 5 - Git e Gitflow
- [ ] Aula 6 - Testes automatizados
- [ ] Aula 7 - SQL


## Aula 1

Vamos iniciar com os [conceitos de containers](https://docs.docker.com/get-started/overview/)

Mão na massa - [Criar e rodar um container](https://docs.docker.com/language/nodejs/build-images/)

Entendi, mas como faço? - [ComunicaÃ§Ã£o entre containers e host](https://docs.docker.com/language/nodejs/develop/) 


## Aula 2

Monolito
    - Aplicação
    - Banco de dados [Mysql](https://hub.docker.com/_/mysql)
    - Proxy
 
* Qual a importância do [desing de APIs](https://br.sensedia.com/post/api-rest-design-7-essential-tips)?

* O que é [API REST](https://ezdevs.com.br/comecando-uma-api-rest-com-node-js/)? 

* O que [ORM](https://www.treinaweb.com.br/blog/o-que-e-orm)? 

* [Sequelize](https://sequelize.org/master/)

* [Aplicação CRUD](https://expressjs.com/pt-br/starter/hello-world.html)

    Iniciar a instância do Mysql no docker

    Conectar com um client no Mysql

    Rodar o script : /aula2/config/script-aula2.sql

    Rodar o comando : /aula2/config/sequelize-auto.cmd

    - Usuário - E se já tiver a tabela? [A mágica acontece](https://github.com/sequelize/sequelize-auto)


## Aula 3

    As aplicações possuem camadas com o intuito de deixar o sistema com responsabilidades específicas, em alguns momentos parece 

    Camadas mais comuns das aplicações

    * Middleware ou Filters = Antes mesmo que as requisições cheguem na próxima camada pode haver tratamentos para que o sistema fique por exemplo: Mais seguro, mais padronizado, menos repetições e etc...

    * Router ou Controllers = São utilizados para receber as requisições e utilizar as informações de requisição e respostas que o servidor irá oferecer aos seus clientes.

    * Service = São os arquivos que tratam dados e se comunicam com camadas de serviço, por exemplo: Banco de dados, serviços de e-mail, serviços de terceiros, serviços de erro, serviço de log e etc...

    * DAO ou Data = São as camadas que conversam com o banco de dados ou com o ORM


## Aula 4

Microserviços

    - Serviço 1
    * Serviço externo 

    - Serviço 2
    * Banco de dados

    - Serviço 3
    * Bancode dados 2

    - Serviço 4 
    * Message Broker

    - Serviço 5
    * Gerenciamento de Pipeline

## Aula 5

EM BREVE

## Aula 6

EM BREVE

## Aula 7

EM BREVE
