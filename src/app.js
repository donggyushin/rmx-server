import express from 'express';
import apiRouter from "./apis"
import bodyParser from 'body-parser'
import json2xls from 'json2xls'
const app = express()


app.use(json2xls.middleware)
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
app.use('/api', apiRouter)

export default app;