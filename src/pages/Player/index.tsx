import { IconButton } from "components/common/IconButton"
import { Typography } from "components/common/Typography"
import { useAudio } from "context/AudioContext"
import tracks from "data"
import { getTrackDataByTrackRoute, setTrackRoute, toMMSS } from "helpers"
import { Track } from "interfaces/track"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import styles from "./styles.module.css"

export const Player = () => {
	const { trackId } = useParams()
	const navigate = useNavigate()
	console.log(trackId)
	const { name, artist } = getTrackDataByTrackRoute(trackId as string)
	const {
		audio,
		duration,
		currentTime,
		paused,
		trackLoading,
		currentTrack,
		setCurrentTrack,
		setPaused,
	} = useAudio()

	useEffect(() => {
		document.title = name + " - " + artist
	}, [trackId])
	useEffect(() => {
		setCurrentTrack(
			tracks.find(
				track => track.artist === artist && track.name === name,
			) as Track,
		)
	}, [trackId])

	const goToNextTrack = () => {
		const indexTrack = tracks.findIndex(
			track => track.artist === artist && track.name === name,
		)
		const nextTrack = tracks.find((_, index) => index === indexTrack + 1)

		const trackRoute = setTrackRoute(nextTrack?.name, nextTrack?.artist)
		if (trackRoute) {
			navigate(`/${trackRoute}`)
		} else {
			alert("No se encontraron más canciones")
		}
	}

	const goToPrevTrack = () => {
		const indexTrack = tracks.findIndex(
			track => track.artist === artist && track.name === name,
		)
		const prevTrack = tracks.find((_, index) => index === indexTrack - 1)
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
				<input
					className={styles.progressBar}
					type={"range"}
					min={0}
					value={currentTime}
					max={duration}
					onChange={() => {}}
				/>
				<Typography variant="body2" component="span">
					{toMMSS(currentTime)}
				</Typography>
				<Typography variant="body2" component="span">
					{toMMSS(duration)}
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
