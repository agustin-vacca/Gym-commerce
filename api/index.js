const app = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  app.listen(3000, () => {
    console.log('%s listening at 3000'); // eslint-disable-line no-console
  });
});