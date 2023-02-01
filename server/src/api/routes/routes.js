import express from 'express'
const router = express.Router()
import { ingest, device, deviceAlerts } from "../controller/iot.js";

router.use(express.json())

router.post('/ingest', ingest)
router.get('/device/:id', device)
router.get('/device/alerts/:id', deviceAlerts)

export default router