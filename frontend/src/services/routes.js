import axios from 'axios';

const API_BASE_URL = 'https://vector-shift-2.onrender.com';
// const API_BASE_URL = 'http://localhost:8000';


export const parsePipelines = async (graph) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/pipelines/parse`, graph, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response.data)
        return response.data;  
    } catch (error) {
        console.error('Error sending graph data:', error);
        throw error;  
    }
};