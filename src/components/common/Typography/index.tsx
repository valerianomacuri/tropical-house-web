import clsx from "clsx"
import styles from './styles.module.css'

type Props = {
    Component?: string;
    variant?: 'title1' | 'title2' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2';
    children?: React.ReactNode;
    className?: string;
    color?: string;
    align?: string;
    [x: string]: any;
}

export const Typography = ({ 
    component: Component = "p", 
    variant = "body1", 
    children, 
    className,
    color,
    align,
    ...props 
}: Props) => {
    return (
        <Component
            className={ clsx( 
                styles.normalize,
                styles[ variant ], 
                className 
            ) }
            style={{ color, textAlign: align }}
            { ...props }
        >
            { children }
        </Component>
    )
}