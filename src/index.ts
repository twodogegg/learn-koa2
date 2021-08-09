import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";

const app = new Koa();

app.use(bodyParser());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    err.status = err.statusCode || err.status || 500;
    ctx.body = {
      code: err.status,
      message: err.message,
    };
    ctx.app.emit("error", err, ctx);
  }
});

app.on("error", (e) => {
  console.log("xxx", e);
});

const router = new Router();
import users from "./router/users";

router.get("/", (ctx) => {
  ctx.body = "Hello World";
});
app.use(users.routes());

app.listen(3000);
