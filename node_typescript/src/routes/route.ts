import {Router} from 'express'
import {NewUserController} from '../controllers/newUserController'
import {ShowUserController} from '../controllers/showUserController'
import {DeleteUserController} from '../controllers/deleteUserController'
import {UpdateUserController} from '../controllers/updateUserController'

const routes = Router();
const newUserController = new NewUserController();
const showUserController = new ShowUserController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();

routes.post('/user/new', newUserController.exec)
routes.get('/users', showUserController.exec)
routes.delete('/user/:id', deleteUserController.exec)
routes.put('/user/:id', updateUserController.exec)

export default routes
