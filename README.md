# Desafio Técnico Place TI
## Felipe Trevisol

## Demonstração
Verificar .webm anexado; video demonstração do funcionamento e consumo da API.

## Descrição
Projeto contendo todas as funcionalidades de um CRUD, feito para desenvolver a associação entre cidades, comércios e seus tipos.

## Índice
- [Tecnologias Utilizadas](#tecnologias)
- [Configuração](#configuração)
- [Executar](#executar)

## Tecnologias
Projeto feito em Java(21) e Typescript;
Foram utilizadas as frameworks Spring Boot 3 e Angular 17, junto ao banco de dados em memória H2, usando TCP/IP no lugar do embedded.

## Comunicação
O Spring Boot, por padrão, escuta na porta 8080;
O Angular, escuta na porta 4200;
Caso não sejam seguidas essas 2 padronizações, haverá um erro na comunicação, visto que o CORS está configurado para apenas escutar requests da porta 4200.

## Configuração
1° - Importar a aplicação para uma IDE (IntelliJ/Eclipse STS) ou iniciar via Maven.
## via Maven:
sh
mvn --version ::verifica se o Maven está instalado

cd pasta-do-projeto ::entra na pasta do projeto

mvn spring-boot:run ::compila e executa o projeto na porta 8080


## Via STS no Eclipse:
Files -> Import -> Git -> Projects From Git -> Clone URL -> URL deste repositório -> Build and Run.

## Via IntelliJ:
Files -> Clone Repository -> URL deste repositório -> Build and Run.

## Inicialização do Banco de dados
Como é utilizado um banco de dados em memória volátil, é necessário criar as tabelas após a inicialização do back end, que inicializará o Tomcat e o H2.
É necessário seguir o script informado nos arquivos anexados.


## Abrir a pasta que contém o front end e executar para criar a pasta node_modules
sh
cd pasta-contendo-front
npm install ::instalará os arquivos do node



# Exemplo de execução do front end
sh
cd pasta-contendo-frontend
npm start
