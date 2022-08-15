import express, { Application, Request, Response } from 'express'
import * as NewsController from './News/controller' // Controller responsável pelas requisições http
import { HTTP_SUCCESS } from './types'
import cors from 'cors'

const app: Application = express()
const port = 3000

app.use(cors({ origin: 'http://localhost:4200' }))
app.use(express.json())

// As rotas são cadastradas aqui, "/" significa localhost:3000, usar o POSTMAN para fazer as requisições e testar.
// Estudar sobre REST API
// Pra rodar o back-end basta entrar na pasta e rodar npm start

app.get('/', (request: Request, response: Response) => {
    response.send(HTTP_SUCCESS)
})

app.get('/news', NewsController.getNews)
app.get('/newsall', NewsController.getAllNews)
app.post('/news', NewsController.createNews)
app.delete('/news', NewsController.deleteNews)
app.put('/news', NewsController.editNews)

app.listen(port, () => {
    console.log('Backend listening on port 3000')
})
