import { useContext } from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'

import FeedbackContext from '../../context/FeedbackContext'
import Card from '../UI/Card'

function FeedbackItem({ item }) {
	const { deleteFeedback } = useContext(FeedbackContext)

	return (
		<Card>
			<div className='num-display'>{item.rating}</div>
			<button onClick={() => deleteFeedback(item.id)} className='close'>
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
