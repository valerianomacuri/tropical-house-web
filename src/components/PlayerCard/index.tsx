import { IconButton } from "components/common/IconButton"
import { Typography } from "components/common/Typography"
import styles from "./styles.module.css"

export const PlayerCard = () => {
	return (
		<div className={styles.playerCard}>
			<div
				className={styles.cover}
				style={{
					backgroundImage: "url(./assets/images/cover.jpg)",
				}}
			/>
			<div className={styles.description}>
				<Typography variant="subtitle2">Teeje Week</Typography>
				<Typography>Jordan Sandhu</Typography>
			</div>
			<IconButton variant="primary" />
		</div>
	)
}
