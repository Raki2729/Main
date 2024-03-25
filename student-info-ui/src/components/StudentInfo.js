import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './StudentInfo.css';


export const StudentInfo = ()=>{
    const [operatingStatus, setOperatingStatus] = useState('');

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                // Replace 'YOUR_ENDPOINT_URL' with the actual endpoint URL
                const response = await axios.get('https://raw.githubusercontent.com/Raki2729/Student-Info/main/student-info.json');
                console.log('Response data:', response.data);
                setOperatingStatus(response.data.operatingStatus);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchStatus();
    }, []);

    return (
        <div className="status-container">
            <p>Operating Status is: <strong>{operatingStatus || 'Loading...'}</strong></p>
        </div>
    );

   
};