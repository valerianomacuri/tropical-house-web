import { Typography } from 'components/common/Typography'
import styles from './styles.module.css'
export const SongCard = () => {
  return (
      <div 
        className={ styles.card }
        style={{
          backgroundImage: 'url(./assets/images/moonchild.jpg)'
        }}
      >
          <div className={ styles.cardInfo }>
            <Typography
              variant='subtitle2'
            >
              Moonchild Era
            </Typography>
            <Typography>
              Diljit Dosanjh
            </Typography>
          </div>
      </div>
  )
}
