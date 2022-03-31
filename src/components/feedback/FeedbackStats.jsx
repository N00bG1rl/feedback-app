import PropTypes from 'prop-types'

function FeedbackStats({ feedback }) {
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

FeedbackStats.propTypes = {
	feedback: PropTypes.array.isRequired,
}

export default FeedbackStats