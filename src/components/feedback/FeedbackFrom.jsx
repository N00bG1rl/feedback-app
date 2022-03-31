import { useState } from 'react'

import Card from '../UI/Card'
import Button from '../UI/Button'

function FeedbackFrom() {
	const [text, setText] = useState('')
	const [btnDisabled, setBtnDisabled] = useState(true)
	const [message, setMessage] = useState('')

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

	return (
		<Card>
			<form action=''>
				<h2>How would you rate your service with us?</h2>
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
