import axios from "axios";

async function api() {
  try {
    const response = await axios.get(
      "https://api.artic.edu/api/v1/artworks?page=1",
    );
    return response.data.data;
  } catch (error) {
    console.log("Failed to fetch the data", error);
    return [];
  }
}
export default api;
