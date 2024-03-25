//import winston,{format,transports} from 'winston'
//import {DateTime} from 'luxon'

// const logFormat = format.printf(({level,message}) => {

//     const dateFormat = DateTime.now().toUTC()
//     return `time: ${dateFormat} level: ${level} message: ${message}`
// })

// export const getLoggerInstance = () =>{
     
//     const logger = winston.createLogger({
//         level: `info`,
//         format: format.json(),
//         transports:
//         [
//            new transports.Console({format: format.combine(format.colorize(), logFormat)})
//         ]


//     })
//     return logger
// }
// import winston, { format, transports } from 'winston';
// import { DateTime } from 'luxon';

// // Updated log format to include custom fields
// const logFormat = format.printf((info) => {
//     // Standard log format including the timestamp, level, and message
//     const timestamp = DateTime.now().toUTC().toString();
//     let log = `time: ${timestamp} | level: ${info.level} | message: ${info.message}`;

//     // Dynamically add additional fields if they are present
//     if (info.userIp) log += ` | IP: ${info.userIp}`;
//     if (info.location) log += ` | location: ${info.location}`;
//     if (info.functionName) log += ` | function: ${info.functionName}`;
//     if (info.companyName) log += ` | company: ${info.companyName}`;

//     // Return the formatted log string
//     return log;
// });

// export const getLoggerInstance = () => {
//     const logger = winston.createLogger({
//         level: 'info',
//         format: format.combine(
//             format.timestamp(),
//             format.json(),
//             format.printf(info => logFormat(info)) // Use the updated logFormat here
//         ),
//         transports: [
//             new transports.Console({ format: format.combine(format.colorize(), format.printf(info => logFormat(info))) })
//         ]
//     });

//     return logger;
// };
import winston from 'winston';
import { DateTime } from 'luxon';



// Define a custom log format
const logFormat = winston.format.printf(({ level, message, label, location, Ip, customMessage, functionName, companyName }) => {
    // Generate the current UTC time using Luxon
    const dateFormat = DateTime.now().toUTC().toString(); 
    // Construct the log message with various data fields
    return `time: ${dateFormat} [${label}] ${level}: ${message} - location: ${'fremont' + ', ca'}, IP: ${'userIp'}, Custom Message: ${customMessage}, Function Name: ${functionName}, Company Name: ${'safeway'}`;
});
// Create a function to get logger instance with the defined log format
export const getLoggerInstance = () => {
    const logger = winston.createLogger({
        level: 'info',
        format: winston.format.combine(
            winston.format.label({ label: 'MyApplication' }),
            winston.format.timestamp(),
            logFormat
        ),
        transports: [
            new winston.transports.Console() // Output logs to console
        ]
    });
    return logger;
};
