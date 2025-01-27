import { MOCKAPI_URL } from '../config';

/**
 * @returns {Promise<Track[]>}
 */
export async function getTrackList() {
  let url = `${MOCKAPI_URL}/tracks`;
  const response = await fetch(url);
  const json = await response.json();
  return json;
}
