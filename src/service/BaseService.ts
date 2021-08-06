import mysql, { OkPacket, Query } from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "egg",
  port: 3308,
});
class BaseService {
  public async query(sql: any, values: any[] = []):Promise<Query> {
    return new Promise((resolve, reject) => {
      connection.query(sql, values, (error, results, fields) => {
        if (error) throw error;
        return resolve(results)
      })
    })
  }

  public async execute(sql: any, values: any[]): Promise<OkPacket> {
    return new Promise((resolve, reject) => {
      connection.query(sql, values, (error, results, fields) => {
        if (error) throw error;
        return resolve(results)
      })
    })
  }
}

export default BaseService;
