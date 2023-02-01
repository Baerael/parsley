import { Sequelize } from 'sequelize'

export const defineLogs = (sequelize) => {
        return sequelize.define('logs', {
        eventId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'event_id'
        },
        eventDate: {
            type: Sequelize.TIME,
            allowNull: false,
            field: 'event_date'
        },
        deviceId: {
            type: Sequelize.STRING,
            allowNull: false,
            field: 'device_id',
            len: 6
        },
        tempFarenheit: {
            type: Sequelize.INTEGER,
            field: 'temp_farenheit'
        }
    }, {
        timestamps: false
    })
}