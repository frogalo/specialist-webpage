// src/api.js

import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

class Api {
    static async getUnderHeaderSection(id) {
        try {
            const response = await axios.get(`${BASE_URL}/hero-sections/${id}?populate=*`, {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`,
                },
            });
            return response.data.data.attributes;
        } catch (error) {
            console.error("Error fetching Under Header Section data:", error);
            throw error;
        }
    }
}

export default Api;
