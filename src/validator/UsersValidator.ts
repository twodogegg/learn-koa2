import BaseValidator, { IRule } from "./BaseValidator";

import { User } from "../service/UserService";

class UsersValidator extends BaseValidator {
  public async checkCreate(data: User) {
    const checkRule: IRule[] = [
      {
        field: "name",
        method: "isEmpty",
      },
      {
        field: "phone",
        method: "isEmpty",
      },
      {
        field: "phone",
        method: "isMobilePhone",
      },
    ];
    await this.check(data, checkRule);
  }
}

export default UsersValidator;
