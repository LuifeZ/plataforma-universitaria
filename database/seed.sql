-- Dados de exemplo para testar o sistema (opcional)

INSERT INTO professores (nome, email, cpf, disciplinas) VALUES
('Maria Silva', 'maria@uni.edu', '123.456.789-00', 'Matemática'),
('João Costa', 'joao@uni.edu', '987.654.321-00', 'Física, Química');

INSERT INTO alunos (nome, email, matricula) VALUES
('Pedro Santos', 'pedro@aluno.edu', '2024001'),
('Ana Oliveira', 'ana@aluno.edu', '2024002');

INSERT INTO materias (nome, carga_horaria, professor_id) VALUES
('Matemática Básica', 60, 1),
('Física I', 80, 2);
