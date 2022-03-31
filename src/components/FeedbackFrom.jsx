import { useState } from 'react'
import Card from './UI/Card'

function FeedbackFrom() {
	const [text, setText] = useState('')

	const handleTextChange = event => {
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
						placeholder='Write a rewiev'
					/>
					<button type='submit'>Send</button>
				</div>
			</form>
		</Card>
	)
}

export default FeedbackFrom
