let rootUrl='https://6465be999c09d77a62f2b61f.mockapi.io/GSound/v1/'

export async function callArtistList() {
	let url = `${rootUrl}Artists`
	const response = await fetch(url)
	const json = await response.json()
	return json
}

export async function callArtistAt(id) {
	let url = `${rootUrl}Artists/${id}`
	const response = await fetch(url)
	const json = await response.json()
	return json
}