const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json')
const db = low(adapter)


// data
db.defaults({ data: [], user: [], session: [] })
  .write()

module.exports = db;