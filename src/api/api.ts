import axios from "axios";
import type { Arts } from "../components/Table";
async function api(
  page: number = 1,
): Promise<{ data: Arts[]; total: number; totalPages: number }> {
  try {
    const response = await axios.get(
      `https://api.artic.edu/api/v1/artworks?page=${page}`,
    );
    return {
      data: response.data.data,
      total: response.data.pagination.total,
      totalPages: response.data.pagination.total_pages,
    };
  } catch (error) {
    console.log("Failed to fetch the data", error);
    return { data: [], total: 0, totalPages: 0 };
  }
}
export default api;
