const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Define o diretório onde estão os arquivos estáticos (HTML, CSS, JavaScript, etc.)
const staticDirectoryPath = path.join(__dirname);

// Configura o servidor para servir os arquivos estáticos do diretório raiz
app.use(express.static(staticDirectoryPath));

// Define a rota raiz
app.get('/', (req, res) => {
  // Redireciona para o arquivo index.html
  res.sendFile(path.join(staticDirectoryPath, 'index.html'));
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});
