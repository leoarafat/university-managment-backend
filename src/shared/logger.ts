import winston from 'winston'

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'info' }),
    new winston.transports.File({ filename: 'combined.log', level: 'error' }),
  ],
})

export default logger
