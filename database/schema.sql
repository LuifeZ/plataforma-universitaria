-- Banco de dados: Portal Acadêmico
-- Execute este script no phpMyAdmin (aba SQL) depois de criar o banco "portal_academico"

CREATE TABLE IF NOT EXISTS professores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  cpf VARCHAR(14),
  disciplinas VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS alunos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  matricula VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS materias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  carga_horaria INT,
  professor_id INT,
  FOREIGN KEY (professor_id) REFERENCES professores(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS aluno_materia (
  id INT AUTO_INCREMENT PRIMARY KEY,
  aluno_id INT NOT NULL,
  materia_id INT NOT NULL,
  FOREIGN KEY (aluno_id) REFERENCES alunos(id) ON DELETE CASCADE,
  FOREIGN KEY (materia_id) REFERENCES materias(id) ON DELETE CASCADE
);
