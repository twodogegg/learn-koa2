import BaseService from "./BaseService";

export interface User extends Record<string, unknown> {
  name: string;
}
class UserService extends BaseService {
  private tableName = "users";

  public async list () {
      const sql = `select * from ${this.tableName}`
      return this.query(sql)
  }

  public async insert(data: User) {
    const sql = `INSERT ${this.tableName} (name) VALUES(?)`;
    const values = [data.name];
    return this.execute(sql, values);
  }
}

export default UserService;
