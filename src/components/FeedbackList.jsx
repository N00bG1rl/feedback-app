import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedback }) {
	console.log(feedback)

	if (!feedback || !feedback.length) {
		return <p>No feedbacks yet. Add an feedback...</p>
	}

	return (
		<div className='feedback-list'>
			{feedback.map(item => (
				<FeedbackItem key={item.id} item={item} />
			))}
		</div>
	)
}

export default FeedbackList
