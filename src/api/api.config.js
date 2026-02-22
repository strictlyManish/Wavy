import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY; 
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const searchData = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: "snippet",
        q: query,
        key: API_KEY,
        maxResults: 10,
        type: "video",
      },
    });

    return response.data.items;
  } catch (error) {
    console.error("YouTube API Error:", error.response?.data || error.message);
    throw error;
  }
};
