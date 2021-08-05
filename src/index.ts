import Koa from 'koa'
const app = new Koa();
import Router from 'koa-router'
const router = new Router();

router.get('/', (ctx) => {
  ctx.body = 'Hello World';
})

router.get('/users', (ctx) => {
  ctx.body = 'users';
})

app.use(router.routes())

app.listen(3000);
