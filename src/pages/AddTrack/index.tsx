import { Button } from "components/common/Button"
import { TextField } from "components/common/TextField"
import { Typography } from "components/common/Typography"
import styles from "./styles.module.css"

export const AddTrack = () => {
	return (
		<div className={styles.container}>
			<Typography variant="title1" component="h2">
				Add Track
			</Typography>
			<Typography>What do you want to add?</Typography>
			<Typography variant="subtitle1">New Track</Typography>
			<TextField startIconClassName="bxs-music" placeholder="Title" />
			<TextField startIconClassName="bxs-user" placeholder="Artist" />
			<TextField
				startIconClassName="bx-link"
				placeholder="Cover Art (url)"
			/>
			<TextField startIconClassName="bx-link" placeholder="Song (url)" />
			<Button size="medium" fullWidth>
				Add track
			</Button>
		</div>
	)
}
