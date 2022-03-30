import PropTypes from 'prop-types'

import Card from './UI/Card'

function FeedbackItem({ item }) {
	// const [rating, setRating] = useState(7)
	// const [text, setText] = useState('Add text here...')

	// const handleClick = () => {
	// 	setRating(prev => {
	// 		return prev + 1
	// 	})
	// }

	return (
		<Card>
			<div className='num-display'>{item.rating}</div>
			<div className='text-display'>{item.text}</div>
		</Card>
	)
}

FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired,
}

export default FeedbackItem
