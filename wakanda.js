const { exec } = require('child_process');
const express = require('express');
const app = express();

app.get('/app', (req, res) => {
  const userInput = req.query.command;
  exec(`ls "${userInput}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${stderr}`);
      res.status(500).send(`Internal Server Error: ${error.message}`);
      return;
    }
    res.send(`Output: ${stdout}`);
  });
});

app.listen(1337, () => {
  console.log('Server is running on port 1337');
});
