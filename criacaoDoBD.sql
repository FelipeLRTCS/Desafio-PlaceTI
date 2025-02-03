create table Cidade(
  id int not null AUTO_INCREMENT,
  nome varchar(100) not null,
  uf varchar(2) not null,
  capital boolean not null,  
  PRIMARY KEY (ID)
);

create table tipoComercio(
 id int not null AUTO_INCREMENT,
 nome varchar(100) not null,
 descricao varchar(300) not null,
 PRIMARY KEY (id)
);

create table Comercio(
 id int not null AUTO_INCREMENT,
 nome varchar(100) not null,
 nomeResponsavel varchar(100) not null,
 idTipoComercioFk int not null,
 idCidadeFk int not null,
 PRIMARY KEY (ID),
 FOREIGN KEY (idTipoComercioFk) references TipoComercio (id),
 FOREIGN KEY (idCidadeFk) references Cidade (id)
);

