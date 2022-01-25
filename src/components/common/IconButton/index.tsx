import styles from './styles.module.css'

type Props = {
    buttonProps?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
    color?: string;
    iconClassName?: string;
    size?: 'small' | 'medium' | 'large' ;
    variant?: 'primary' | 'secondary' | 'ghost';
}

export const IconButton = ({
    buttonProps,
    color,
    iconClassName='bx-play',
    size = 'small',
    variant = 'primary',
}: Props) => {
  return (
      <button
        className={ [ styles.iconButton ,styles[ size ], styles[ variant] ].join(' ') }
        { ...buttonProps }
      >
          <i 
            className={ [ 'bx', iconClassName, styles.iconButton, styles[ size ] ].join(' ') }
            style={{ color, }}
          ></i>
      </button>
  )
};
