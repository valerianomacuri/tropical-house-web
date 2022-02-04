import { IconButton } from "components/common/IconButton"
import { Typography } from "components/common/Typography"
import styles from "./styles.module.css"
export const Player = () => {
	return (
		<div className={styles.container}>
			<div
				className={styles.backgroundImage}
				style={{
					backgroundImage: "url(./assets/images/moonchild.jpg)",
				}}
			></div>

			<Typography variant="title2">Lover Diljit Dosanjh</Typography>
			<Typography>Moonchild Era</Typography>
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
				/>
				<IconButton variant="primary" size="large" />
				<IconButton
					variant="secondary"
					size="small"
					iconClassName="bx-skip-next"
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
