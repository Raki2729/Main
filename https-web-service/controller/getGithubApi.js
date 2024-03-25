import axios from 'axios'
import {GITHUB_TOKEN} from "../settings.js"

// export const fetchGithubSettings = async () => {
//   // Use the GitHub API endpoint as specified
//   const url = 'https://api.github.com/repos/CS548-2024Spring/SFBU-info/contents/2024-spring-student-info.json';

//   try {
//     // Set the Accept header to "application/vnd.github.raw+json" to get the raw file content
//     // and the Authorization header to "Bearer YOUR_GITHUB_TOKEN"
//     const response = await axios.get(url, {
//       headers: {
//         'Accept': 'application/vnd.github.raw+json',
//         'Authorization': `token ${GITHUB_TOKEN}` // Replace <YOUR_GITHUB_TOKEN> with your actual token value
//       }
//     });
//     // This will return the raw JSON content as long as the file is JSON
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching GitHub settings:', error);
//     throw error;
//   }
// };
export const getGithubApi = async()=>{

  const githubApiUrl =`https://api.github.com/repos/Raki2729/Student-Info/contents/student-info.json`;
  try {
    const response = await axios.get(githubApiUrl, {
      headers: {
        'Accept': 'application/vnd.github.v3.raw', // Ensures you get the raw content directly
        'Authorization': `Bearer ${GITHUB_TOKEN}` // Uncomment and use if needed
      }
    });
    return response.data; // Returns the JSON data directly
  } catch (error) {
    console.error('Error fetching the GitHub data:', error);
    return null; // Return null or an appropriate value indicating the fetch was unsuccessful
  }
}
getGithubApi().then(data => {
  console.log(data); // Process or log the fetched data
}).catch(error => {
  console.error('Failed to fetch data:', error);
});

