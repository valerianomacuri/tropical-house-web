import { Typography } from "components/common/Typography"
import styles from "./styles.module.css"
export const PlaylistCard = () => {
	return (
		<div className={styles.card}>
			<div
				className={styles.backgroundImage}
				style={{
					backgroundImage: "url(./assets/images/album.jpg)",
				}}
			></div>
			<Typography variant="subtitle2">Indie Hits 2021</Typography>
			<Typography>240 song</Typography>
		</div>
	)
}
