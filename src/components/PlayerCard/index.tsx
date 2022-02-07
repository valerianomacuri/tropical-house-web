import { IconButton } from "components/common/IconButton"
import { Typography } from "components/common/Typography"
import styles from "./styles.module.css"

interface PlayerCardProps {
	cover?: string
	name?: string
	artist?: string
}
export const PlayerCard = ({
	name = "undefined",
	artist = "undefined",
	cover = "./assets/images/cover.jpg",
}: PlayerCardProps) => {
	return (
		<div className={styles.playerCard}>
			<div
				className={styles.cover}
				style={{
					backgroundImage: `url(${cover})`,
				}}
			/>
			<div className={styles.description}>
				<Typography variant="subtitle2">{name}</Typography>
				<Typography>{artist}</Typography>
			</div>
			<IconButton variant="primary" />
		</div>
	)
}
