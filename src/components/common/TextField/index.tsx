import styles from "./styles.module.css"

interface TextFieldProps
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	placeholder?: string
	startIconClassName?: string
}

export const TextField = ({
	placeholder = "Search music",
	startIconClassName = "bx-search",
	...props
}: TextFieldProps) => {
	return (
		<div className={styles.textField}>
			<i
				className={["bx", startIconClassName, styles.icon].join(" ")}
			></i>
			<input
				className={styles.input}
				type={"text"}
				placeholder={placeholder}
				{...props}
			/>
		</div>
	)
}
