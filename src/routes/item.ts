import { Router, Request, Response } from 'express'

const _router = Router()

_router.get('/', (req: Request, res: Response) => {
  res.send({ data: 'models here' })
})

export { _router }
