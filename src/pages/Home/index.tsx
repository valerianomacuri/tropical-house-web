import { TextField } from 'components/common/TextField'
import { Typography } from 'components/common/Typography'
import { PlayerCard } from 'components/PlayerCard'
import { SongCard } from 'components/SongCard'
import { Fragment } from 'react'
import styles from './styles.module.css'

export const Home = () => {
  return (
    <Fragment>
      <div className={ styles.container }>
      <Typography
        variant='title1'
        component='h2'
      >
        Discover
      </Typography>
      <Typography
      >
        What do you want to hear?
      </Typography>
      <TextField />
      <Typography
        variant='subtitle1'
      >
        Popular Releases
      </Typography>
      <div className={ styles.songCardsContainer }>
        <SongCard />
        <SongCard />
        <SongCard />
        <SongCard />
      </div>
      <Typography
        variant='subtitle1'
      >
        Recently playlist
      </Typography>
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
    </Fragment>
  )
}
