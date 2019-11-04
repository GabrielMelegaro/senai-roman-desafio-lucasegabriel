create database T_Roman

use T_Roman

create table Professor
(
	IdProfessor int primary key identity
	,Nome varchar (255) not null 
)

create table Usuario
(
	IdUsuario int primary key identity
	,Nome varchar(255) 
	,Email varchar(300) 
	,Senha varchar(400) 
	,Permissao varchar(350) 
)

drop table Usuario

create table Temas
(
	IdTemas int primary key identity
	,Nome varchar(433)
)
