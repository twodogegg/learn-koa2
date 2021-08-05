import Router  from "koa-router";
import UsersController from "../controller/UsersController";

const router = new Router();

const usersController = new UsersController();

router.prefix('/users')

router.get('/',usersController.index)
router.get('/:id',usersController.show)
router.post('/',usersController.create)
router.put('/:id',usersController.update)
router.delete('/:id',usersController.destroy)

export default router;