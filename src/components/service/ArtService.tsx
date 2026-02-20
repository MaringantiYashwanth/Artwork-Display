import api from "../../api/api.js";

function ArtService() {
  const response = await api.json();
  return response.data;
}
export default ArtService;
