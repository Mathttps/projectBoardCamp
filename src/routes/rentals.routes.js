import { Router } from "express"
import { deleteRental, getRental, createRental, returnRental } from "../controllers/controller.rentals.js"

const rentalsRouter = Router()

rentalsRouter.post('/rentals', createRental)

rentalsRouter.post('/rentals/:id/return', returnRental)

rentalsRouter.delete('/rentals/:id', deleteRental)

rentalsRouter.get('/rentals', getRental)

export default rentalsRouter

