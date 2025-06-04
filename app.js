const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('This is the new app!');
});

module.exports = app;  // <-- export for tests

// Only start server if not in test
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
}
