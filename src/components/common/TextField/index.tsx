import styles from './styles.module.css'

type Props = {
    placeholder?: string;
    startIcon?: string;
    [x: string]: any
}

export const TextField = ({
    placeholder = "Search music",
    startIconClassName = 'bx-search',
    ...props
}: Props) => {
  return (
    <div className={ styles.textField }>
       <i className={ ['bx', startIconClassName, styles.icon ].join(' ') }></i>
       <input 
        className={ styles.input }
        type={"text"}
        placeholder={ placeholder }
        { ...props }
       />
    </div>
 )
}
