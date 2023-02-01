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


export const device = async (req,  res) => {
    const Device = defineLogs(db)
    const { id } = req.params
    const data = await Device.findAll({
        where: {
            deviceId: id
        }
    })

    const filtered = data.map(device => device.get({ plain: true }))
    const mostRecentLogDate = filtered[filtered.length - 1]
    const tempSum = filtered.reduce((acc, cur) =>  acc + cur.tempFarenheit, 0)
    const averageTemperature = tempSum / filtered.length

    const aggregated = {
        deviceId: id,
        averageTemperature,
        mostRecentLogDate,
        logs: [ ...filtered ]
    }

    res.status(200).send(aggregated)
}
