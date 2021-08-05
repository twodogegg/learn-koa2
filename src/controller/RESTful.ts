import { RouterContext } from "koa-router";

/**
 * 编写RESTful风格的api
 */
 interface RESTful {
    index(ctx: RouterContext): any
    create(ctx: RouterContext):any
    update(ctx: RouterContext):any
    destroy(ctx: RouterContext):any
    show(ctx:RouterContext):any
}

export default RESTful