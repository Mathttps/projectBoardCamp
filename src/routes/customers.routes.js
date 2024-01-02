import { Router } from "express"
import { customerSchema } from "../schemas/customers.schemas.js"
import { getUsers, getCustomerById, createCustumers, putUsers } from "../controllers/controller.users.js"
import { validateSchema } from "../middlewares/validateSchema.middleware.js"



const customersRouter = Router()

customersRouter.post('/customers', validateSchema(customerSchema), createCustumers)

customersRouter.put('/customers/:id', validateSchema(customerSchema), putUsers)

customersRouter.get('/customers/:id', getCustomerById)

customersRouter.get('/customers', getUsers)

export default customersRouter