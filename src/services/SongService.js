import { MOCKAPI_URL } from '../config';

/**
 * @returns {Promise<Track[]>}
 */
export async function getTrackList() {
  let url = `${MOCKAPI_URL}/Songs`;
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

export async function callSongAt(id) {
  let url = `${MOCKAPI_URL}/Songs/${id}`;
  const response = await fetch(url);
  const json = await response.json();
  return json;
}
