import clsx from "clsx"
import styles from "./styles.module.css"
interface ButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	children?: React.ReactNode
	variant?: "outlined" | "contained"
	fullWidth?: boolean
	size?: "small" | "medium" | "large"
}

export const Button = ({
	children,
	variant = "contained",
	fullWidth = false,
	size = "small",
	...props
}: ButtonProps) => {
	return (
		<button
			className={clsx(styles.button, styles[variant], styles[size])}
			style={{
				width: fullWidth ? "100%" : undefined,
			}}
			{...props}
		>
			{children}
		</button>
	)
}
