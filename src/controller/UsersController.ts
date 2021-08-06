import Router, { RouterContext } from "koa-router";
import UserService, { User } from "../service/UserService";
import UsersValidator from "../validator/UsersValidator";
import BaseController from "./BaseController";
import RESTful from "./RESTful";

const usersValidator = new UsersValidator();

const service = new UserService();

/**
 * 用户控制器
 */
class UsersController extends BaseController implements RESTful {

  public async index(ctx: RouterContext) {
    const result = await service.list()
    ctx.body = result;
  }

  public show() {}

  public async create(ctx: RouterContext) {
    // 1. 获取用户通过 HTTP 传递过来的请求参数。
    const data = ctx.request.body as User;
    // 2. 校验、组装参数。
    try {
      await usersValidator.checkCreate(data);
    } catch (e) {
      ctx.body = {
        code: 422,
        message: e.message,
      };
      return;
    }

    // 3. 调用 Service 进行业务处理，必要时处理转换 Service 的返回结果，让它适应用户的需求。
    const result = await service.insert(data);
    

    // 4. 通过 HTTP 将结果响应给用户。
    ctx.body = result;
  }

  public async update() {}

  public async destroy() {}
}

export default UsersController;
