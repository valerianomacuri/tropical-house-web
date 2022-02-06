export const toMMSS = function (duration?: number) {
	if (!duration) return "00:00"
	let sec_num = duration // don't forget the second param
	let minutes: number | string = Math.floor(sec_num / 60)
	let seconds: number | string = sec_num - minutes * 60
	if (minutes < 10) {
		minutes = "0" + minutes
	}
	if (seconds < 10) {
		seconds = "0" + seconds
	}
	return minutes + ":" + seconds
}

export const getTrackDataByTrackRoute = (trackRoute: string) => {
	const array = trackRoute.split("_")
	if (array.length === 2) {
		return {
			name: array[0].split("+").join(" "),
			artist: array[1].split("+").join(" "),
		}
	}
	return {
		name: undefined,
		artist: undefined,
	}
}

export const setTrackRoute = (name?: string, artist?: string) => {
	if (!name || !artist) return undefined
	return name.split(" ").join("+") + "_" + artist.split(" ").join("+")
}
