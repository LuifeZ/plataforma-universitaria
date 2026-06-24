# Portal Acadêmico

Sistema de gestão universitária com CRUD de Alunos, Professores e Matérias.

**Tecnologias:** Node.js, Express, EJS, MySQL (arquitetura MVC)

## Como rodar o projeto

### 1. Instalar dependências
```
npm install
```

### 2. Criar o banco de dados
No phpMyAdmin (ou MySQL Workbench), crie um banco chamado `portal_academico` e execute o conteúdo de `database/schema.sql`. Opcionalmente, execute também `database/seed.sql` para ter dados de exemplo.

### 3. Configurar a conexão
Abra `src/models/connection.js` e ajuste a porta/senha do seu MySQL se necessário (XAMPP geralmente usa a porta 3307).

### 4. Rodar o projeto
```
node app.js
```

Acesse **http://localhost:3000** no navegador.

## Estrutura do projeto

```
src/
  models/        -> queries SQL de cada entidade
  controllers/   -> lógica de cada rota
  routes/        -> definição das URLs
  views/         -> telas EJS (HTML)
  public/css/    -> estilos
database/
  schema.sql     -> criação das tabelas
  seed.sql       -> dados de exemplo
app.js           -> arquivo principal do servidor
```

## Equipe
- Eduarda — CRUD de Professores
- Luiz Felipe — CRUD de Alunos
- João Victor — CRUD de Matérias
