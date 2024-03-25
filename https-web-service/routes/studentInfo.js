import express from 'express'
import { getLoggerInstance } from '../logger.js';
import {getGithubApi} from '../controller/getGithubApi.js'
//import data from '../database/student-info.json' assert { type: 'json' };
const logger = getLoggerInstance()
const studentInfo = express.Router()

studentInfo.use((req,res,next)=>{
    req.userIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    req.userDevice = req.get('User-Agent')
    next()
})


studentInfo.post('/fetch-student-info', async (req, res) => {
    // Extract student_id from the POST request body
    const { student_id } = req.body;
  
    try {
      // Fetch the entire data array from GitHub
      const githubData = await getGithubApi();
  
      
      const studentInfo = githubData.find(student => student.student_id === student_id);
  
      if (studentInfo) {
        logger.info(`Student info fetched for ID: ${student_id}`);
        res.json(studentInfo);
      } else {
        logger.warn(`Student info not found for ID: ${student_id}`);
        res.status(404).json({ message: 'Student not found' });
      }
    } catch (error) {
      logger.error('Error fetching student info:', error);
      res.status(500).send('Internal Server Error');
    }
  });

export default studentInfo;