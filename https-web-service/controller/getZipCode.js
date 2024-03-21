import https from 'https';
import axios from 'axios';
import {IP2LOCATION_API_KEY} from "../settings.js"

export const getZipCode = (userIp) => {
    // Construct the API URL with template literals
    const ip2locationUrl = `https://api.ip2location.io/?key=${IP2LOCATION_API_KEY}&ip=${userIp}`;

    /*// Return a new Promise that resolves with the API response or rejects with an error
    return new Promise((resolve, reject) => {
        https.get(ip2locationUrl, (response) => {
            let data = '';
            
            // Listen for data events to collect the chunks of data
            response.on('data', (chunk) => {
                data += chunk;
            });

            // Once all data has been received, try to parse it as JSON
            response.on('end', () => {
                try {
                    const parsedData = JSON.parse(data);
                    resolve(parsedData);
                } catch (error) {
                    reject(error);
                }
            });
        }).on('error', (error) => {
            reject(error);
        });
    });*/
    // with axios
   //return  axios.get(ip2locationUrl)
    const zipCodeData =axios.get(ip2locationUrl)
    .then(response=> response.data)
    .catch(error =>{console.log(error)})

    return zipCodeData
    // getZipCode(userIp)
};