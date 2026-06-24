const express = require('express');
const methodOverride = require('method-override');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('./src/public'));

// Página inicial
app.get('/', (req, res) => {
  res.render('index');
});

// Rotas dos módulos
const professorRoutes = require('./src/routes/professorRoutes');
const alunoRoutes = require('./src/routes/alunoRoutes');
const materiaRoutes = require('./src/routes/materiaRoutes');

app.use('/professores', professorRoutes);
app.use('/alunos', alunoRoutes);
app.use('/materias', materiaRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
