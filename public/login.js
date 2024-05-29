//USE CDN!!
// import axios from 'axios';

export async function login() {
  //const response = await axios.get('https://api.example.com/data');
  const response = await axios.get('http://localhost:3000/api/v1/workouts')
  return response.data;
}
