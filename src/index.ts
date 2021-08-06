import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'

const app = new Koa();

app.use(bodyParser())
const router = new Router();

import users from './router/users'




router.get('/', (ctx) => {
  ctx.body = 'Hello World';
})


app.use(users.routes())

app.on('error', (e) => {
  console.error(e);
  
})

app.listen(3000);
