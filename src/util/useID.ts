import { useLayoutEffect, useState } from "react"

let id = 0
function generateId() {
	return ++id
}

export const useId = () => {

		const [id, setId] = useState(generateId)

		useLayoutEffect(() => {
			if (id === null) setId(generateId())
		}, [id])

		return id != null ? '' + id : undefined
	}