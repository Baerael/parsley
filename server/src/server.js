import api from "./api/routes/routes.js"
import express from "express"
import cors from "cors";

const app = express()

app.use(cors({ origin: '*'}))
app.use('/api', api);

app.get('/', async function (req, res) { 
    res.send('Test query') 
})

app.listen(8080)