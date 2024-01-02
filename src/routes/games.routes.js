import { Router } from "express"
import { gameSchema } from "../schemas/games.schema.js"
import { validateSchema } from "../middlewares/validateSchema.middleware.js"
import { getGame, createGame } from "../controllers/controller.games.js"


const gamesRouter = Router()

gamesRouter.post('/games', validateSchema(gameSchema), createGame)

gamesRouter.get('/games', getGame)

export default gamesRouter