import { useEffect, useLayoutEffect, useState } from "react"

type State = {
	width: number | undefined
	height: number | undefined
}
// Hook
export const useElementSize = (element: HTMLElement | null) => {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [elementSize, setElementSize] = useState<State>({
		width: undefined,
		height: undefined,
	})
	useEffect(() => {
		// Handler to call on window resize
		function handleResize() {
			setElementSize({
				width: element?.clientWidth,
				height: element?.clientHeight,
			})
		}
		// Add event listener
		window.addEventListener("resize", handleResize)
		// Call handler right away so state gets updated with initial window size
		handleResize()
		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleResize)
	}, [element]) // Empty array ensures that effect is only run on mount
	return elementSize
}
