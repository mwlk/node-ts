import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { _router } from './routes'
import db from './config/mongo'

const PORT = process.env.PORT || 3023

const app: express.Application = express()
app.use(cors())
app.use(_router)

db()
  .then(() => {
    console.log('mongo connect')
  })
  .catch((err) => {
    console.log(err)
  })

app.listen(PORT, () => {
  console.log(`port ${PORT}`)
})
