import { createContext, useState, useEffect } from 'react'
//import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [feedback, setFeedback] = useState([])
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	})

	useEffect(() => {
		console.log('fetch')
		fetchFeedback()
	}, [])

	const clearEditState = () => {
		setFeedbackEdit({
			item: {},
			edit: false,
		})
	}

	const fetchFeedback = async () => {
		const response = await fetch('/feedback')
		const data = await response.json()

		setFeedback(data)
		setIsLoading(false)
	}

	const addFeedback = async newFeedback => {
		const response = await fetch('/feedback', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newFeedback),
		})

		const data = await response.json()

		//newFeedback.id = uuidv4()
		setFeedback([data, ...feedback])
	}

	const editFeedback = item => {
		setFeedbackEdit({
			item,
			edit: true,
		})
	}

	const updateFeedback = async (id, updatedItem) => {
		const response = await fetch(`/feedback/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedItem),
		})

		const data = await response.json()

		setFeedback(
			feedback.map(item => (item.id === id ? { ...item, ...data } : item))
		)

		clearEditState()
	}

	const deleteFeedback = async id => {
		if (window.confirm('Are you sure you want to delete?')) {
			await fetch(`/feedback/${id}`, { method: 'DELETE' })

			setFeedback(feedback.filter(item => item.id !== id))
		}
	}

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit,
				isLoading,
				deleteFeedback,
				addFeedback,
				editFeedback,
				updateFeedback,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
