import { MOCKAPI_URL } from '../config';

/**
 * @returns {Promise<Artist[]>}
 */
export async function getArtistList() {
  let url = `${MOCKAPI_URL}/Artists`;
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

export async function callArtistAt(id) {
  let url = `${MOCKAPI_URL}/Artists/${id}`;
  const response = await fetch(url);
  const json = await response.json();
  return json;
}
