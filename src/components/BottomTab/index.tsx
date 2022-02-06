import { IconButton } from "components/common/IconButton"
import {
	HashRouter,
	useLocation,
	useMatch,
	useNavigate,
	useRoutes,
} from "react-router-dom"
import styles from "./styles.module.css"

export const BottomTab = () => {
	const navigate = useNavigate()
	const { pathname } = useLocation()
	return (
		<div className={styles.bottomTab}>
			<IconButton
				iconClassName="bxs-home"
				variant="ghost"
				buttonProps={{
					onClick: () => navigate("/"),
				}}
				color={pathname === "/" ? "#940CFF" : "#fff"}
			/>
			<IconButton
				iconClassName="bx-radio-circle-marked"
				variant="ghost"
				buttonProps={{
					onClick: () => navigate("/playlists"),
				}}
				color={pathname === "/playlists" ? "#940CFF" : "#fff"}
			/>
			<IconButton iconClassName="bx-heart" variant="ghost" disabled />
			<IconButton iconClassName="bxs-wrench" variant="ghost" disabled />
		</div>
	)
}
