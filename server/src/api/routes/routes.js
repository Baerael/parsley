import express from 'express'
const router = express.Router()
import { ingest, device } from "../controller/iot.js";

router.use(express.json())

router.post('/ingest', ingest)
router.get('/device/:id', device)

export default router