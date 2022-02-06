import { Typography } from "components/common/Typography"
import { setTrackRoute } from "helpers"
import { useNavigate } from "react-router-dom"
import styles from "./styles.module.css"
interface SongCardProps {
	cover?: string
	name?: string
	artist?: string
}
export const SongCard = ({
	name = "Undefined",
	cover = "./assets/images/moonchild.jpg",
	artist = "Undefined",
}: SongCardProps) => {
	const navigate = useNavigate()
	return (
		<div
			className={styles.card}
			style={{
				backgroundImage: `url(${cover})`,
			}}
			onClick={() => navigate(`${setTrackRoute(name, artist)}`)}
		>
			<div className={styles.cardInfo}>
				<Typography variant="subtitle2">{name}</Typography>
				<Typography>{artist}</Typography>
			</div>
		</div>
	)
}
