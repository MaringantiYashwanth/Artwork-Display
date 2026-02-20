import axios from "axios";

async function api() {
  try {
    const response = await axios.get(
      "https://api.artic.edu/api/v1/artworks?page=1",
    );
  } catch (error) {
    console.log("Failed to fetch the data", error);
  }
}
