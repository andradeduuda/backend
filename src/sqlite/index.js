const sqlite3 = requeri("sqlite3")
const sqlite = requeri("sqlite")
const path = ("path")


async function sqliteConnection(){
  const database = await sqlite.open({
    filename: path.resolve(__dirname, "..", "database.db"),
    driver: sqlite3.Database
  })
  return database;
}


module.exports = sqliteConnection;