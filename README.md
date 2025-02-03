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
1° - Baixar o arquivo .ZIP disponibilizado no Github; É possível também importá-lo direto do GitHub via Eclipse STS/IntelliJ por meio da URL deste repositório.
## Baixando o ZIP:
Ao baixar o arquivo compactado, descomprima para um diretório de desejo seu. Há 2 pastas separadas, uma para a execução do frontend e outra para o backend, especificadas nos próprios nomes.
## Inicializando o back end
Abra em alguma IDE, preferencialmente Eclipse STS ou IntelliJ; Importe o projeto utilizando:
Files->Import->Existing Maven Files->Browse-> "pasta-contendo-frontend"-> com isso, selecione o POM.XML contido no arquivo e faça um Build and Run.
Ao rodar o projeto, ele irá iniciar na porta 8080 como padrão.
Troubleshooting da porta 8080 ocupada: Verifique se há algum servidor aberto no task manager. 
## Abrir a pasta que contém o front end e executar para criar a pasta node_modules
```sh
cd pasta-contendo-front #aqui, é importante você navegar dentro da pasta "src".
npm install #instalará os arquivos do node
npm start #inicializa o servidor na porta 4200
```
## Inicialização do Banco de dados
Como é utilizado um banco de dados em memória volátil, é necessário criar as tabelas após a inicialização do back end, que inicializará o Tomcat e o H2.
Entrar em localhost:8080/placeti/h2-console e executar as 3 querys especificadas no arquivo .sql anexado.

## via Maven:

```sh
mvn --version #verifica se o Maven está instalado
cd pasta-do-projeto #entra na pasta do projeto
mvn spring-boot:run #compila e executa o projeto na porta 8080
```

## Via Eclipse STS:
Files -> Import -> Git -> Projects From Git -> Clone URL -> URL deste repositório -> Build and Run.

## Via IntelliJ:
Files -> Clone Repository -> URL deste repositório -> Build and Run.

## Inicialização do Banco de dados
Como é utilizado um banco de dados em memória volátil, é necessário criar as tabelas após a inicialização do back end, que inicializará o Tomcat e o H2.
É necessário seguir o script informado nos arquivos anexados.
