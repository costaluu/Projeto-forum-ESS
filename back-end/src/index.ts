import express, {Application, Request, Response} from 'express'

const app: Application = express()
const port = 3000

app.get('/', (request: Request, response: Response) => {
    response.send('Hello')
})

app.listen(port, () => {
    console.log("Backend listening on port 3000")
})