import Router, { RouterContext } from "koa-router";
import UserService from "../service/UserService";
import BaseController from "./BaseController";
import RESTful from "./RESTful";

/**
 * 用户控制器
 */
class UsersController extends BaseController implements RESTful{
    public index (ctx:RouterContext) {
        
    }

    public show() {

    }

    public async  create (ctx:RouterContext) {
        interface params extends Record<string, unknown> {
            name: String
        }

        // 1. 获取用户通过 HTTP 传递过来的请求参数。
        const data = ctx.request.body as params;
        // 2. 校验、组装参数。
        if (!data.name) {
            ctx.status = 422
            ctx.body = {
                code: 422,
                message: '请输入用户名'
            }
            return
        }
        // 3. 调用 Service 进行业务处理，必要时处理转换 Service 的返回结果，让它适应用户的需求。
        const result = await UserService.insert(data)
        // 4. 通过 HTTP 将结果响应给用户。
        ctx.body = result
    }

    public async  update () {

    }

    public async  destroy () {

    }
}

export default UsersController