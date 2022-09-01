import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import {_router} from './routes'

const PORT = process.env.PORT || 3023

const app: express.Application = express();
app.use(cors())
app.use(_router)

app.listen(PORT, () => {
  console.log(`port ${PORT}`)
})
