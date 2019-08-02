import express from 'express';
import apiRouter from "./apis"
import bodyParser from 'body-parser'
const app = express()


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
app.use('/api', apiRouter)

export default app;