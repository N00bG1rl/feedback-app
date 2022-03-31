//import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../../context/FeedbackContext'

// propr = { feedback }
function FeedbackStats() {
	const { feedback } = useContext(FeedbackContext)

	let avarageRating =
		feedback.reduce((acc, cur) => {
			return acc + cur.rating
		}, 0) / feedback.length

	avarageRating = avarageRating.toFixed(1).replace(/[.,]0$/, '')

	return (
		<div className='feedback-stats'>
			<h4>{feedback.length} Reviews</h4>
			<h4>Avarege rating: {isNaN(avarageRating) ? 0 : avarageRating}</h4>
		</div>
	)
}

// FeedbackStats.propTypes = {
// 	feedback: PropTypes.array.isRequired,
// }

export default FeedbackStats
