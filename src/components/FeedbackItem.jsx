import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'

import Card from './UI/Card'

function FeedbackItem({ item, handleDelete }) {
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
			<button onClick={() => handleDelete(item.id)} className='close'>
				<FaTimes color='red' />
			</button>
			<div className='text-display'>{item.text}</div>
		</Card>
	)
}

FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired,
}

export default FeedbackItem
