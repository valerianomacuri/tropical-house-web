import tracks from "data"
import { Track } from "interfaces/track"
import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import { AudioContext } from "./AudioContext"

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
	const audio = useRef(new Audio()).current
	const [duration, setDuration] = useState<number>(
		audio.duration ? 0 : Math.trunc(audio.duration),
	)
	const [currentTime, setCurrentTime] = useState(
		Math.trunc(audio.currentTime),
	)
	const [paused, setPaused] = useState<boolean>(audio.paused)
	const [currentTrack, setCurrentTrack] = useState<Track>()
	const [trackLoading, setTrackLoading] = useState<boolean>(true)

	useLayoutEffect(() => {
		if (audio.src === currentTrack?.source) return
		audio.src = currentTrack?.source as string
		setTrackLoading(true)
		setPaused(audio.paused)
		setCurrentTime(audio.currentTime)
	}, [currentTrack])

	useLayoutEffect(() => {
		const id = setInterval(() => {
			setCurrentTime(Math.trunc(audio.currentTime))
		}, 500)
		return () => clearInterval(id)
	}, [currentTrack])

	useEffect(() => {
		let listener = () => {
			let duration = Math.trunc(audio.duration)
			setDuration(duration)
		}
		audio.addEventListener("loadedmetadata", listener)
		return () => audio.removeEventListener("loadedmetadata", listener)
	}, [currentTrack])

	useEffect(() => {
		let listener = () => {
			console.log("canplaythrough")
			setTrackLoading(false)
			audio.play().then(() => {
				setPaused(false)
			})
		}
		audio.addEventListener("canplaythrough", listener)

		return () => audio.removeEventListener("canplaythrough", listener)
	}, [currentTrack])

	useEffect(() => {
		console.log("Current Time: ", currentTime)
	}, [currentTime])

	useEffect(() => {
		console.log("Duration: ", duration)
	}, [duration])
	return (
		<AudioContext.Provider
			value={{
				audio,
				duration,
				currentTime,
				paused,
				trackLoading,
				setPaused,
				currentTrack,
				setDuration,
				setCurrentTime,
				setCurrentTrack,
				setTrackLoading,
			}}
		>
			{children}
		</AudioContext.Provider>
	)
}
