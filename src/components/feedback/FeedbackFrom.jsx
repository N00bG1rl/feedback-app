import { useState, useContext } from 'react'

import FeedbackContext from '../../context/FeedbackContext'
import Card from '../UI/Card'
import Button from '../UI/Button'
import RatingSelect from './RatingSelect'

function FeedbackFrom() {
	const [text, setText] = useState('')
	const [rating, setRating] = useState(10)
	const [btnDisabled, setBtnDisabled] = useState(true)
	const [message, setMessage] = useState('')

	const { addFeedback } = useContext(FeedbackContext)

	const handleTextChange = event => {
		if (!text.length) {
			setBtnDisabled(true)
			setMessage(null)
		} else if (text !== '' && text.trim().length <= 10) {
			setBtnDisabled(true)
			setMessage('Text must be at least 10 characters')
		} else {
			setMessage(null)
			setBtnDisabled(false)
		}

		setText(event.target.value)
	}

	const handleSubmit = event => {
		event.preventDefault()

		if (text.trim().length > 10) {
			const newFeedback = {
				text,
				rating,
			}

			addFeedback(newFeedback)
			setText('')
		}
	}

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate your service with us?</h2>
				<RatingSelect select={rating => setRating(rating)} />
				<div className='input-group'>
					<input
						onChange={handleTextChange}
						value={text}
						type='text'
						placeholder='Write a review'
					/>
					<Button type='submit' isDisabled={btnDisabled}>
						Send
					</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	)
}

export default FeedbackFrom
