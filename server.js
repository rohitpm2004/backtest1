const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Minimal placeholder route - missing task CRUD, Mongoose model, database connection
app.get('/', (req, res) => {
  res.json({ message: 'Task API Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
