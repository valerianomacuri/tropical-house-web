import { TextField } from "components/common/TextField"
import { Typography } from "components/common/Typography"
import { PlayerCard } from "components/PlayerCard"
import { SongCard } from "components/SongCard"
import tracks from "data"
import { Player } from "pages/Player"
import { Fragment } from "react"
import { Outlet, Route } from "react-router-dom"
import styles from "./styles.module.css"

export const Home = () => {
	return (
		<Fragment>
			<div className={styles.container}>
				<Typography variant="title1" component="h2">
					Discover
				</Typography>
				<Typography>What do you want to hear?</Typography>
				<TextField />
				<Typography variant="subtitle1">Popular Releases</Typography>
				<div className={styles.songCardsContainer}>
					{tracks.map(track => (
						<SongCard
							key={track.source}
							name={track.name}
							cover={track.cover}
							artist={track.artist}
						/>
					))}
				</div>
				<Typography variant="subtitle1">Recently playlist</Typography>
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
				<PlayerCard />
			</div>
			<Outlet />
		</Fragment>
	)
}
