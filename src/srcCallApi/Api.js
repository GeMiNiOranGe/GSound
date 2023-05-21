let rootUrl = 'https://6465be999c09d77a62f2b61f.mockapi.io/GSound/v1/'

export async function callSongList() {
	let url = `${rootUrl}Songs`
	const response = await fetch(url)
	const json = await response.json()
	return json
}

export async function callSongAt(id) {
	let url = `${rootUrl}Songs/${id}`
	const response = await fetch(url)
	const json = await response.json()
	return json
}
