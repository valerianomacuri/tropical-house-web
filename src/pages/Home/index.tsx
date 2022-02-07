import { TextField } from "components/common/TextField"
import { Typography } from "components/common/Typography"
import { PlayerCard } from "components/PlayerCard"
import { SongCard } from "components/SongCard"
import { useTrack } from "context/TrackContext"
import { Fragment, useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import styles from "./styles.module.css"

export const Home = () => {
	const { getTracks, trackState } = useTrack()
	const { searchedTracks, popularTracks } = trackState
	const [textToSearch, setTextToSearch] = useState("")
	useEffect(() => {
		getTracks("maluma")
	}, [])
	return (
		<Fragment>
			<div className={styles.container}>
				<Typography variant="title1" component="h2">
					Discover
				</Typography>
				<Typography>What do you want to hear?</Typography>
				<form
					onSubmit={e => {
						e.preventDefault()
						getTracks(textToSearch)
					}}
				>
					<TextField
						onChange={e => setTextToSearch(e.target.value)}
					/>
				</form>
				<Typography variant="subtitle1">Popular Releases</Typography>
				<div className={styles.songCardsContainer}>
					{popularTracks.map(track => (
						<SongCard
							key={track.source}
							name={track.name}
							cover={track.cover}
							artist={track.artist}
						/>
					))}
				</div>
				<Typography variant="subtitle1">Recently playlist</Typography>
				{searchedTracks?.map(track => (
					<PlayerCard
						key={track.source}
						name={track.name}
						artist={track.artist}
						cover={track.cover}
					/>
				))}
				<PlayerCard />
				<PlayerCard />
				<PlayerCard />
				<PlayerCard />
				<PlayerCard />
				<PlayerCard />
				<PlayerCard />
				<PlayerCard />
				<PlayerCard />
				<PlayerCard />
			</div>
			<Outlet />
		</Fragment>
	)
}
