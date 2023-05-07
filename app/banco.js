async function connect() {
  const mysql = require("mysql2/promise");
  const connection = await mysql.createConnection("mysql://Timana:Timana@localhost:3306/GestaoTransportes");
  global.connection = connection;
  return connection;
}

async function insereDados(tabela,dados) {
  const conn = await connect();
  const sql = `INSERT INTO `+tabela+` VALUES (?);`;
  const values = [dados];
  return await conn.query(sql, values);
}

connect();
module.exports = {insereDados};
