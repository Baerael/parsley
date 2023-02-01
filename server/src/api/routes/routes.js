import express from 'express'
const router = express.Router()
import { ingest } from "../controller/ingest.js";

router.use(express.json())

router.post('/ingest', ingest)
router.get('/device/:id', ingest)

export default router