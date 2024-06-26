import axios from "axios";
import { Photo } from "../App-types";

interface photosApi {
  results: Photo[];
}

axios.defaults.baseURL = "https://api.unsplash.com";
const getPhotos = async (
  query: string,
  currentPage: number
): Promise<photosApi> => {
  const response = await axios.get<photosApi>("/search/photos", {
    params: {
      client_id: "MjN-F65eTx6Qz_uhi3g42D28XkDOGv0_ZTECflbAUkk",
      page: currentPage,
      per_page: 12,
      query: query,
    },
  });
  return response.data;
};
export default getPhotos;
