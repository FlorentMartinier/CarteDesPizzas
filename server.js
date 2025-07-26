const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;
const BROWSER_FOLDER = path.join(__dirname, 'dist/carte-des-pizzas/browser');

app.use(express.static(BROWSER_FOLDER));

app.get('*', (req, res) => {
  res.sendFile(path.join(BROWSER_FOLDER, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
