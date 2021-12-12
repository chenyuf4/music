import { ArtistisDataApi } from "types/artists";
import axiosExecute from "utils/axios";

function getArtistsData({ limit = 30, offset = 0, type = -1, area = -1 }) {
  return axiosExecute<ArtistisDataApi>({
    url: `/artist/list?limit=${limit}&offset=${offset}&type=${type}&area=${area}`,
  });
}

const artists = {
  getArtistsData,
};

export default artists;
