import { createConnection } from '../db/client.js'
import { defineLogs } from '../models/logs.js'

const db = createConnection()

export const ingest = async (req,  res) => {
    const Logs = defineLogs(db)
    const { data } = req.body

    for (const d of data) {
        let [deviceId, eventDate, tempFarenheit] = d.split('|')
        tempFarenheit = ( Number(tempFarenheit) * 2 ) + 30
        eventDate = new Date(eventDate)
        console.log(deviceId, eventDate, tempFarenheit)

        try {
            await Logs.create({
                deviceId,
                eventDate,
                tempFarenheit
            })
        } catch (error){
            console.log(error)
            res.status(500)
        }
    }

    res.status(200).send()
}
