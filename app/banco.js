async function connect() {
  const mysql = require("mysql2/promise");
  const connection = await mysql.createConnection("mysql://Timana:Timana@localhost:3306/GestaoTransportes");
  global.connection = connection;
  return connection;
}

async function insereDados(tabela,dados) {
  const conn = await connect();
  const sql = `INSERT INTO `+tabela+` VALUES (?);`;
  //const values = [dados];
  const values = dados;
  console.log(values);
  return await conn.query(sql, values);
}

async function pegaDados(sql, values) {
	const conn = await connect();
  const results = await conn.query(sql, values);
  return results[0];
}

connect();
module.exports = {insereDados, pegaDados};
