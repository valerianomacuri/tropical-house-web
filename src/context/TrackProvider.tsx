import hardTracks from "data"
import { getRandomInt } from "helpers"
import { Track } from "interfaces/track"
import React, { useReducer } from "react"
import { trackReducer } from "reducers/trackReducer"
import { TrackContext, trackInitialState } from "./TrackContext"

export const TrackProvider = ({ children }: { children: React.ReactNode }) => {
	const [trackState, dispatch] = useReducer(trackReducer, trackInitialState)
	const getTracks = async (textToSearch: string) => {
		try {
			console.log("Buscando canciones de: ", textToSearch)
			let myHeaders = new Headers()
			myHeaders.append("Content-Type", "application/json")
			myHeaders.append(
				"Access-Control-Request-Method",
				"GET,PUT,POST,DELETE,PATCH,OPTIONS",
			)

			let raw = JSON.stringify({
				textToSearch: textToSearch.split(" ").join("-"),
			})

			const response = await fetch("http://localhost:4000/api/tracks", {
				method: "POST",
				headers: myHeaders,
				body: raw,
				redirect: "follow",
			})

			const tracks = await response.json()
			console.log("Tracks: ", tracks)
			dispatch({
				type: "SEARCHED_TRACKS",
				payload: tracks.map((track: Track) => ({
					...track,
					cover: hardTracks[getRandomInt(1, 9)].cover,
					favorited: false,
				})),
			})
		} catch (error) {
			throw error
		}
	}
	return (
		<TrackContext.Provider
			value={{
				trackState,
				getTracks,
			}}
		>
			{children}
		</TrackContext.Provider>
	)
}
