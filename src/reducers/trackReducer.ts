import { TrackState } from "context/TrackContext"

type TrackAction = {
	type: "POPULAR_TRACKS" | "SEARCHED_TRACKS"
	payload?: any
}
export const trackReducer = (state: TrackState, action: TrackAction) => {
	switch (action.type) {
		case "POPULAR_TRACKS":
			return {
				...state,
				popularTracks: action.payload,
			}

		case "SEARCHED_TRACKS":
			return {
				...state,
				searchedTracks: action.payload,
			}
		default:
			return state
	}
}
