import { Button } from "components/common/Button"
import { TextField } from "components/common/TextField"
import { Typography } from "components/common/Typography"
import { PlaylistCard } from "components/PlaylistCard"
import styles from "./styles.module.css"
export const Playlists = () => {
	return (
		<div className={styles.container}>
			<Typography variant="title1" component="h2">
				Genre
			</Typography>
			<TextField />
			<div className={styles.buttonsContainer}>
				<Button variant="contained">Dangdut</Button>
				<Button variant="outlined">Blues</Button>
				<Button variant="outlined">Rock Roll</Button>
				<Button variant="outlined">Jazz</Button>
			</div>
			<Typography variant="subtitle1">Top pick for dangdut</Typography>
			<div className={styles.playlistCardContainer}>
				<PlaylistCard />
				<PlaylistCard />
				<PlaylistCard />
				<PlaylistCard />
				<PlaylistCard />
				<PlaylistCard />
				<PlaylistCard />
				<PlaylistCard />
				<PlaylistCard />
				<PlaylistCard />
			</div>
		</div>
	)
}
