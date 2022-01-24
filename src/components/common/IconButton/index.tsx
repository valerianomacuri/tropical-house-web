import styles from './styles.module.css'

type Props = {
    iconClassName?: string;
    size?: 'small' | 'medium' | 'large' ;
    variant?: 'primary' | 'secondary' ;
    [x: string]: any
}

export const IconButton = ({
    iconClassName='bx-play',
    size = 'small',
    variant = 'primary',
    ...props
}: Props) => {
  return (
      <button
        className={ [ styles.iconButton ,styles[ size ], styles[ variant] ].join(' ') }
        { ...props }
      >
          <i className={ [ 'bx', iconClassName, styles.iconButton, styles[ size ] ].join(' ') }></i>
      </button>
  )
};
