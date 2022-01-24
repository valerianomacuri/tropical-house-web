import clsx from 'clsx'
import styles from './styles.module.css'
type Props = {
    children?: React.ReactNode;
    variant?: 'outlined' | 'contained',
}

export const Button = ({
    children,
    variant = 'contained',
    ...props
}: Props) => {
  return (
    <button
        className={ clsx(
            styles.button,
            styles[ variant ]
        ) }
        { ...props }
    >
        { children }
    </button>
  )
}
