import axios from "axios";

const API_URL = "https://161.35.101.255/api/fetch-all-data/"; // Replace with your actual backend URL

export const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
