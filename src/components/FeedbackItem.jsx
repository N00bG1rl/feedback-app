import { useState } from 'react'

function FeedbackItem({ item }) {
	const [rating, setRating] = useState(7)
	const [text, setText] = useState('Add text here...')

	// const handleClick = () => {
	// 	setRating(prev => {
	// 		return prev + 1
	// 	})
	// }

	return (
		<div className='card'>
			<div className='num-display'>{item.rating}</div>
			<div className='text-display'>{item.text}</div>
		</div>
	)
}

export default FeedbackItem
