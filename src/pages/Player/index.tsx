import { IconButton } from "components/common/IconButton"
import { Typography } from "components/common/Typography"
import { useAudio } from "context/AudioContext"
import { useTrack } from "context/TrackContext"
import {
	getRandomInt,
	getTrackDataByTrackRoute,
	setTrackRoute,
	toMMSS,
} from "helpers"
import { useElementSize } from "hooks/useWindowSize"
import { Track } from "interfaces/track"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import styles from "./styles.module.css"

export const Player = () => {
	const { trackId } = useParams()
	const navigate = useNavigate()
	const { name, artist } = getTrackDataByTrackRoute(trackId as string)
	const {
		audio,
		duration,
		currentTime,
		paused,
		trackLoading,
		currentTrack,
		setCurrentTrack,
		setCurrentTime,
		setPaused,
	} = useAudio()
	const { trackState } = useTrack()
	const { popularTracks } = trackState
	const [nextTime, setNextTime] = useState<number>()
	const [showHoverTime, setShowHoverTime] = useState<boolean>(false)
	const progressBar = useElementSize(document.getElementById("progressBar"))
	console.log(progressBar)
	useEffect(() => {
		document.title = name + " - " + artist
	}, [trackId])
	useEffect(() => {
		const track = popularTracks.find(
			track => track.artist === artist && track.name === name,
		) as Track

		setCurrentTrack(track)
	}, [trackId])

	useEffect(() => {
		let listener = () => {
			goToNextTrack()
		}
		audio.addEventListener("ended", listener)

		return () => audio.removeEventListener("ended", listener)
	}, [trackId])

	const goToNextTrack = () => {
		const indexTrack = popularTracks.findIndex(
			track => track.artist === artist && track.name === name,
		)
		const nextTrack = popularTracks.find(
			(_, index) => index === indexTrack + 1,
		)

		const trackRoute = setTrackRoute(nextTrack?.name, nextTrack?.artist)
		if (trackRoute) {
			navigate(`/${trackRoute}`)
		} else {
			alert("No se encontraron más canciones")
		}
	}

	const goToPrevTrack = () => {
		const indexTrack = popularTracks.findIndex(
			track => track.artist === artist && track.name === name,
		)
		const prevTrack = popularTracks.find(
			(_, index) => index === indexTrack - 1,
		)
		const trackRoute = setTrackRoute(prevTrack?.name, prevTrack?.artist)

		if (trackRoute) {
			navigate(`/${trackRoute}`)
		} else {
			alert("No se encontraron más canciones")
		}
	}
	if (!name || !artist) return <Navigate to="/" replace />

	if (trackLoading)
		return (
			<div
				className={styles.container}
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<IconButton
					variant="ghost"
					size="medium"
					iconClassName="bx-loader-alt bx-spin"
				/>
			</div>
		)
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<IconButton
					variant="ghost"
					iconClassName="bx-chevron-left"
					buttonProps={{
						onClick: () => navigate("/"),
					}}
				/>
				<Typography variant="subtitle2" component="h3">
					Playing Now
				</Typography>
			</div>
			<div
				className={styles.backgroundImage}
				style={{
					backgroundImage: `url(${currentTrack?.cover})`,
				}}
			></div>

			<Typography variant="title2">{currentTrack?.name}</Typography>
			<Typography>{currentTrack?.artist}</Typography>
			<div className={styles.progressBarContainer}>
				<div
					className={styles.progressStatus}
					id="progressStatus"
					style={{
						width: showHoverTime
							? nextTime && duration && progressBar.width
								? (progressBar.width * nextTime) / duration + 2
								: 0
							: currentTime && duration && progressBar.width
							? (progressBar.width * currentTime) / duration + 2
							: 0,
					}}
				/>
				<input
					id="progressBar"
					className={styles.progressBar}
					type={"range"}
					min={0}
					value={showHoverTime ? nextTime : currentTime}
					max={duration}
					onChange={e => {
						setNextTime(parseInt(e.target.value))
					}}
					onMouseDown={() => {
						setShowHoverTime(true)
					}}
					onMouseUp={(e: any) => {
						setShowHoverTime(false)
						audio.currentTime = parseInt(e.target.value)
						setCurrentTime(audio.currentTime)
					}}
					onTouchStart={() => {
						setShowHoverTime(true)
					}}
					onTouchEnd={(e: any) => {
						setShowHoverTime(false)
						audio.currentTime = parseInt(e.target.value)
						setCurrentTime(audio.currentTime)
					}}
				/>
				<Typography variant="body2" component="span">
					{toMMSS(currentTime)}
				</Typography>
				<Typography variant="body2" component="span">
					{toMMSS((duration as number) - (currentTime as number))}
				</Typography>
			</div>
			<div className={styles.playerButtons}>
				<IconButton
					variant="secondary"
					size="small"
					iconClassName="bx-heart"
				/>
				<IconButton
					variant="secondary"
					size="small"
					iconClassName="bx-skip-previous"
					buttonProps={{
						onClick: () => goToPrevTrack(),
					}}
				/>

				{paused ? (
					<IconButton
						variant="primary"
						size="large"
						buttonProps={{
							onClick: () => {
								audio.play().then(() => {
									setPaused(false)
								})
							},
						}}
					/>
				) : (
					<IconButton
						variant="primary"
						size="large"
						iconClassName="bx-pause"
						buttonProps={{
							onClick: () => {
								audio.pause()
								setPaused(true)
							},
						}}
					/>
				)}
				<IconButton
					variant="secondary"
					size="small"
					iconClassName="bx-skip-next"
					buttonProps={{
						onClick: () => goToNextTrack(),
					}}
				/>
				<IconButton
					variant="secondary"
					size="small"
					iconClassName="bx-share-alt"
				/>
			</div>
		</div>
	)
}
