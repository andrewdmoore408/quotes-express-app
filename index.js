const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (request, response) => {
  response.send('<div class="test">Hello, world!</div>');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
