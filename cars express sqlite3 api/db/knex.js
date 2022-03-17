const connectedKnex = require('knex')({
    client: 'sqlite3', // or 'better-sqlite3'
    connection: {
      filename: "./mydatabase.sqlite3"
    },
    useNullAsDefault: true
  });



module.exports = connectedKnex;