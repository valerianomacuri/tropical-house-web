import ReactDOM from "react-dom"
import styles from "./styles.module.css"

export const Modal = ({ children }: { children: React.ReactNode }) => {
	return ReactDOM.createPortal(
		// elemento creado
		<div className={styles.ModalBackground}>{children}</div>,
		// donde se va a renderizar
		document.getElementById("modal") as HTMLElement,
	)
}
